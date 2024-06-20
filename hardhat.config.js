require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/c24f61d37f764ef0841ed632141835d0`, // Replace with your Infura or Alchemy endpoint
      accounts: [`0x7eaee2200a4e94f757c70babf0c85e3502b2fb7e66fc1502aba4887560361910`],
    },
  },
};
