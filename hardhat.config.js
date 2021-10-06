/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
// const projectId = "e8b25d044e554e909df027b9c89c4179"
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/1uoqgnZDEleRhk2K4_Tc7Y6e60jYu_ia",
      accounts: [privateKey]
    },
    // mainnet: {
    //   url: "https://polygon-mainnet.infura.io/v3/$(projectId)",
    //   accounts: [privateKey]
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
