import { ethers } from "hardhat";

async function main() {
    // Deploy the Data contract
    const Data = await ethers.deployContract("Blog");

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

// contract : 0xb52cf9E0A550802d20aaf9cd8BAa62d8FF6164B0
// link : 