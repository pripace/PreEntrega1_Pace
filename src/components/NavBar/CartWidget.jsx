import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//1 importo el hook de context
//2 importo el contexto que voy a utilizar
import { cartContext } from '../../context/cartContext';

function CartWidget() {

  const miContext = useContext(cartContext);
  console.log(miContext);
  return (
    <Link to="/cart">
      <li className="nav-item">
        <button className='btn btn-primary'><i className="fas fa-shopping-cart">
          <span>{(miContext.cartItems() === 0) || <small style={{ color: "pink" }}> {miContext.cartItems()} </small>} </span>
        </i></button>
      </li>
    </Link>
  )
}

export default CartWidget;