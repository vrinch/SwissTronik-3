require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [""],
    },
  },
};
