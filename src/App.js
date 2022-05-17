import NavBar from "./components/NavBar/NavBar.js"; 
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting ="Bienvenidos"/> 
        
      </header>
    </div>
  );
}

export default App;
