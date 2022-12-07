import { useState, useEffect } from 'react';
import { getOneItem } from "../../services/firestore";
import ItemDetail from './ItemDetail';
import { Ping } from '@uiball/loaders'
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //CON ESTO ME MUESTRA POR CONSOLA LO QUE DEBERIA MOSTRAR POR PANTALLA, NO LO RENDERIZA
    const { id } = useParams();
    console.log(useParams());


    async function getItemsAsync() {
        getOneItem(id).then(respuesta => {
            setProduct(respuesta);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getItemsAsync();
    }, []);

    if (isLoading)
        return (<Ping size={100} speed={2} color="pink" />);

    return (
  
        <ItemDetail product={product} />

    )
}

export default ItemDetailContainer;