require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  network :{
    ethereum:{
    url: process.env.API_KEY,
    accounts: [process.env.Private_key]
    }
  },
  etherscan:{
    apyKey: process.env.API_KEY
  }
}
