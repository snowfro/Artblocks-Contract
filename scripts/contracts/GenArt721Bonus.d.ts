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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface GenArt721BonusInterface extends ethers.utils.Interface {
  functions: {
    "addWhitelisted(address)": FunctionFragment;
    "bonusIsActive()": FunctionFragment;
    "bonusValueInWei()": FunctionFragment;
    "changeBonusValueInWei(uint256)": FunctionFragment;
    "checkContractTokenBalance()": FunctionFragment;
    "checkOwnerAllowance()": FunctionFragment;
    "contractOwnsTokens()": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeWhitelisted(address)": FunctionFragment;
    "returnTokensToOwner()": FunctionFragment;
    "toggleBonusIsActive()": FunctionFragment;
    "toggleContractOwnsTokens()": FunctionFragment;
    "triggerBonus(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "bonusIsActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bonusValueInWei",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeBonusValueInWei",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkContractTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkOwnerAllowance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractOwnsTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnTokensToOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleBonusIsActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleContractOwnsTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "triggerBonus",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bonusIsActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bonusValueInWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeBonusValueInWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkContractTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkOwnerAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractOwnsTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnTokensToOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleBonusIsActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleContractOwnsTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggerBonus",
    data: BytesLike
  ): Result;

  events: {};
}

export class GenArt721Bonus extends Contract {
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

  interface: GenArt721BonusInterface;

  functions: {
    addWhitelisted(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addWhitelisted(address)"(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bonusIsActive(overrides?: CallOverrides): Promise<[boolean]>;

    "bonusIsActive()"(overrides?: CallOverrides): Promise<[boolean]>;

    bonusValueInWei(overrides?: CallOverrides): Promise<[BigNumber]>;

    "bonusValueInWei()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    changeBonusValueInWei(
      _bonusValueInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "changeBonusValueInWei(uint256)"(
      _bonusValueInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkContractTokenBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "checkContractTokenBalance()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkOwnerAllowance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "checkOwnerAllowance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    contractOwnsTokens(overrides?: CallOverrides): Promise<[boolean]>;

    "contractOwnsTokens()"(overrides?: CallOverrides): Promise<[boolean]>;

    isWhitelisted(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isWhitelisted(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    removeWhitelisted(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeWhitelisted(address)"(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnTokensToOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "returnTokensToOwner()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleBonusIsActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "toggleBonusIsActive()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleContractOwnsTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "toggleContractOwnsTokens()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    triggerBonus(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "triggerBonus(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addWhitelisted(
    _whitelisted: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addWhitelisted(address)"(
    _whitelisted: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bonusIsActive(overrides?: CallOverrides): Promise<boolean>;

  "bonusIsActive()"(overrides?: CallOverrides): Promise<boolean>;

  bonusValueInWei(overrides?: CallOverrides): Promise<BigNumber>;

  "bonusValueInWei()"(overrides?: CallOverrides): Promise<BigNumber>;

  changeBonusValueInWei(
    _bonusValueInWei: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "changeBonusValueInWei(uint256)"(
    _bonusValueInWei: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkContractTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "checkContractTokenBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  checkOwnerAllowance(overrides?: CallOverrides): Promise<BigNumber>;

  "checkOwnerAllowance()"(overrides?: CallOverrides): Promise<BigNumber>;

  contractOwnsTokens(overrides?: CallOverrides): Promise<boolean>;

  "contractOwnsTokens()"(overrides?: CallOverrides): Promise<boolean>;

  isWhitelisted(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isWhitelisted(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeWhitelisted(
    _whitelisted: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeWhitelisted(address)"(
    _whitelisted: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnTokensToOwner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "returnTokensToOwner()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleBonusIsActive(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "toggleBonusIsActive()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleContractOwnsTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "toggleContractOwnsTokens()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  triggerBonus(
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "triggerBonus(address)"(
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addWhitelisted(
      _whitelisted: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addWhitelisted(address)"(
      _whitelisted: string,
      overrides?: CallOverrides
    ): Promise<void>;

    bonusIsActive(overrides?: CallOverrides): Promise<boolean>;

    "bonusIsActive()"(overrides?: CallOverrides): Promise<boolean>;

    bonusValueInWei(overrides?: CallOverrides): Promise<BigNumber>;

    "bonusValueInWei()"(overrides?: CallOverrides): Promise<BigNumber>;

    changeBonusValueInWei(
      _bonusValueInWei: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeBonusValueInWei(uint256)"(
      _bonusValueInWei: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkContractTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "checkContractTokenBalance()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkOwnerAllowance(overrides?: CallOverrides): Promise<BigNumber>;

    "checkOwnerAllowance()"(overrides?: CallOverrides): Promise<BigNumber>;

    contractOwnsTokens(overrides?: CallOverrides): Promise<boolean>;

    "contractOwnsTokens()"(overrides?: CallOverrides): Promise<boolean>;

    isWhitelisted(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isWhitelisted(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeWhitelisted(
      _whitelisted: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeWhitelisted(address)"(
      _whitelisted: string,
      overrides?: CallOverrides
    ): Promise<void>;

    returnTokensToOwner(overrides?: CallOverrides): Promise<void>;

    "returnTokensToOwner()"(overrides?: CallOverrides): Promise<void>;

    toggleBonusIsActive(overrides?: CallOverrides): Promise<void>;

    "toggleBonusIsActive()"(overrides?: CallOverrides): Promise<void>;

    toggleContractOwnsTokens(overrides?: CallOverrides): Promise<void>;

    "toggleContractOwnsTokens()"(overrides?: CallOverrides): Promise<void>;

    triggerBonus(_to: string, overrides?: CallOverrides): Promise<boolean>;

    "triggerBonus(address)"(
      _to: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addWhitelisted(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addWhitelisted(address)"(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bonusIsActive(overrides?: CallOverrides): Promise<BigNumber>;

    "bonusIsActive()"(overrides?: CallOverrides): Promise<BigNumber>;

    bonusValueInWei(overrides?: CallOverrides): Promise<BigNumber>;

    "bonusValueInWei()"(overrides?: CallOverrides): Promise<BigNumber>;

    changeBonusValueInWei(
      _bonusValueInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "changeBonusValueInWei(uint256)"(
      _bonusValueInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkContractTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "checkContractTokenBalance()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkOwnerAllowance(overrides?: CallOverrides): Promise<BigNumber>;

    "checkOwnerAllowance()"(overrides?: CallOverrides): Promise<BigNumber>;

    contractOwnsTokens(overrides?: CallOverrides): Promise<BigNumber>;

    "contractOwnsTokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isWhitelisted(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeWhitelisted(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeWhitelisted(address)"(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnTokensToOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "returnTokensToOwner()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleBonusIsActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "toggleBonusIsActive()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleContractOwnsTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "toggleContractOwnsTokens()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    triggerBonus(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "triggerBonus(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addWhitelisted(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addWhitelisted(address)"(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bonusIsActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bonusIsActive()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bonusValueInWei(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bonusValueInWei()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeBonusValueInWei(
      _bonusValueInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "changeBonusValueInWei(uint256)"(
      _bonusValueInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkContractTokenBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkContractTokenBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkOwnerAllowance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkOwnerAllowance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractOwnsTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "contractOwnsTokens()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isWhitelisted(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeWhitelisted(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeWhitelisted(address)"(
      _whitelisted: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnTokensToOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "returnTokensToOwner()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleBonusIsActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "toggleBonusIsActive()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleContractOwnsTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "toggleContractOwnsTokens()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    triggerBonus(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "triggerBonus(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
