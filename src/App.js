import React from 'react'

export default function App() {
  const [account,setAccount]=React.useState({
    name:'abhijth',
    account_no:12454,
    balance:100
  });
  const [un,setun]=React.useState(0);
  const [bal,setbal]=React.useState(0);
  const [game,setGame]=React.useState(0)
  const ViewBalance=()=>{
    alert(account.balance)
  }
  const Deposite=()=>{
    let amt=prompt("Enter amount:");
    let current=account.balance;
    setAccount({
      name:"abhijith",
      account_no:12454,
      balance:parseInt(current)+parseInt(amt)
    })
   
  }
  const Withdrawal=()=>{
    let amt=prompt("Enter amount:");
    if(amt>account.balance){
      alert("insufficient fund")
    }
    else{
    let current=account.balance;
    setAccount({
      name:"abhijith",
      account_no:12454,
      balance:parseInt(current)-parseInt(amt)
    })
    }
  }
  const Game=(e)=>{
   
    e.preventDefault();
    if(account.balance<(parseInt(bal)*1.5)){
      alert("insufficient fund")
    }
    else{
      let an=Math.floor(Math.random()*10);
    if(an===un){
      let current=account.balance;
      setAccount({
      name:"abhijith",
      account_no:12454,
      balance:parseInt(current)+(parseInt(bal)*2)
      })
      setGame(prev=>prev+1)
      alert("Excelent...")
    }
    else if(an===(un+1)){
      let current=account.balance;
      setAccount({
      name:"abhijith",
      account_no:12454,
      balance:parseInt(current)+(parseInt(bal)*1.5)
      })
      setGame(prev=>prev+1)
      alert(`Good... Correct Number was ${an}`)
    }
    else if(an===(un-1)){
      let current=account.balance;
      setAccount({
      name:"abhijith",
      account_no:12454,
      balance:parseInt(current)+(parseInt(bal)*1.5)
      })
      setGame(prev=>prev+1)
      alert(`Good... Correct Number was ${an}`)
    }
    else if(an===(un-2)){
      let current=account.balance;
      setAccount({
      name:"abhijith",
      account_no:12454,
      balance:parseInt(current)+(parseInt(bal)*1.0005)
      })
      setGame(prev=>prev+1)
      alert(`Not bad... Correct Number was ${an}`)
    }
    else if(an===(un+2)){
      let current=account.balance;
      setAccount({
      name:"abhijith",
      account_no:12454,
      balance:parseInt(current)+(parseInt(bal)*1.05)
      })
      setGame(prev=>prev+1)
      alert(`Not bad... Correct Number was ${an}`)
    }
    else{
      let current=account.balance;
      setAccount({
      name:"abhijith",
      account_no:12454,
      balance:parseInt(current)-(parseInt(bal)*1.5)
      })
      setGame(prev=>prev+1)
      alert(`sorry... Correct Number was ${an}`)
    }
    setbal(0);
    setun(0);
    an=0
    }
  }
  return (
    <div>
      <button onClick={()=>{Deposite()}}>Deposite</button>
      <button onClick={()=>{ViewBalance()}}>view balance</button>
      <br></br><br></br><br></br><br></br>
      <h1>Guess Number and Earn money</h1>
      <p>there will 5 round after that you can withdraw money all the best</p>
     
      {
        game===5?(
          <div>
            {
              account.balance?(
                <div>
                  <h3>Congrats You Won {account.balance}</h3>
            <button onClick={()=>{Withdrawal()}} >Withdraw Now</button>
                  </div>
              ):(
                <div><h1>Game Over</h1></div>
              )
            }
          </div>
        ):(
      <form onSubmit={Game}>
         <h2>Round {game+1}</h2>
      <input type="number" size="10" value={un} placeholder="0-10"  onChange={(e)=>{setun(e.target.value)}} />
      <input type="number" size="10" value={bal} placeholder="Enter Ammount"  onChange={(e)=>{setbal(e.target.value)}} />
      <button type="submit">Buy</button>
      </form>
        )
      }
    </div>
  )
}
