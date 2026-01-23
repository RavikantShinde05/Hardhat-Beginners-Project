const hre= require("hardhat");

async function main (){
  const buyMeACoffee= await ethers.deployContract("BuyMeACoffee");

  await buyMeACoffee.waitforDeployment();

  console.log(`"contract deployed to" ${await buyMeACoffee.getAddress()}`)

  main().catch(error)=()=>{
    console.log(error);
    process.exitCode = 1;
  };

};