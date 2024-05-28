import { ethers } from "hardhat";

async function main() {
  // Deploy the Data contract
  const Data = await ethers.deployContract("TrackChain");

  // Wait for the deployment to be mined
  await Data.waitForDeployment();

  // Get the address of the deployed contract
  const contractAddress = await Data.getAddress();

  // Print the address of the deployed contract
  console.log(`Report: ${contractAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// contract : 0x2b92B59880360e3BC609c97cA93AB9B2a0067502
// link : https://testnet.bscscan.com/address/0x2b92B59880360e3BC609c97cA93AB9B2a0067502