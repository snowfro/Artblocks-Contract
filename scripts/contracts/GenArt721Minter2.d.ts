/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface GenArt721Minter2Interface extends ethers.utils.Interface {
  functions: {
    "artblocksContract()": FunctionFragment;
    "artistSetBonusContractAddress(uint256,address)": FunctionFragment;
    "artistToggleBonus(uint256)": FunctionFragment;
    "checkYourAllowanceOfProjectERC20(uint256)": FunctionFragment;
    "contractFilterProject(uint256)": FunctionFragment;
    "getYourBalanceOfProjectERC20(uint256)": FunctionFragment;
    "projectIdToBonus(uint256)": FunctionFragment;
    "projectIdToBonusContractAddress(uint256)": FunctionFragment;
    "projectMintCounter(address,uint256)": FunctionFragment;
    "projectMintLimit(uint256)": FunctionFragment;
    "purchase(uint256)": FunctionFragment;
    "setProjectMintLimit(uint256,uint8)": FunctionFragment;
    "toggleContractFilter(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "artblocksContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "artistSetBonusContractAddress",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "artistToggleBonus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkYourAllowanceOfProjectERC20",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractFilterProject",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getYourBalanceOfProjectERC20",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToBonus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToBonusContractAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectMintCounter",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectMintLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "purchase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setProjectMintLimit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleContractFilter",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "artblocksContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "artistSetBonusContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "artistToggleBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkYourAllowanceOfProjectERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractFilterProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYourBalanceOfProjectERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToBonusContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectMintCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectMintLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "purchase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProjectMintLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleContractFilter",
    data: BytesLike
  ): Result;

  events: {};
}

export class GenArt721Minter2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GenArt721Minter2Interface;

  functions: {
    artblocksContract(overrides?: CallOverrides): Promise<[string]>;

    "artblocksContract()"(overrides?: CallOverrides): Promise<[string]>;

    artistSetBonusContractAddress(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "artistSetBonusContractAddress(uint256,address)"(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    artistToggleBonus(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "artistToggleBonus(uint256)"(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkYourAllowanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "checkYourAllowanceOfProjectERC20(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    contractFilterProject(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "contractFilterProject(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getYourBalanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getYourBalanceOfProjectERC20(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    projectIdToBonus(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "projectIdToBonus(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    projectIdToBonusContractAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "projectIdToBonusContractAddress(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projectMintCounter(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "projectMintCounter(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    projectMintLimit(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "projectMintLimit(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    purchase(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "purchase(uint256)"(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProjectMintLimit(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setProjectMintLimit(uint256,uint8)"(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleContractFilter(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "toggleContractFilter(uint256)"(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  artblocksContract(overrides?: CallOverrides): Promise<string>;

  "artblocksContract()"(overrides?: CallOverrides): Promise<string>;

  artistSetBonusContractAddress(
    _projectId: BigNumberish,
    _bonusContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "artistSetBonusContractAddress(uint256,address)"(
    _projectId: BigNumberish,
    _bonusContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  artistToggleBonus(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "artistToggleBonus(uint256)"(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkYourAllowanceOfProjectERC20(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "checkYourAllowanceOfProjectERC20(uint256)"(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contractFilterProject(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "contractFilterProject(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getYourBalanceOfProjectERC20(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getYourBalanceOfProjectERC20(uint256)"(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  projectIdToBonus(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "projectIdToBonus(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  projectIdToBonusContractAddress(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "projectIdToBonusContractAddress(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  projectMintCounter(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "projectMintCounter(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  projectMintLimit(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "projectMintLimit(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  purchase(
    _projectId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "purchase(uint256)"(
    _projectId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProjectMintLimit(
    _projectId: BigNumberish,
    _limit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setProjectMintLimit(uint256,uint8)"(
    _projectId: BigNumberish,
    _limit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleContractFilter(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "toggleContractFilter(uint256)"(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    artblocksContract(overrides?: CallOverrides): Promise<string>;

    "artblocksContract()"(overrides?: CallOverrides): Promise<string>;

    artistSetBonusContractAddress(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "artistSetBonusContractAddress(uint256,address)"(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    artistToggleBonus(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "artistToggleBonus(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkYourAllowanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkYourAllowanceOfProjectERC20(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractFilterProject(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "contractFilterProject(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getYourBalanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getYourBalanceOfProjectERC20(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToBonus(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "projectIdToBonus(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    projectIdToBonusContractAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "projectIdToBonusContractAddress(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    projectMintCounter(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectMintCounter(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMintLimit(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectMintLimit(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    purchase(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "purchase(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setProjectMintLimit(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setProjectMintLimit(uint256,uint8)"(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    toggleContractFilter(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "toggleContractFilter(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    artblocksContract(overrides?: CallOverrides): Promise<BigNumber>;

    "artblocksContract()"(overrides?: CallOverrides): Promise<BigNumber>;

    artistSetBonusContractAddress(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "artistSetBonusContractAddress(uint256,address)"(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    artistToggleBonus(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "artistToggleBonus(uint256)"(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkYourAllowanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkYourAllowanceOfProjectERC20(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractFilterProject(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "contractFilterProject(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYourBalanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getYourBalanceOfProjectERC20(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToBonus(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToBonus(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToBonusContractAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToBonusContractAddress(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMintCounter(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectMintCounter(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMintLimit(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectMintLimit(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    purchase(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "purchase(uint256)"(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProjectMintLimit(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setProjectMintLimit(uint256,uint8)"(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleContractFilter(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "toggleContractFilter(uint256)"(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    artblocksContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "artblocksContract()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    artistSetBonusContractAddress(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "artistSetBonusContractAddress(uint256,address)"(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    artistToggleBonus(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "artistToggleBonus(uint256)"(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkYourAllowanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkYourAllowanceOfProjectERC20(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractFilterProject(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "contractFilterProject(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getYourBalanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getYourBalanceOfProjectERC20(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdToBonus(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectIdToBonus(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdToBonusContractAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectIdToBonusContractAddress(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectMintCounter(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectMintCounter(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectMintLimit(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectMintLimit(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    purchase(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "purchase(uint256)"(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProjectMintLimit(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setProjectMintLimit(uint256,uint8)"(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleContractFilter(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "toggleContractFilter(uint256)"(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
