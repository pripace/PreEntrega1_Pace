import { createContext, useState } from "react";

//1 inicia contexto
export const cartContext = createContext();
//2 creamos context provider
export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addItem(product, count) {  //ADDTOCART DEL PROFE
        
        let itemAlready = cart.findIndex(
            (itemInCart) => itemInCart.id === product.id);

        let newCart = [...cart];

        if(itemAlready !== -1){
            newCart[itemAlready].count += count;
            setCart(newCart)
        }
        else { 

        product.count = count; //AGREGO PROPIEDAD
        newCart.push(product)
        setCart(newCart)
    }
}

    function clear(){
        //vaciar
        setCart([])
    };

    function removeItem(id){   
        let newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    function cartItems(){  //ES ITEMS IN CART DEL PROFE
        let total = 0;
        cart.forEach((itemCart) => (total = total + itemCart.count));
        return total;
    }

    function totalPrice(){ //priceInCart del profe

    }


    //3 retorna el provider del context creado
    //4 pasamos prop value a las variables que quiero hacer visibles
    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clear, cartItems, totalPrice }}>
            {children}
        </cartContext.Provider>
    )
};





