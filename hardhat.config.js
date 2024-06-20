require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/`, // Replace with your Infura or Alchemy endpoint
      accounts: [`0x`], //account's private key
    },
  },
};
