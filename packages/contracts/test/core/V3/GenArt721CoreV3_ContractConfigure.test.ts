import { constants } from "@openzeppelin/test-helpers";
import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { SplitProviderV0 } from "../../../scripts/contracts";

import {
  T_Config,
  getAccounts,
  assignDefaultConstants,
  deployAndGet,
  deployCoreWithMinterFilter,
  GENART721_ERROR_NAME,
  GENART721_ERROR_CODES,
} from "../../util/common";

// test the following V3 core contract derivatives:
const coreContractsToTest = [
  "GenArt721CoreV3_Engine", // V3 core Engine contract
  "GenArt721CoreV3_Engine_Flex", // V3 core Engine Flex contract
];

/**
 * Tests for V3 core dealing with configuring the core contract.
 */
for (const coreContractName of coreContractsToTest) {
  describe(`${coreContractName} Contract Configure`, async function () {
    async function _beforeEach() {
      let config: T_Config = {
        accounts: await getAccounts(),
      };
      config = await assignDefaultConstants(config);

      // deploy and configure minter filter and minter
      ({
        genArt721Core: config.genArt721Core,
        minterFilter: config.minterFilter,
        randomizer: config.randomizer,
        adminACL: config.adminACL,
      } = await deployCoreWithMinterFilter(
        config,
        coreContractName,
        "MinterFilterV1"
      ));

      config.minter = await deployAndGet(config, "MinterSetPriceV2", [
        config.genArt721Core.address,
        config.minterFilter.address,
      ]);

      // add project zero
      await config.genArt721Core
        .connect(config.accounts.deployer)
        .addProject("name", config.accounts.artist.address);
      await config.genArt721Core
        .connect(config.accounts.deployer)
        .toggleProjectIsActive(config.projectZero);
      await config.genArt721Core
        .connect(config.accounts.artist)
        .updateProjectMaxInvocations(config.projectZero, config.maxInvocations);

      // add project one without setting it to active or setting max invocations
      await config.genArt721Core
        .connect(config.accounts.deployer)
        .addProject("name", config.accounts.artist2.address);

      // configure minter for project zero
      await config.minterFilter
        .connect(config.accounts.deployer)
        .addApprovedMinter(config.minter.address);
      await config.minterFilter
        .connect(config.accounts.deployer)
        .setMinterForProject(config.projectZero, config.minter.address);
      await config.minter
        .connect(config.accounts.artist)
        .updatePricePerTokenInWei(config.projectZero, 0);
      return config;
    }

    describe("update{Artblocks,Provider}PrimarySalesPercentage", function () {
      beforeEach(async function () {
        const config = await loadFixture(_beforeEach);
        if (coreContractName === "GenArt721CoreV3") {
          throw new Error("Untested core contract version");
        } else if (coreContractName === "GenArt721CoreV3_Explorations") {
          throw new Error("Untested core contract version");
        } else if (coreContractName.includes("GenArt721CoreV3_Engine")) {
          config.maxProviderPrimarySalesPercentage = 100; // 100% maxmimum percentage on V3 core engine
        } else {
          throw new Error("Invalid core contract name");
        }
        // pass config to tests in this describe block
        this.config = config;
      });

      it("does not allow a value > ONE_HUNDRED", async function () {
        // get config from beforeEach
        const config = this.config;
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .updateProviderPrimarySalesPercentages(
              config.maxProviderPrimarySalesPercentage + 1, // renderProviderPrimarySalesPercentage_
              0 // platformProviderPrimarySalesPercentage_
            )
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.OverMaxSumOfPercentages);
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .updateProviderPrimarySalesPercentages(
              0, // renderProviderPrimarySalesPercentage_
              config.maxProviderPrimarySalesPercentage + 1 // platformProviderPrimarySalesPercentage_
            )
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.OverMaxSumOfPercentages);
      });

      it("does allow a value of ONE_HUNDRED", async function () {
        // get config from beforeEach
        const config = this.config;
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderPrimarySalesPercentages(
            config.maxProviderPrimarySalesPercentage, // renderProviderPrimarySalesPercentage_
            0 // platformProviderPrimarySalesPercentage_
          );
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderPrimarySalesPercentages(
            0, // renderProviderPrimarySalesPercentage_
            config.maxProviderPrimarySalesPercentage // platformProviderPrimarySalesPercentage_
          );
      });

      it("does allow a value of 0%", async function () {
        // get config from beforeEach
        const config = this.config;
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderPrimarySalesPercentages(
            0, // renderProviderPrimarySalesPercentage_
            0 // platformProviderPrimarySalesPercentage_
          );
      });
    });

    describe("update{Artblocks,Provider}SecondarySalesBPS", function () {
      it("does not allow a value > 100%", async function () {
        const config = await loadFixture(_beforeEach);
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .updateProviderDefaultSecondarySalesBPS(
              10001, // _renderProviderSecondarySalesBPS
              0 // _platformProviderSecondarySalesBPS
            )
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.OverMaxSumOfBPS);
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .updateProviderDefaultSecondarySalesBPS(
              0, // _renderProviderSecondarySalesBPS
              10001 // _platformProviderSecondarySalesBPS
            )
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.OverMaxSumOfBPS);
      });

      it("does allow a value of 2.5%", async function () {
        const config = await loadFixture(_beforeEach);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderDefaultSecondarySalesBPS(
            250, // _renderProviderSecondarySalesBPS
            0 // _platformProviderSecondarySalesBPS
          );
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderDefaultSecondarySalesBPS(
            0, // _renderProviderSecondarySalesBPS
            250 // _platformProviderSecondarySalesBPS
          );
      });

      it("does allow a value of 2.5% + 2.5%", async function () {
        const config = await loadFixture(_beforeEach);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderDefaultSecondarySalesBPS(
            250, // _renderProviderSecondarySalesBPS
            250 // _platformProviderSecondarySalesBPS
          );
      });

      it("does allow a value of < 2.5%", async function () {
        const config = await loadFixture(_beforeEach);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderDefaultSecondarySalesBPS(
            0, // _renderProviderSecondarySalesBPS
            0 // _platformProviderSecondarySalesBPS
          );
      });
    });

    describe("forbidNewProjects", function () {
      it("prevents new projects from being added after calling", async function () {
        const config = await loadFixture(_beforeEach);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .forbidNewProjects();
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .addProject("shouldn't work", config.accounts.artist.address)
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.NewProjectsForbidden);
      });

      it("does not allow to call forbidNewProjects more than once", async function () {
        const config = await loadFixture(_beforeEach);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .forbidNewProjects();
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .forbidNewProjects()
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.NewProjectsAlreadyForbidden);
      });

      it("does not allow to call forbidNewProjects after revoking ownership", async function () {
        const config = await loadFixture(_beforeEach);
        // update owner of core to null address, expect OwnershipTransferred event
        await expect(
          config.adminACL
            .connect(config.accounts.deployer)
            .renounceOwnershipOn(config.genArt721Core.address)
        )
          .to.emit(config.genArt721Core, "OwnershipTransferred")
          .withArgs(config.adminACL.address, constants.ZERO_ADDRESS);
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .forbidNewProjects()
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.OnlyAdminACL);
      });

      it("does allow to call renounceOwnership after forbidding new projects", async function () {
        const config = await loadFixture(_beforeEach);
        // forbid new projects
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .forbidNewProjects();
        // update owner of core to null address, expect OwnershipTransferred event
        await expect(
          config.adminACL
            .connect(config.accounts.deployer)
            .renounceOwnershipOn(config.genArt721Core.address)
        )
          .to.emit(config.genArt721Core, "OwnershipTransferred")
          .withArgs(config.adminACL.address, constants.ZERO_ADDRESS);
      });
    });

    describe("updateDefaultBaseURI", function () {
      it("does not allow non-admin to call", async function () {
        const config = await loadFixture(_beforeEach);
        await expect(
          config.genArt721Core
            .connect(config.accounts.artist)
            .updateDefaultBaseURI("https://token.newuri.com/")
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.OnlyAdminACL);
      });

      it("does allow admin to call", async function () {
        const config = await loadFixture(_beforeEach);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateDefaultBaseURI("https://token.newuri.com/");
      });
    });

    describe("updateSplitProvider", function () {
      it("does not allow non-admin to call", async function () {
        const config = await loadFixture(_beforeEach);
        await expect(
          config.genArt721Core
            .connect(config.accounts.artist)
            .updateSplitProvider(config.accounts.artist.address)
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.OnlyAdminACL);
      });

      it("does allow admin to call", async function () {
        const config = await loadFixture(_beforeEach);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateSplitProvider(config.splitProvider.address);
      });

      it("reverts when split provider doesn't indicate ierc165 interface support", async function () {
        const config = await loadFixture(_beforeEach);
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .updateSplitProvider(config.accounts.deployer.address)
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.InvalidSplitProvider);
      });

      it("updates state", async function () {
        const config = await loadFixture(_beforeEach);
        // deploy new valid split provider
        const mockSplitterFactory = await deployAndGet(
          config,
          "Mock0xSplitsV2PullFactory",
          []
        );
        const newSplitProvider = (await deployAndGet(
          config,
          "SplitProviderV0",
          [
            mockSplitterFactory.address, // _splitterFactory
          ]
        )) as SplitProviderV0;
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateSplitProvider(newSplitProvider.address);
        const updatedSplitProvider = await config.genArt721Core.splitProvider();
        expect(updatedSplitProvider).to.equal(newSplitProvider.address);
      });
    });

    describe("syncProviderSecondaryForProjectToDefaults", function () {
      it("does not allow non-admin to call", async function () {
        const config = await loadFixture(_beforeEach);
        await expect(
          config.genArt721Core
            .connect(config.accounts.artist)
            .syncProviderSecondaryForProjectToDefaults(config.projectZero)
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.OnlyAdminACL);
      });

      it("does allow admin to call", async function () {
        const config = await loadFixture(_beforeEach);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .syncProviderSecondaryForProjectToDefaults(config.projectZero);
      });

      it("reverts when project is invalid", async function () {
        const config = await loadFixture(_beforeEach);
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .syncProviderSecondaryForProjectToDefaults(999) // invalid project id
        )
          .to.be.revertedWithCustomError(
            config.genArt721Core,
            GENART721_ERROR_NAME
          )
          .withArgs(GENART721_ERROR_CODES.ProjectDoesNotExist);
      });

      it("updates state", async function () {
        const config = await loadFixture(_beforeEach);
        // update default platform payment addresses and royalty BPS at contract level
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderSalesAddresses(
            config.accounts.user.address, // render primary
            config.accounts.user2.address, // render secondary
            config.accounts.additional.address, // platform primary
            config.accounts.additional2.address // platform secondary
          );
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .updateProviderDefaultSecondarySalesBPS(31, 32);
        await config.genArt721Core
          .connect(config.accounts.deployer)
          .syncProviderSecondaryForProjectToDefaults(config.projectZero);
        // verify state update
        const projectFinance = await config.genArt721Core.projectIdToFinancials(
          config.projectZero
        );
        expect(projectFinance.renderProviderSecondarySalesAddress).to.equal(
          config.accounts.user2.address
        );
        expect(projectFinance.platformProviderSecondarySalesAddress).to.equal(
          config.accounts.additional2.address
        );
        expect(projectFinance.renderProviderSecondarySalesBPS).to.equal(31);
        expect(projectFinance.platformProviderSecondarySalesBPS).to.equal(32);
      });
    });

    describe("renounceOwnership", function () {
      it("does not allow non-owner to call", async function () {
        const config = await loadFixture(_beforeEach);
        await expect(
          config.genArt721Core
            .connect(config.accounts.deployer)
            .renounceOwnership()
        ).to.be.revertedWith("Ownable: caller is not the owner");
      });
    });
  });
}
