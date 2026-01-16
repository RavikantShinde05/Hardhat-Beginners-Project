require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  network :{
    chain:{
    url: process.env."http_providers_url/API key",
    accounts: [process.env.Private_key]
    }
  },
  etherscan:{
    // apyKey: process.env.API_KEY
  }
}
