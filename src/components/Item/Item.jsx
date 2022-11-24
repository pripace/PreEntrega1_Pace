import React from 'react';
import "./Item.css";
import ItemCount from './ItemCount';
import {Link} from "react-router-dom";

function Item(props) {
  const pageDetail = `/item/${props.id}`;
  function onAdd(count) {
    alert(`Tenés ${count} productos en el carrito :)`);  //agregar un SWEET ALERT
}
  return (

    <div className='card mb-3 border-primary' style={{width: '18rem'}}>
      <img className="card-img-top" src={props.img} alt={props.title} />
      <div className='card-body'>
        <h3 className='card-tittle'>{props.title}</h3>
        <p className='card-text'>{props.descripcion}</p>
        <h6 className='card-text'>Precio: ${props.price}</h6>
      </div>
      <Link to={pageDetail}>
       <h5 className='btn'> Ver más </h5>
      </Link>

       <ItemCount onAdd={onAdd} stock={props.stock}/> 

    </div>

  )
}

export default Item;