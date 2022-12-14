import React, { useState } from "react";

function ItemCount({ stock, onAdd }) {

  let [count, setCount] = useState(0)

  function handleSum() {
    if (count < stock)
      setCount(count + 1);
  }

  function handleRest() {
    if (count > 1)
      setCount(count - 1);
  }

  //AGREGA AL CARRITO
  return (

    <div className="list-group-item d-flex justify-content-between align-items-center">
      <button className="btn btn-outline-primary" onClick={handleRest}>-</button>
      <span>{count}</span>
      <button className="btn btn-outline-primary" onClick={handleSum}>+</button>
      <button className="btn btn-primary contButton" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar</button>
    </div>

  )

}

export default ItemCount;