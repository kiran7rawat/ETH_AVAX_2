import {useState,useEffect} from "react";
import {ethers} from "ethers";
import crypto_making_tree_abi from "../artifacts/contracts/MySmartContract.sol/SmartContract_with_Front_end_interaction.json";

export default function Homepage() {

    const [meMessage,setMeMessage] = useState("Hi There (^_^)");
    const [defaultAccount,setDefaultAccount] = useState(undefined);
    const [balance,setBalance] = useState(undefined);
    const [ethWallet,setEthWallet] = useState(undefined); 
    const [mysmartcontract,setMysmartcontract] = useState(undefined); // it is the atm
    
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const smcABI = crypto_making_tree_abi.abi;

    const getBalance = async() => {
        if(mysmartcontract) {
            setBalance( (await mysmartcontract.getBalance()).toNumber());
        }
    }

    const deposit = async() => {
        if(mysmartcontract) {
            let tx = await mysmartcontract.Deposite(1);
            await tx.wait();
            getBalance();
        }
    }

    const withdraw = async() => {
        if (mysmartcontract) {
            let tx = await mysmartcontract.Withdraw(1);
            await tx.wait();
            getBalance();
        }
    }

    const getWallet = async() => {
        
        if(window.ethereum){
            setEthWallet(window.ethereum);
            console.log("getwallet is executed");
        }
        

        if(ethWallet){
            const account = await ethWallet.request({method: "eth_accounts"});
            accountHandler(account);
        }
    }

    const accountHandler = async(accounts) => {
        if(accounts){
            console.log("Account connected =",accounts);
            setDefaultAccount(accounts);
        }
        else {
            console.log("No Account Found");
        }
    }

    const connectWallettHandler = async() => {
        if(!ethWallet){
            alert("MetaMask Wallet is required to Connect");
            return;
        }
        

        const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });

        accountHandler(accounts);

        getMyContract();
    }
    
    const getMyContract = async() => {
        const provider = new ethers.providers.Web3Provider(ethWallet);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, smcABI, signer);

        setMysmartcontract(contract);
    }

    const initUser = () => {
        if(!ethWallet){
            return <p>Please Install the MetaMask extension in your Browser</p>;
        }

        if(!defaultAccount){
            return (<button onClick={connectWallettHandler}>"Let's Connect With Your Wallet"</button>)
        }

        getBalance();

        return (
            <div>
                <p>Your Account : {defaultAccount}</p>
                <p>Your Balance : {balance}</p>
                <button onClick={deposit}>Deposite 1 ETH</button>
                <button onClick={withdraw}>Withdraw 1 ETH</button>
            </div>
        )
    }

    useEffect(() => {getWallet();}, []);

    return (
      <main className="container">
        <header><h1>Welcome to the Metacrafters Novice's Infinite Crypto Currency Making Tree Interface!</h1></header>
        <h2>{meMessage}</h2>
        {initUser()}
        <style jsx>{`
          .container {
            text-align: center
          }
        `}
        </style>
      </main>
    )    
}