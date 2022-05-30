import NavBar from "./components/NavBar/NavBar.js"; 
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting ="Bienvenidos"/> 
        <ItemDetailContainer/>
      </main>
    </div>
  );
}

export default App;


