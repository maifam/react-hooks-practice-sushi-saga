import React, {useState} from "react";

function Sushi({id, name, img_url, price, removeSushi}) {
 
const [sushiEaten, setSushiEaten] = useState(false)

function sushiToRemove() {
  setSushiEaten(!sushiEaten)
  removeSushi(id, price)
}

  return (
    <div className="sushi">
      <div className="plate" onClick={sushiToRemove}>
        {sushiEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
