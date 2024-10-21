const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { infuraProjectId, mnemonic } = require("./secrets.json"); // Create secrets.json for sensitive information

const provider = new HDWalletProvider(
  mnemonic,
  `https://mainnet.infura.io/v3/${infuraProjectId}`
);
const web3 = new Web3(provider);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache port
      network_id: "*",
    },
    rinkeby: {
      provider: () => provider,
      network_id: 4,
      gas: 5500000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
