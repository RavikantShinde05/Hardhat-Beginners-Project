import abi from "myapp/src/Utils/BuyMeAcoffee.json"
import{ ethers } from "ethers";
import { useEffect, useState } from "react";

function App(){
  const contractAddress = "";
  const contractABI = abi.abi;

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [currentAccount, setCurrentAccont]=useState("");
  const [memos, setMemos] = useState([]);


  const onNameChange=(event)=>{
    setName(event.target.value);
  };

  const onMessageChange=(event)=>{
    setMessage(event.target.value)
  };
  // wallet connection
  const isWalletConnected = async ()=>{
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({method: "eth_accounts"});
      console.log("accounts ", accounts);
      if(accounts.length > 0 ){
        const account = accounts[0];
        alert("Wallet is Connect");
        console.log("wallet is connected ", account);
      }else{
        alert("make sure Metamask is connected");
        console.log("make sure Metamask is connected");
      }
    } catch (error) {
      console.log("error ", error);
    }
  }
  
  const connectWallet = async()=>{
    try {
      const { ethereum } = window;
      if(!ethereum){
        alert("Please install Metamask");
        console.log("Please install Metamask");
      }
      const accounts =await ethereum.request({method: "eth_requestAccounts" , })

      setCurrentAccont(accounts[0])
    } catch (error) {
      console.log(error)
    }
  } 

  // function to fetch all the stored on-chain messages
  const getMemos = async()=>{
    try {
      const { ethereum } = window;
      if(ethereum){
        const provider = new ethers.providers.web3Provider(ethereum);
        const signer = provider.getSigner();
        const buycoffee=new ethers.Contract(contractAddress,contractABI,signer);
        console.log("fetching memos from the Blockchain...");

        const memos = await buyMeACoffee.getMemos();
        console.log("fetched");
        setMemos(memos);
  
      }else{
        console.log("Metamask is not connected")
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    let buyMeACoffee;
    isWalletConnected();
    getMemos();

    // create event handler function for someone to send us a new memo
    
    const onNewMemo = (from, timestamp, name, message)=>{
      console.log("Memo received: ", from, timestamp, name, message);
      setMemos((prevState)=>[
        ...prevState,{
           address: from,
           timestamp: new Date(timestamp * 1000),
           message,
           name,
           from
        },
      ]);
    }

    const { ethereum } = window;
    
    // Listen for new Memos events

     if(ethereum) {
      const provider = new ethers.providers.web3Provider(ethereum);
        const signer = provider.getSigner();
        const buycoffee = new ethers.Contract(contractAddress,contractABI,signer);
        buyMeACoffee.on("NewMemos ", onNewMemo)
     }

     return() =>{
      if(buyMeACoffee){
        buyMeACoffee.off("NewMemo ", onNewMemo);
      }
     }
  }, []);


  const buycoffee = async()=>{
    try {
      const { ethereum } = window;
      if(ethereum){
        const provider= new ethers.provider.web3Provider(ethereum, "");
        const signer = provider.getSigner();
        const BuyMeAcoffee= new ethers.Contract(contractAddress, contractABI, signer);

        console.log("buying coffee...");
        const coffeeTx = await BuyMeAcoffee.buycoffee(name ? name: "name", message ? message : "Enjoy your Coffee", {value: ethers.utils.parseEthers("0.001")

       });
        alert("buying coffee. please wait");
        await coffeeTx.wait();  
        console.log("mined", coffeeTx.hash);

        console.log("coffee purchased");
        alert("Thanks for the Coffee!");
        // Clear the form once the message send

        setName("");
        setMessage("");

      }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
   <div className="App">
  <title>Buy me a Coffee!</title>

  <main className="main">

    {currentAccount ? (
      <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            placeholder="name"
            onChange={onNameChange}
          />
        </div>

        <div>
          <label htmlFor="message">Send a Message</label>
          <br />
          <textarea
            id="message"
            rows={3}
            placeholder="Enjoy your Coffee"
            onChange={onMessageChange}
            required
          />
        </div>

        <button type="button" onClick={buycoffee}>
          Send 1 coffee
        </button>
      </form>
    </div>

    ):(<button onClick={connectWallet}>Connect your Wallet </button>
    )};
  </main>

    {currentAccount && <h1>Coffees received</h1>}

    {currentAccount && memos.map((memo, idx)=> {
      return(
        <div key={idx} style={{border: "2px solid", borderRadius:"5px", padding:"5px",margin:"5px"}}>
          <p style={{fontweight: "bold"}}>{memo.message}</p>
          From: {memo.name} at {memo.timestamp.toString()}
          <br/>
          Wallet Address: {memo.from}

        </div>
      )
    })}

  <h1>Coffee Received</h1>
</div>

  
  )
}

export default App;
