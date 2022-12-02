import React from "react";
import "bootswatch/dist/journal/bootstrap.min.css";
//Recordar importar los COMPONENTES, sino no se van a mostrar
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
/* ROUTER */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartCheck from "./components/CartCheck/CartCheck";




function App() {

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer gretting="Compra Online" />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartCheck/>}/>
            <Route path="*" element={<h2>Esta página no existe. Revisa la ruta o vuelve al inicio. (Error 404)</h2>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;
