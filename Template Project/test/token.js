import { expect } from "chai"


describe("token contract", function(){
    let Token;
    let hardhatToken;
    let owner;
    let addr1;
    let addr2;
    
    beforeEach(async function(){
        Token = await ethers.getContractFactory("Token");        
        [owner,addr1,addr2]= await ethers.getSigners();
        hardhatToken = await Token.deploy();
    })

    describe("Deployment",function(){
        it("Should match the total supply to the owners addr", async function(){
            expect(await hardhatToken.owner().to.equal(owner.address));
        })

        it("should assign the total supply to the ownwer",async function(){
            const ownerBalance = await hardhatToken.balanceof(owner.address);
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        });
    });    

    describe("Transction", function(){
        it("Should transfer tokens between created accounts", async function(){
            // transfering initial 10 tokens to addr1 from owners address
            await hardhatToken.transfer(addr1.address,10);
            const addr1Balance = await hardhatToken.balanceof(addr1.address);
            expect(addr1Balance).to.equal(10);
            
            // now transfering 5 tokens from addr1 to addr2 
            await hardhatToken.connect(addr1).transfer(addr2.address,5);
            const addr2Balance = await hardhatToken.balanceof(addr2.address);
            expect(addr2Balance).to.equal(5);
        });

        it("if the Sender's address don't have enough Balance",async function(){
            const intialOwnerBalance = await hardhatToken.balanceof(owner.address);
            await expect(hardhatToken.connect(addr1).transfer(owner.address,1)).to.revertedWith("Not enough balance/Tokens");
            expect( await hardhatToken.balanceof(owner.address)).to.equal(intialOwnerBalance);
        });

        it("Should keep upto date all the account balances", async function(){
            const initialOwnersBalances = await hardhatToken.balanceof(owner.address);
            await hardhatToken.transfer(addr1.address,5);
            await hardhatToken.transfer(addr2.address,10);

            const finalOwnerBalances = await hardhatToken.balanceof(owner.address);
            expect(finalOwnerBalances).to.equal(initialOwnersBalances-15);

            const addr1Balance = await hardhatToken.balanceof(addr1.address);
            expect(addr1Balance).to.equal(5);
            
            const addr2Balance = await hardhatToken.balanceof(addr2.address);
            expect(addr1Balance).to.equal(10);

        });

    });
});
