import { useState, useEffect } from 'react';
import { getOneItem } from "../../services/mockService";
import ItemDetail from './ItemDetail';

import {useParams} from "react-router-dom";


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
   ///CON ESTO ME MUESTRA POR CONSOLA LO QUE DEBERIA MOSTRAR POR PANTALLA, NO LO RENDERIZA
    const { id } = useParams();
    console.log(useParams());


     async function getItemsAsync() {
        let respuesta = await getOneItem(id);
        setProduct(respuesta);
    }

    useEffect(() => {
        getItemsAsync();
    }, []);

    return  <ItemDetail product={product} />;

}

export default ItemDetailContainer;