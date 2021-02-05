import React, {useState} from "react";
import Sushi from './Sushi'
import MoreButton from "./MoreButton";

function SushiContainer({sushi, moreButton, onHandleSushi}) {

  const [sushiEaten, setSushiEaten] = useState(false)

 function removeSushi(sushiToRemove, sushiPrice) {
   onHandleSushi(sushiToRemove, sushiPrice)
 }

  const sushiObj = sushi.map((sush) => {
    return <Sushi key={sush.id} 
                  name={sush.name} 
                  img_url={sush.img_url} 
                  price={sush.price}
                  removeSushi={removeSushi}
            />
  })


  return (
    <div className="belt">
      {sushiObj}
      <MoreButton moreButton={moreButton}/>
    </div>
  );
}

export default SushiContainer;
