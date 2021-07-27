/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { RandomizerDAI2 } from "../RandomizerDAI2";

export class RandomizerDAI2__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomizerDAI2 {
    return new Contract(address, _abi, signerOrProvider) as RandomizerDAI2;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
