// SPDX-License-Identifier: LGPL-3.0-only
// Created By: Art Blocks Inc.

import { ethers } from "hardhat";
// explorations
import { MinterMerkleV2__factory } from "../contracts/factories/MinterMerkleV2__factory";

// delay to avoid issues with reorgs and tx failures
import { delay } from "../util/utils";
const EXTRA_DELAY_BETWEEN_TX = 5000; // ms

/**
 * This script was created to deploy the MinterMerkleV2 contract to the Ethereum
 * Goerli testnet, for the Art Blocks dev environment.
 * It is intended to document the deployment process and provide a reference
 * for the steps required to deploy the MinterMerkleV2 contract.
 */
//////////////////////////////////////////////////////////////////////////////
// CONFIG BEGINS HERE
//////////////////////////////////////////////////////////////////////////////
const genArt721V3Core_Flagship = "0xF396C180bb2f92EE28535D23F5224A5b9425ceca";
const minterFilter_Flagship = "0x7EcFFfc1A3Eb7Ce76D4b29Df3e5098D2D921D367";
const genArt721V3Core_Explorations =
  "0x7244352F6C7aFbB74D4b63Bd7e8189e84a83f179";
const minterFilter_Explorations = "0x6600e8d744aa7545A8757eF928117866cF431A26";
const delegationRegistryAddress = "0xTODO"; // for ETH mainnet, use 0x00000000000076A84feF008CDAbe6409d2FE638B
//////////////////////////////////////////////////////////////////////////////
// CONFIG ENDS HERE
//////////////////////////////////////////////////////////////////////////////

async function main() {
  const [deployer] = await ethers.getSigners();
  const network = await ethers.provider.getNetwork();
  const networkName = network.name == "homestead" ? "mainnet" : network.name;
  if (networkName != "goerli") {
    throw new Error("This script is intended to be run on mainnet only");
  }
  //////////////////////////////////////////////////////////////////////////////
  // DEPLOYMENT BEGINS HERE
  //////////////////////////////////////////////////////////////////////////////

  // Deploy Minter contract(s)
  const minterMerkleFactory = new MinterMerkleV2__factory(deployer);
  // flagship
  const minterMerkleFlagship = await minterMerkleFactory.deploy(
    genArt721V3Core_Flagship,
    minterFilter_Flagship,
    delegationRegistryAddress
  );
  await minterMerkleFlagship.deployed();
  const minterMerkleFlagshipAddress = minterMerkleFlagship.address;
  console.log(
    `MinterMerkleV2 (flagship) deployed at ${minterMerkleFlagshipAddress}`
  );
  await delay(EXTRA_DELAY_BETWEEN_TX);
  // explorations
  const minterMerkleExplorations = await minterMerkleFactory.deploy(
    genArt721V3Core_Explorations,
    minterFilter_Explorations,
    delegationRegistryAddress
  );
  await minterMerkleExplorations.deployed();
  const minterMerkleExplorationsAddress = minterMerkleExplorations.address;
  console.log(
    `MinterMerkleV2 (explorations) deployed at ${minterMerkleExplorationsAddress}`
  );
  await delay(EXTRA_DELAY_BETWEEN_TX);

  //////////////////////////////////////////////////////////////////////////////
  // DEPLOYMENT ENDS HERE
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // SETUP BEGINS HERE
  //////////////////////////////////////////////////////////////////////////////

  // DO NOT allowlist the minters on the minter filter here. If a new minter type
  // is added to the minter filter, it will need to be added to the minter filter
  // enum in the subgraph first. Otherwise, the subgraph will fail to progress.

  // Output instructions for manual Etherscan verification.
  const standardVerify = "yarn hardhat verify";
  console.log(`Verify MinterMerkleV2 (flagship) contract deployment with:`);
  console.log(
    `${standardVerify} --network ${networkName} ${minterMerkleFlagshipAddress} ${genArt721V3Core_Flagship} ${minterFilter_Flagship} ${delegationRegistryAddress}`
  );
  console.log(`Verify MinterMerkleV2 (explorations) contract deployment with:`);
  console.log(
    `${standardVerify} --network ${networkName} ${minterMerkleExplorationsAddress} ${genArt721V3Core_Explorations} ${minterFilter_Explorations} ${delegationRegistryAddress}`
  );

  //////////////////////////////////////////////////////////////////////////////
  // SETUP ENDS HERE
  //////////////////////////////////////////////////////////////////////////////

  console.log("Next Steps:");
  console.log(
    "1. Verify Admin ACL V1 contract deployment on Etherscan (see above)"
  );
  console.log(
    "2. WAIT for subgraph to sync, and ensure enum with new minter type is added to subgraph"
  );
  console.log(
    "3. AFTER subgraph syncs with type MinterMerkleV2 included in MinterType enum, allowlist the new minters type on their corresponding minter filters"
  );
  console.log(
    `3a. e.g. Call addApprovedMinter on ${minterFilter_Flagship} with arg ${minterMerkleFlagshipAddress}`
  );
  console.log(
    `3b. e.g. Call addApprovedMinter on ${minterFilter_Explorations} with arg ${minterMerkleExplorationsAddress}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
