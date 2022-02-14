import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div>      
        <NavBar />
        
        <main>
          <Routes>
            
            <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a Compumundo Hipermegared, ¡Vamos a armar!" />}
            />

            <Route path="/categoria/:nombreCategoria"
            element={<ItemListContainer greeting="Productos disponibles" />}
            />

            <Route
            path="/productos/:itemId"
            element={<ItemDetailContainer />}
            />

          </Routes>
        </main>        

    </div>
    </BrowserRouter>
  );
}

export default App;