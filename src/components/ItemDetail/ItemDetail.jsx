import ItemCount from "../Item/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import "./ItemDetail.css"
import { Link } from "react-router-dom";



function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);
    const { addItem, cart } = useContext(cartContext);

    function onAdd(count) {
        setIsInCart(count);
        addItem(product, count)
    }

    let itemInContext = cart.find((itemInCart) => itemInCart.id == product.id);
    let stockUpdate = itemInContext !==undefined? product.stock - itemInContext.count : product.stock;

    return (
        <div className="itemCards">
            <div className='card mb-3 border-primary' style={{ width: '18rem' }}>
                {<img className="card-img-top" src={product.img} alt={product.name} />}
                <div className='card-body'>
                    <p className='card-text'>{product.name}</p>
                    <p className='card-text'>{product.descripcion}</p>
                    <h6 className='card-text'>Precio ${product.price}</h6>
                </div>
                {
                    isInCart ?
                        (
                            <Link to="/cart">
                                <button className="btn btn-outline-primary">Mi Compra</button>
                            </Link>
                        )
                        :
                        (
                            <ItemCount onAdd={onAdd} stock={stockUpdate} />
                        )
                }
            </div>
        </div>
    )
}

export default ItemDetail;