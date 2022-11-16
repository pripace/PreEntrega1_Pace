import React from 'react';
import "./Item.css";
import ItemCount from './ItemCount';
import {Link} from "react-router-dom";

function Item(props) {
  const pageDetail = `/item/${props.id}`;
  return (
    <div className='card mb-3 border-primary' style={{width: '18rem'}}>
      <img className="card-img-top" src={props.img} alt={props.tittle} />
      <div className='card-body'>
        <h3 className='card-tittle'>{props.tittle}</h3>
        <p className='card-text'>{props.descripcion}</p>
        <h6 className='card-text'>Precio: ${props.price}</h6>
      </div>
      <Link to={pageDetail}>
       <h5> Ver más </h5>
      </Link>
       <button className="btn btn-primary"> Agregar</button> 
      <button className="btn btn-outline-primary">Quitar</button>
      <ItemCount stock={props.stock}/>  
    </div>


  )
}

export default Item;