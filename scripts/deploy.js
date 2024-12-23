const hre = require("hardhat");

async function main() {
    const initialSupply = hre.ethers.utils.parseEther("1000000"); // 1 million tokens
    const ERC20Token = await hre.ethers.getContractFactory("ERC20Token");
    const token = await ERC20Token.deploy(initialSupply);

    await token.deployed();
    console.log(`ERC-20 Token deployed to: ${token.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
