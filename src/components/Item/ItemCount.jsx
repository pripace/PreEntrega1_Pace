import React, {useState} from "react";

function ItemCount(props) {

  let [count, setCount] = useState(1)

  function handleSuma(){
    if (count < props.stock)
    setCount(count+1);
  }

  function handleResta(){
    if (count > 1)
    setCount(count-1);
  }
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <button className="btn btn-outline-primary" onClick={handleResta}>-</button>
      <span>{count}</span>
      <button className="btn btn-outline-primary" onClick={handleSuma}>+</button>
    </div>
  )

}

export default ItemCount;