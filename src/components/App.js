import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [limit, setLimit] = useState(0)
  const [plates, setPlates] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(sushiArr => {
      setSushi(sushiArr)
    })
  }, [] )

  const sushiDisplayed = sushi.slice(limit, limit + 4)

  function moreSushi(){
    setLimit(limit+4)
  }


  function handleSushi(newPlate, sushiPrice) {
    if (sushiPrice < wallet) {
      setWallet(wallet - sushiPrice)
      setPlates([...plates, newPlate])
    } else {
      alert ("You don't have enough for this sushi")
    }
  }

  
 

  console.log(sushi)

  return (
    <div className="app">
      <SushiContainer sushi={sushiDisplayed} moreButton={moreSushi} onHandleSushi={handleSushi}/>
      <Table plates={plates} wallet={wallet}/>
    </div>
  );
}

export default App;
