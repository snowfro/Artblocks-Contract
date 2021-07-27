/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { BonusContract } from "../BonusContract";

export class BonusContract__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BonusContract {
    return new Contract(address, _abi, signerOrProvider) as BonusContract;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "bonusIsActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "triggerBonus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
