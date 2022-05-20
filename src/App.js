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
      </header>
      <main>
        <ItemCount stock={10} inicial={1}/> 
      </main>
    </div>
  );
}

export default App;


