import NavBar from "./components/NavBar/NavBar.js"; 
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <main>
      
        
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Todos los Productos"}/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Productos filtrados por categoria "/>}/>
            <Route path='/detalle/:productoId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>Pagina no encontrada</h1>} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;


