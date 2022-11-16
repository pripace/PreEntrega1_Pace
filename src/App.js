import React from "react";
import "bootswatch/dist/journal/bootstrap.min.css";
//Recordar importar los COMPONENTES, sino no se van a mostrar
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
/* ROUTER */
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer gretting="Compra Online"/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h2>Esta página no existe. Revisa la ruta o vuelve al inicio. (Error 404)</h2>}/>
      
      </Routes>
    </BrowserRouter>

  );
}



export default App;
