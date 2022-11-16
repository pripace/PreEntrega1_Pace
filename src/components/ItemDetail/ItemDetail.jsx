import React from 'react';
import ItemCount from "../Item/ItemCount"


function ItemDetail({product}) {
    return (
        <div className='card mb-3 border-primary' style={{width: '18rem'}}>
            {<img className="card-img-top" src={product.img} alt={product.name} />}
            <div className='card-body'>
            <p className='card-text'>{product.name}</p>
            <p className='card-text'>{product.descripcion}</p>
            <h6 className='card-text'>Precio ${product.price}</h6>
        </div>
        <ItemCount/>
        </div>
    )
}

export default ItemDetail;