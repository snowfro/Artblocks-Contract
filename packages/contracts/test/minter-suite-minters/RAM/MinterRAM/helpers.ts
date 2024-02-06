import { BigNumber } from "ethers";
import { ethers } from "hardhat";

import { T_Config, deployAndGet } from "../../../util/common";

// helper functions for MinterRAM tests

export async function configureDefaultProjectZero(config: T_Config) {
  // configure project zero
  await config.minter.connect(config.accounts.artist).setAuctionDetails(
    config.projectZero,
    config.genArt721Core.address,
    config.startTime,
    config.defaultAuctionLengthSeconds + config.startTime,
    config.basePrice,
    true, // allowExtraTime
    true // admin/artist only mint period if sellout
  );
}

export async function advanceToAuctionStartTime(config: T_Config) {
  // advance time to auction start time - 1 second
  // @dev this makes next block timestamp equal to auction start time
  await ethers.provider.send("evm_mine", [config.startTime - 1]);
}

// helper function to initialize a token auction on project zero
// @dev "user" account is the one who initializes the auction
export async function initializeMinBidInProjectZeroAuction(config: T_Config) {
  await configureDefaultProjectZero(config);
  await advanceToAuctionStartTime(config);
  // place bid in the auction
  await config.minter
    .connect(config.accounts.user)
    .createBid(config.projectZero, config.genArt721Core.address, 0, {
      value: config.basePrice,
    });
}

// helper function to initialize and place bid in auction on project zero, and then
// advance time to the end of the auction
export async function initializeMinBidInProjectZeroAuctionAndAdvanceToEnd(
  config: T_Config
) {
  await initializeMinBidInProjectZeroAuction(config);
  // advance time to end of auction
  await ethers.provider.send("evm_mine", [
    config.startTime + config.defaultAuctionLengthSeconds,
  ]);
}

// helper function to initialize and place bid in auction on project zero, and then
// advance time to the end of the auction. Then mints the token to the winner.
export async function initializeProjectZeroTokenZeroAuctionAndSettle(
  config: T_Config
) {
  await initializeMinBidInProjectZeroAuctionAndAdvanceToEnd(config);
  // mint token to the winner
  await config.minter
    .connect(config.accounts.user)
    .adminArtistAutoMintTokensToWinners(
      config.projectZero,
      config.genArt721Core.address,
      1 // only one token available to mint
    );
}

export async function mintTokenOnDifferentMinter(config: T_Config) {
  // deploy and set different minter
  const differentMinter = await deployAndGet(config, "MinterSetPriceV5", [
    config.minterFilter.address,
  ]);
  await config.minterFilter
    .connect(config.accounts.deployer)
    .approveMinterGlobally(differentMinter.address);
  await config.minterFilter
    .connect(config.accounts.deployer)
    .setMinterForProject(
      config.projectZero,
      config.genArt721Core.address,
      differentMinter.address
    );
  // mint token to user using different minter
  await differentMinter
    .connect(config.accounts.artist)
    .updatePricePerTokenInWei(
      config.projectZero,
      config.genArt721Core.address,
      0
    );
  await differentMinter
    .connect(config.accounts.artist)
    .syncProjectMaxInvocationsToCore(
      config.projectZero,
      config.genArt721Core.address
    );
  await differentMinter
    .connect(config.accounts.artist)
    .purchaseTo(
      config.accounts.user.address,
      config.projectZero,
      config.genArt721Core.address,
      {
        value: config.pricePerTokenInWei,
      }
    );
  // change minter back to original minter
  await config.minterFilter
    .connect(config.accounts.deployer)
    .setMinterForProject(
      config.projectZero,
      config.genArt721Core.address,
      config.minter.address
    );
}
