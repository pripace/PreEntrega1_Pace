import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { createOrder, exportToFirestore } from '../../services/firestore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./CartCheck.css";

function CartCheck() {  //cartView del profe
  const { cart, clear, removeItem, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  if (cart.length === 0)
    return (
      <div className='mensaje' style={{padding: 40, textAlign: "left"}}>
        <h3>No has agregado nada aun!</h3>
      </div>
    );

  async function checkOut(e) {  //orden de compras
    const order = {
      buyer: {
        name: "Pri",
        email: "pri@react.com",
        phone: "3511112222",
      },
      items: cart,
      total: priceInCart(),
      date: new Date(),
    }

    const orderId = await createOrder(order);
    //AGREGAR ALLLLGO
    navigate(`/thankyou/${orderId}`)
    
    Swal.fire({
      title: `Gracias por adquirir nuestros productos!`,
      text: `Tu código de orden es "${orderId}"`,
      icon: 'success',
    })
    clear();
  };

  return (

    <div className='cart-container'>
      <div className='cart-item-list'>
        {
          cart.map((item) => (
            <div className='cart-item'>
              <h5>En mi carrito:</h5>
              <h4 className='card-title'>{item.name}</h4>
              <h5 className='card-text'>${item.price}</h5>
              <h5 className='card-text'>Cantidad: {item.count}</h5>
              <button onClick={() => removeItem(item.id)} className='btn btn-outline-primary'>Quitar</button>
            </div>
          ))}
        <div className='contButton'>
          <button onClick={checkOut} className='btn btn-outline-primary'>Finalizar compra</button>
          <button onClick={() => clear(cart)} className='btn btn-outline-primary'>Eliminar todos</button>
        </div>
      </div>
    </div>
  )
}

export default CartCheck;