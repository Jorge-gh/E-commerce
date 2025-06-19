import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'

const StyledProduct = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .productContainer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 12px rgba(0, 0, 0, 0.1);
  }
  
  main{
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .imgProduct{
    width: 100%;
    max-width: 400px;
    margin: 50px;
    border-radius: 10px;
  }

  #divTarjeta{
    max-width: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
`

function Producto({ setArticulos, toggleCarrito, articulos }) {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    return (
      <div style={{ padding: '40px' }}>
        <h2>No se encontró información del producto.</h2>
        <button onClick={() => navigate('/')}>Volver a la tienda</button>
      </div>
    )
  }

  const { titulo, descripcion, url, precio } = state
  const [cuenta, setCuenta] = useState(1)
  const [enCarrito, setEnCarrito] = useState(false)

  function actualizarCuenta(tipo) {
    if (cuenta > 1 && tipo === 'resta') {
      setCuenta((prev) => prev - 1)
    }

    if (tipo === 'suma') {
      setCuenta((prev) => prev + 1)
    }
  }

  function addAlCarrito() {
    console.log(".");

    if (cuenta === 0) {
      return
    }
    setEnCarrito(true)

    const nuevoArticulo = {
      titulo: titulo,
      precio: precio,
      cantidad: cuenta,
      url: url,
    }
    const articuloEnCarrito = articulos.filter((item) => item.titulo === titulo)

    if (articuloEnCarrito.length >= 1) {
      const arraycant = articulos.map((articulo) => {
        if (articulo.titulo === nuevoArticulo.titulo) {
          return {
            ...articulo,
            cantidad: articulo.cantidad + cuenta
          }
        } else {
          return articulo
        }

      })
      setArticulos(arraycant);
    } else {
      setArticulos((prev) => [...prev, nuevoArticulo])
    }
    setCuenta(1)
  }

  function quitarDelCarrito() {
    setEnCarrito(false)
    const enCarritoFiltrado = articulos.filter((articulo) => articulo.titulo !== titulo);
    setArticulos(enCarritoFiltrado)
  }


  return (
    <StyledProduct>
      <Header toggleCarrito={toggleCarrito}></Header>
      <main>
        <div className="productContainer">
          <img src={url} alt="" className='imgProduct' />
          <div id='divTarjeta' className={`container ${enCarrito ? 'active' : ''}`}>
            <h2 className='titulo'>{titulo}</h2>
            <p>US&{precio}</p>
            <p>{descripcion}</p>
            <div className='containerBtn'>
              <div>
                <button onClick={() => actualizarCuenta('resta')}>-</button>
                <input type='number' value={cuenta}></input>
                <button onClick={() => actualizarCuenta('suma')}>+</button>
              </div>
              <button onClick={() => addAlCarrito()}>Añadir al Carrito</button>
              <button onClick={() => quitarDelCarrito()}>Quitar del Carrito</button>
              <button onClick={() => navigate(-1)}>Volver</button>
            </div>
          </div>
        </div>
      </main>
    </StyledProduct>
  )
} 

export default Producto
