require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// require('dotenv').config()

// const ROPSTEN_URL = process.env.ROPSTEN_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/muH7MzWar843GZ2gtk8FXStcUrHIwItM",
      accounts: [`0x55478784e106f3a465c54053b85017bc852886e8b827d384df8a9bf61c000650`]
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

// DEPLOYED ADDRESS
// nftMarket deployed to: 0xE208cAce357Cb4baC8759c1326F57F49bE993A7A
// nft deployed to: 0x01E7090b2653e711d285f44ab94072562Ce93af9