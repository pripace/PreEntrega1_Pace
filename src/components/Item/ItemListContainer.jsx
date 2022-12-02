import { useState, useEffect } from 'react';
import getItems from '../../services/mockService';
import ItemList from './ItemList';
import {useParams} from "react-router-dom";
import { Metronome } from '@uiball/loaders'

function ItemListContainer(props) {
    const [products, setProducts] = useState(null);
    /* const [isLoading, setIsLoading] = useState(true); */
    const {idCategory} = useParams();

    const loader = <Metronome size={100} speed={1.6} color="pink" />;

    useEffect(() => {
        async function getItemsAsync() {
           let respuesta = await getItems(idCategory);
           setProducts(respuesta);
         }
   
           getItemsAsync();
         }, [idCategory]);

    return (
        <div>
            <div>
                <h1 className='listTittle'>{props.gretting}</h1>
            </div>
            <h3 className='listTittle'>Mis Productos</h3>

                {/* render cond con operador ternario */}
            {
                products? <ItemList products={products}/> : loader
            }

        </div>
    );
}

export default ItemListContainer;



