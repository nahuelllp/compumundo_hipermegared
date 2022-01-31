import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="Bienvenidos a Compumundo Hipermegared, ¡Vamos a armar!" />

    </div>
  );
}

export default App;
