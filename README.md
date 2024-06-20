# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
## Steps to follow 

Once the hardah project is setup, add your desired contract which you want tp deploy to the contracts folder and wright respective deployment scritpt in the /ignition/modules/ directory. After that run the following commands:
```
npx hardhat compile
npx hardhat ignition deploy ./ignition/modules/{deployment script name }.js --network sepolia
```
**Congratulations, The contract is Deployed...!**

### Note
Add the respective network in the hardhat config file on which you want to deploy and set the solidity version accordingly. Also set the credentials their.

The contract used in this project is deployed on the following address:<br>
Soku:0x527cA92eF9992ebC8Aa521266F15f6d34017ffC8