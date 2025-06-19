import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FullProduct from './pages/FullProduct'
import { useState } from 'react'
import Carrito from './components/Carrito'

export function App() {

  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const toggleCarrito = () => setMostrarCarrito(prev => !prev)
  const [articulos, setArticulos] = useState([]);

  return (
    <>
      {mostrarCarrito && (
        <Carrito articulos={articulos} toggleCarrito={toggleCarrito} />
      )}
      <Routes>
        <Route path='/' element={<Home articulos={articulos} setArticulos={setArticulos} toggleCarrito={toggleCarrito}/>}></Route>
        <Route path='/producto' element={<FullProduct setArticulos={setArticulos} articulos={articulos} toggleCarrito={toggleCarrito} />}></Route>
      </Routes>
    </>
  )
}

export default App