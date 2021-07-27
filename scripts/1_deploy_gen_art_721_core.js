const { BigNumber } = require("ethers");
var prompt = require("prompt-sync")();

async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log("Deploying GEN ART 721 Core from:", deployerAddress);

  const randomizerAddress = prompt("randomizer address? ");

  const GenArt721Core = await ethers.getContractFactory("GenArt721Core");
  const genArt721Core = await GenArt721Core.deploy(
    "Art Blocks",
    "BLOCKS",
    randomizerAddress
  );

  console.log(
    "GenArt721 Core token contract deployed at:",
    (await genArt721Core.deployed()).address
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
