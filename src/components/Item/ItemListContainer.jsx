import Item from './Item';
import Products from '../../data.js/data';
function ItemListContainer(props) {

    return (
        <div>
            <div>
                <h1 className='listTittle'>{props.gretting}</h1>
            </div>
            <h3 className='listTittle'>Mis Productos</h3>
            <div className='cuerpoCards'>
                {Products.map((product) => {
                    return (
                        <Item img={product.img} tittle={product.nombre} price={product.precio}
                            descripcion={product.descripcion} stock={product.stock} />
                    )
                }
                )}

            </div>
        </div>
    );
}

export default ItemListContainer;
