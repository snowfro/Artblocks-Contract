import request from "graphql-request";
import ArtBlocksSDK from "../index";
import {
  ConfigurationForm,
  filterProjectIdFromFormSchema,
  minterSelectionSchema,
  mockMinterSchemaMap,
} from "../minters";
import { getProjectMinterConfigurationQueryDocument } from "./graphql";
import { useFragment } from "../generated";
import {
  GetProjectMinterConfigurationQuery,
  ProjectMinterConfigurationDetailsFragment,
  ProjectMinterConfigurationDetailsFragmentDoc,
} from "../generated/graphql";
import { FormFieldSchema, isOnChainFormFieldSchema } from "../json-schema";
import { formFieldSchemaToZod } from "../utils";
import { submitTransaction } from "../utils/web3";
import { Abi, Hex, WalletClient } from "viem";
import {
  getAllowedPrivilegedRoles,
  getInitialMinterConfigurationValuesForFormField,
  mapFormValuesToArgs,
  pollForProjectMinterConfigurationUpdates,
  transformProjectMinterConfigurationFormValues,
} from "./utils";

type GenerateProjectMinterConfigurationFormsArgs = {
  projectId: string;
  onConfigurationChange: (configuration: ConfigurationForm[]) => void;
  sdk: ArtBlocksSDK;
};

export type GenerateProjectMinterConfigurationFormsContext =
  GenerateProjectMinterConfigurationFormsArgs & {
    allowedPrivilegedRolesForProject: string[];
    coreContractAddress: string;
    projectIndex: number;
    project: ProjectWithMinterFilter;
  };

type ProjectWithMinterFilter = NonNullable<
  GetProjectMinterConfigurationQuery["projects_metadata_by_pk"]
> & {
  contract: {
    minter_filter: {
      address: string;
    };
  };
};

export async function generateProjectMinterConfigurationForms(
  args: GenerateProjectMinterConfigurationFormsArgs
): Promise<ConfigurationForm[]> {
  const { projectId, sdk } = args;
  const [coreContractAddress, projectIndexString] = projectId.split("-");
  const projectIndex = Number(projectIndexString);

  // Get current minter configuration details from the database
  const res = await request(
    sdk.graphqlEndpoint,
    getProjectMinterConfigurationQueryDocument,
    {
      projectId,
    },
    {
      Authorization: `Bearer ${sdk.jwt}`,
    }
  );
  const project = res.projects_metadata_by_pk;

  if (!project) {
    throw new Error(`Could not find project with id ${projectId}`);
  }

  if (!project.contract.minter_filter) {
    throw new Error(
      `Project with id ${projectId} is not on a contract with an associated minter filter`
    );
  }

  const allowedPrivilegedRolesForProject = getAllowedPrivilegedRoles(
    sdk.userIsStaff,
    project.contract.user_is_allowlisted ?? false,
    project.user_is_artist ?? false
  );

  const context: GenerateProjectMinterConfigurationFormsContext = {
    ...args,
    allowedPrivilegedRolesForProject,
    coreContractAddress,
    projectIndex,
    project: project as ProjectWithMinterFilter,
  };

  const minterSelectionForm = generateSelectMinterForm(context);
  let configurationForms = [minterSelectionForm];

  // If no minter has been selected, return only the minter selection form
  const minterConfiguration = useFragment(
    ProjectMinterConfigurationDetailsFragmentDoc,
    res.projects_metadata_by_pk?.minter_configuration
  );

  if (!minterConfiguration || !minterConfiguration.minter) {
    return configurationForms;
  }

  // TODO: Get the schema from the minter type
  const minterConfigurationSchema =
    mockMinterSchemaMap[
      minterConfiguration.minter?.type?.unversioned_type as string
    ];

  configurationForms = configurationForms.concat(
    Object.entries(minterConfigurationSchema.properties).map(([, value]) => {
      return generateMinterForm({
        ...context,
        formSchema: value,
        minterConfiguration,
      });
    })
  );

  return configurationForms;
}

// Form to choose a minter
function generateSelectMinterForm({
  sdk,
  project,
  projectId,
  projectIndex,
  coreContractAddress,
  onConfigurationChange,
}: GenerateProjectMinterConfigurationFormsContext): ConfigurationForm {
  const minterConfiguration = useFragment(
    ProjectMinterConfigurationDetailsFragmentDoc,
    project.minter_configuration
  );

  // Map available minters to oneOf entries on the minter.address
  // property of the minter selection form schema
  const minterSelectionSchemaWithMinters = minterSelectionSchema;
  if (minterSelectionSchemaWithMinters.properties?.["minter.address"]) {
    minterSelectionSchemaWithMinters.properties["minter.address"].oneOf = (
      project.contract.minter_filter.globally_allowed_minters || []
    ).map((minter) => ({
      const: minter.address,
      title: minter.type?.label ?? undefined,
    }));
  }

  // Initialize configurationForms with the minter selection form
  const form = {
    formSchema: minterSelectionSchemaWithMinters,
    initialFormValues: getInitialMinterConfigurationValuesForFormField(
      minterSelectionSchema,
      minterConfiguration ?? null
    ),
    zodSchema: formFieldSchemaToZod(minterSelectionSchema),
    handleSubmit: async (
      formValues: Record<string, any>,
      walletClient: WalletClient
    ) => {
      // We need basic information about the project and the
      // minter to submit the transaction
      if (
        !project ||
        !project.contract.minter_filter ||
        !formValues["minter.address"] ||
        !walletClient.account
      ) {
        return;
      }

      // Get the minter filter address for minter selection
      const minterFilterAddress: Hex = project.contract.minter_filter
        .address as Hex;

      // Map the form values to an array of arguments expected by the smart contract function
      const functionArgs = mapFormValuesToArgs(
        minterSelectionSchema.transactionDetails.args,
        formValues,
        projectIndex,
        coreContractAddress
      );

      // Submit the transaction
      await submitTransaction({
        publicClient: sdk.publicClient,
        walletClient,
        address: minterFilterAddress,
        abi: minterSelectionSchema.transactionDetails.abi as Abi,
        functionName: minterSelectionSchema.transactionDetails.functionName,
        args: functionArgs,
      });

      // Save the time the transaction was confirmed
      const transactionConfirmedAt = new Date();

      // Poll for updates to the configuration, this will return
      // when the minter_address column has been updated to a
      // time after the transaction was confirmed
      await pollForProjectMinterConfigurationUpdates(
        sdk,
        projectId,
        transactionConfirmedAt,
        ["minter_address"]
      );

      const updatedForms = await generateProjectMinterConfigurationForms({
        sdk,
        onConfigurationChange,
        projectId,
      });

      // Alert subscribers that the configuration change has been confirmed
      // and synced to the database
      onConfigurationChange(updatedForms);
    },
  };

  return form;
}

type GenerateMinterFormArgs = GenerateProjectMinterConfigurationFormsContext & {
  minterConfiguration: NonNullable<ProjectMinterConfigurationDetailsFragment>;
  formSchema: FormFieldSchema;
};

// Forms to configure a minter for a project
function generateMinterForm(args: GenerateMinterFormArgs): ConfigurationForm {
  const {
    sdk,
    projectId,
    formSchema,
    projectIndex,
    coreContractAddress,
    minterConfiguration,
    onConfigurationChange,
  } = args;

  const schemaWithProjectIdFiltered = filterProjectIdFromFormSchema(formSchema);

  const initialFormValues = getInitialMinterConfigurationValuesForFormField(
    schemaWithProjectIdFiltered,
    minterConfiguration
  );

  return {
    formSchema: schemaWithProjectIdFiltered,
    initialFormValues,
    zodSchema: formFieldSchemaToZod(schemaWithProjectIdFiltered),
    handleSubmit: async (
      formValues: Record<string, any>,
      walletClient: WalletClient
    ) => {
      if (
        !minterConfiguration.minter ||
        !isOnChainFormFieldSchema(schemaWithProjectIdFiltered) ||
        !("abi" in schemaWithProjectIdFiltered.transactionDetails) ||
        !walletClient.account
      ) {
        return;
      }

      // Check if any of the form values should be transformed before submitting the transaction
      // const transformedForm;
      const transformedFormValues =
        await transformProjectMinterConfigurationFormValues({
          ...args,
          formValues,
          schema: formSchema,
        });

      const functionArgs = mapFormValuesToArgs(
        schemaWithProjectIdFiltered.transactionDetails.args,
        transformedFormValues,
        projectIndex,
        coreContractAddress
      );

      await submitTransaction({
        publicClient: sdk.publicClient,
        walletClient,
        address: minterConfiguration.minter.address as `0x${string}`,
        abi: schemaWithProjectIdFiltered.transactionDetails.abi as Abi,
        functionName:
          schemaWithProjectIdFiltered.transactionDetails.functionName,
        args: functionArgs, // sdk needs to come from values,
      });

      const transactionConfirmedAt = new Date();

      const expectedUpdates =
        schemaWithProjectIdFiltered.transactionDetails.args;

      // Poll for updates to the configuration
      await pollForProjectMinterConfigurationUpdates(
        sdk,
        projectId,
        transactionConfirmedAt,
        expectedUpdates
      );

      onConfigurationChange(
        await generateProjectMinterConfigurationForms(args)
      );
    },
  };
}
