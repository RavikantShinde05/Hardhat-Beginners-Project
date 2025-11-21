
/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");

// this Private_key is confidential it must be key to safe place/file like ".env" should not be used
// like this directly. This is just for understanding purpose.

// const ALCHEMY_API = "";
// const PRIVATE_KEY = "";

module.exports = {
  solidity: "0.8.28",
  network: {
    ropsten:{
      url:,
      accounts: [`${}`],
    }
  }
  
};
