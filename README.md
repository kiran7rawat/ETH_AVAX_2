### Interact with your SmartContract through Front-end Practice code


## Description
The files index.js, MySmartContract.sol, and deploy.js contain codes to practice interaction with the SmartContract_with_Front_end_interaction smart contract through a website.

## NOTE: 
Deploy.js file contains the code of frontend.


## Environment Setting for Execution the above files
Follow the steps below:

1-> Clone this repository or download the zip file and then extract it.

2-> Above repository contains all necessary files to interact with our smart contract called MySmartContract.sol. 

3-> Copy index.js(from this repository) contents to the index.js file in the (pages) folder

4-> Copy deploy.js(from this repository) contents to the deploy.js file in the (scripts) folder

5-> Install MetaMask Browser Extension

## Starter Next/Hardhat Project

After cloning GitHub, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js <br>
  (Note: You can also verify the address of deployment to contractAddress in index.js file)
5. Back in the first terminal, type npm run dev to launch the front end.

After this, the project will be running on your local host. 
Typically at http://localhost:3000/

## Setting up the local host network and a dummy account in your Metamask Wallet


->We need to set up a local network with the MetaMask wallet. otherwise, Metamask will not be able to communicate with the local node. click on the MetaMask extension then click on the top middle button which is the network selection button
<pre>
-> Click on (Add a Network)
-> Click on (Add a Network Manually)
-> Give the (Network name - whatever you want)
-> Set the (New RPC URL - http://127.0.0.1:8545/ )
-> Set the (Chain ID - 31337 )
-> Set the (Currency symbol - ETH )
->Now set the MetaMask wallet network to the newly created local network</pre>

-> To set up an account you have to import an account with the account's private key which you can find in the 2nd terminal where we have executed this command `npx hardhat node`. after hitting enter you can see there are many account numbers with private keys written in the terminal just take any account's corresponding private key to import it to your Metamask Wallet
 
-> Head to http://localhost:3000/ to start interacting with the Metamask Wallet <br>
-> You can also see all transaction details in the deploy terminal.
