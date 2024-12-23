require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.18",
    networks: {
        sepolia: {
            url: "https://rpc.sepolia.dev",
            accounts: [`0x${process.env.PRIVATE_KEY}`], // Set PRIVATE_KEY in .env
        },
    },
};
