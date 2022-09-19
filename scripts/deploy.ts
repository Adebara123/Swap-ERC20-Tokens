import { ethers } from "hardhat";

async function main() {

  const Swap = await ethers.getContractFactory("swap");
  const swap = await Swap.deploy();

  await swap.deployed();

  console.log(`Contract address ${swap.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
