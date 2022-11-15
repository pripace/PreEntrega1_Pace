import { useState, useEffect } from 'react';
import getItems from '../../services/mockService';
import ItemList from './ItemList';
function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    async function getItemsAsync() {
        let respuesta = await getItems();
        setProducts(respuesta);
      }
    
      useEffect(() => {
        getItemsAsync();
      }, []);

    return (
        <div>
            <div>
                <h1 className='listTittle'>{props.gretting}</h1>
            </div>
            <h3 className='listTittle'>Mis Productos</h3>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;


/*     useEffect(
        () => {
            getItems().then((respuestaDatos) => {
                setProducts(respuestaDatos)
            });
        },
        []
    ) */