import { useState, useEffect } from 'react';
import getItems from '../../services/mockService';
import ItemList from './ItemList';
import {useParams} from "react-router-dom";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();

    async function getItemsAsync() {
        let respuesta = await getItems(idCategory);
        setProducts(respuesta);
      }
    
      useEffect(() => {
        getItemsAsync();
      }, [idCategory]);

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