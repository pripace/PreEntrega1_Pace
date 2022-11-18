import React from 'react';
import Item from './Item';

 
function ItemList({products}) {
  return (
    <div className='cuerpoCards'>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.name}
            price={product.price}
            descripcion={product.descripcion}
            stock={product.stock}
            idCategory={product.category} />
        )
      }
      )}

    </div>
  )
}

export default ItemList;