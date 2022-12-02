import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';

function CartCheck() {  //cartView del profe
    const { cart, clear, removeItem, totalPrice } = useContext(cartContext);

  return (
    <div>  {/* poner estilos */}
    {
        cart.map( item => <div>
            <h4>{item.name}</h4>
            <h5>${item.price}</h5>
            <h5>Cantidad: {item.count}</h5>
            <button onClick={()=>removeItem(item.id)} className='btn btn-outline-primary'>Quitar</button>
        </div>
        )
    }
    <button onClick={()=>clear(cart)} className='btn btn-outline-primary'>Eliminar todos</button>
    </div>
  )
}

export default CartCheck