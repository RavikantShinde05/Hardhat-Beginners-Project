// This test is to understand the basics of testing the smart contract also 
// the hardhat also gives us flexibility to test the smart contract in solidity language.


// const { expect } = require("chai");



// describe("Token contract", function(){
//     it("Deployment should assign the total supply to owners address", async function(){
        
//         const [owner] = await ethers.getSigners();
//         //Signers is basically an object through which account's features can be access like balance, address.
//         console.log("Signers object", owner);

//         const Token = await ethers.getContractFactory("Token"); //creating an instance of Contract

//         const hardhatToken = await Token.deploy();

//         const ownerBalance = await hardhatToken.balanceof(owner.address);
//         // to console the owners address
//         console.log("owner Address:",owner.address);

//         //now here we "expect" that the total supply should be equal to owner's balance.
//         expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//     });
    

//     it("To Test the transfer tokens function of contract", async function(){
        
//         const [owner,addr1,addr2] = await ethers.getSigners();
//         //Signers is basically an object through which account's features can be access like balance, address.
    
//         const Token = await ethers.getContractFactory("Token"); //creating an instance of Contract

//         const hardhatToken = await Token.deploy();
//         // transfer 10 token addr1 form owner;
//         await hardhatToken.transfer(addr1.address,10);

//         //now test the token is transfered from owner to addr1 or Not.
//         expect(await hardhatToken.balanceof(addr1.address)).to.equal(10);

//         // transfer 5 tokens to addr2 from owner
//         await hardhatToken.connect(addr1).transfer(addr2.address,5);

//         // now test the token is transfered from addr1 to addr2 or Not.
//         expect(await hardhatToken.balanceof(addr2.address)).to.equal(5);

//     });


// }); 