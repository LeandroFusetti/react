import NavBar from "./components/NavBar/NavBar.js"; 
import './App.css';
import Formulario from './components/Form/Form';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {CartContextProvider} from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      
      <main>
      
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Todos los Productos"}/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Productos filtrados por categoria "/>}/>
            <Route path='/detalle/:productoId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='*' element={<h1>Pagina no encontrada</h1>} />
            <Route path='/order' element = {<Formulario/>} />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
      </main>
    </div>
  );
}

export default App;


