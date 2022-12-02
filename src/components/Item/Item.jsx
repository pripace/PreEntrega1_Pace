import React from 'react';
import "./Item.css";
import {Link} from "react-router-dom";

function Item(props) {
  const pageDetail = `/item/${props.id}`;

  return (

    <div className='card mb-3 border-primary' style={{width: '18rem'}}>
      <img className="card-img-top" src={props.img} alt={props.title} />
      <div className='card-body'>
        <h3 className='card-tittle'>{props.title}</h3>
        <p className='card-text'>{props.descripcion}</p>
        <h6 className='card-text'>Precio: ${props.price}</h6>
        {props.regalo && <small>Viene con: {props.regalo}</small>}
        {props.stock <= 0 && <small>sin stock</small>}
      </div>
      <Link to={pageDetail}>
       <h5 className='btn btn-primary'> Ver más </h5>
      </Link>


    </div>

  )
}

export default Item;