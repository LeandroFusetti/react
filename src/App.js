import NavBar from "./components/NavBar/NavBar.js"; 
import './App.css';
import ItemCount from "./components/ItemCount/ItemCount.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting ="Bienvenidos"/> 
        <ItemCount stock='5'inicial='1' /> 
      </header>
    </div>
  );
}

export default App;


