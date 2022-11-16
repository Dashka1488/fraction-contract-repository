require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const ETHERSCAN_API_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
  networks: {
    rinkeby: {
      url: ``,
      accounts: ['']
    },
    goerli: {
      url: '',
      accounts: [''],
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
