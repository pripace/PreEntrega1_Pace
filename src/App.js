import './App.css';
import "bootswatch/dist/journal/bootstrap.min.css";
//Recordar importar los COMPONENTES, sino no se van a mostrar
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/Item/ItemListContainer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer gretting="Compra Online"/>
      </header>
    </div>
  );
}



export default App;
