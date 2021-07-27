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

interface GenArt721CoreContractInterface extends ethers.utils.Interface {
  functions: {
    "artblocksAddress()": FunctionFragment;
    "artblocksPercentage()": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "mint(address,uint256,address)": FunctionFragment;
    "projectIdToAdditionalPayee(uint256)": FunctionFragment;
    "projectIdToAdditionalPayeePercentage(uint256)": FunctionFragment;
    "projectIdToArtistAddress(uint256)": FunctionFragment;
    "projectIdToCurrencyAddress(uint256)": FunctionFragment;
    "projectIdToCurrencySymbol(uint256)": FunctionFragment;
    "projectIdToPricePerTokenInWei(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "artblocksAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "artblocksPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToAdditionalPayee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToAdditionalPayeePercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToArtistAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToCurrencyAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToCurrencySymbol",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToPricePerTokenInWei",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "artblocksAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "artblocksPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToAdditionalPayee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToAdditionalPayeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToArtistAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToCurrencyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToCurrencySymbol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToPricePerTokenInWei",
    data: BytesLike
  ): Result;

  events: {};
}

export class GenArt721CoreContract extends Contract {
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

  interface: GenArt721CoreContractInterface;

  functions: {
    artblocksAddress(overrides?: CallOverrides): Promise<[string]>;

    "artblocksAddress()"(overrides?: CallOverrides): Promise<[string]>;

    artblocksPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    "artblocksPercentage()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isWhitelisted(
      sender: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isWhitelisted(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mint(
      _to: string,
      _projectId: BigNumberish,
      _by: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mint(address,uint256,address)"(
      _to: string,
      _projectId: BigNumberish,
      _by: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    projectIdToAdditionalPayee(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "projectIdToAdditionalPayee(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projectIdToAdditionalPayeePercentage(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "projectIdToAdditionalPayeePercentage(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    projectIdToArtistAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "projectIdToArtistAddress(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projectIdToCurrencyAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "projectIdToCurrencyAddress(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projectIdToCurrencySymbol(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "projectIdToCurrencySymbol(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projectIdToPricePerTokenInWei(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "projectIdToPricePerTokenInWei(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  artblocksAddress(overrides?: CallOverrides): Promise<string>;

  "artblocksAddress()"(overrides?: CallOverrides): Promise<string>;

  artblocksPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  "artblocksPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

  isWhitelisted(sender: string, overrides?: CallOverrides): Promise<boolean>;

  "isWhitelisted(address)"(
    sender: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(
    _to: string,
    _projectId: BigNumberish,
    _by: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mint(address,uint256,address)"(
    _to: string,
    _projectId: BigNumberish,
    _by: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  projectIdToAdditionalPayee(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "projectIdToAdditionalPayee(uint256)"(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  projectIdToAdditionalPayeePercentage(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "projectIdToAdditionalPayeePercentage(uint256)"(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  projectIdToArtistAddress(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "projectIdToArtistAddress(uint256)"(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  projectIdToCurrencyAddress(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "projectIdToCurrencyAddress(uint256)"(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  projectIdToCurrencySymbol(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "projectIdToCurrencySymbol(uint256)"(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  projectIdToPricePerTokenInWei(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "projectIdToPricePerTokenInWei(uint256)"(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    artblocksAddress(overrides?: CallOverrides): Promise<string>;

    "artblocksAddress()"(overrides?: CallOverrides): Promise<string>;

    artblocksPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "artblocksPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(sender: string, overrides?: CallOverrides): Promise<boolean>;

    "isWhitelisted(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(
      _to: string,
      _projectId: BigNumberish,
      _by: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mint(address,uint256,address)"(
      _to: string,
      _projectId: BigNumberish,
      _by: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToAdditionalPayee(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "projectIdToAdditionalPayee(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    projectIdToAdditionalPayeePercentage(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToAdditionalPayeePercentage(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToArtistAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "projectIdToArtistAddress(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    projectIdToCurrencyAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "projectIdToCurrencyAddress(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    projectIdToCurrencySymbol(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "projectIdToCurrencySymbol(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    projectIdToPricePerTokenInWei(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToPricePerTokenInWei(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    artblocksAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "artblocksAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    artblocksPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "artblocksPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isWhitelisted(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _to: string,
      _projectId: BigNumberish,
      _by: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mint(address,uint256,address)"(
      _to: string,
      _projectId: BigNumberish,
      _by: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    projectIdToAdditionalPayee(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToAdditionalPayee(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToAdditionalPayeePercentage(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToAdditionalPayeePercentage(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToArtistAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToArtistAddress(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToCurrencyAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToCurrencyAddress(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToCurrencySymbol(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToCurrencySymbol(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToPricePerTokenInWei(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projectIdToPricePerTokenInWei(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    artblocksAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "artblocksAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    artblocksPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "artblocksPercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isWhitelisted(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _to: string,
      _projectId: BigNumberish,
      _by: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256,address)"(
      _to: string,
      _projectId: BigNumberish,
      _by: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    projectIdToAdditionalPayee(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectIdToAdditionalPayee(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdToAdditionalPayeePercentage(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectIdToAdditionalPayeePercentage(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdToArtistAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectIdToArtistAddress(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdToCurrencyAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectIdToCurrencyAddress(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdToCurrencySymbol(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectIdToCurrencySymbol(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdToPricePerTokenInWei(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projectIdToPricePerTokenInWei(uint256)"(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
