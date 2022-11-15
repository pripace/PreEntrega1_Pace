import { useState, useEffect } from 'react';
import { getOneItem } from '../../services/mockService';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    async function getItemsAsync() {
        let respuesta = await getOneItem();
        setProduct(respuesta);
    }

    useEffect(() => {
        getItemsAsync();
    }, []);

    return (

        <ItemDetail product={product} />

    );
}

export default ItemDetailContainer;