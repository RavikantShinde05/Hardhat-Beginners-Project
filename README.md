# Hardhat-Beginners-Project
Basically a beginners Project just to understand the standalone environment provided by hardhat to compile, build , test  and deploy the ethereum apps or Dapps.
Initially just follow these command to run a complete project first after knowing the procedure, you can build your OWN Project. 


### 1. Create Hardhat project and install all dependencies:
Then after creating myapp, install hardhat and dependencies in the same folder.
to install first use this command:
```
npm install --save-dev hardhat@hh2
```
### 2. This Hardhat command will create Template for dapp:
To initialize your project hardhat already provide a sample projects or templates also can create an hardhat empty config.js file for project to start from scratch, to initialize that put the following command 
```
npx hardhat init
```
### Tip: The "npx hardhat" is deprecated and will be removed in the future. Please use "npx hardhat init" instead as your first command.

this will create your project templates of hardhat project in myapp directory. Once you create template of project there are three main directories that is 
- Contract,
- Test,
- Scripts/(ignition/modules/lock.js file)

these helps us to create, compile, test and debug our contract.

### 3. Compilation of Smart Contract: 

After writting SmartContract use this command to Compile.
```
npx hardhat compile
```
after compilation of SmartContract all the necessary files will be created inside this artifacts directory such as contract.sol/contract.json 
from where we can get our deployed contract's address and contracts ABI.

- Also create an artifacts folder in Source directory "src" and provide the path in Hardhat config.js file.

### 4. Run the Hardhat node on other terminal to get Accounts and LocalHost's Url:
use this command to run a node
```
npx hardhat node
```
### 5. Testing of Smart Contract:
Write some test to check the function which you have created in Smart Contract they should work as indeed and try to find out some bugs and debug them.

```
npx hardhat test
```

### 6.Next comes the Deployment part of the SmartContract :
Hardhat allows us to run a local Blockchain's node (Local node / Local machine) on our local machine for build, compile, testing / debugging 
and developing purpose of SmartContracr such as done on "testnet" 

```
npx hardhat ignition deploy ./ignition/modules/Lock.js --network localhost
```
or with localhost url
```
npx hardhat ignition deploy ./ignition/modules/Lock.js --network <your-network>
```

## tips
don't close the terminal or else the hardhat will stop running node once you left. 
