import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledCard = styled.article`
  
  &:hover{
    box-shadow: 0 4px 8px 12px rgba(0, 0, 0, 0.1);
    transition: box-shadow .3s ease-in-out;
  }

  &:hover img{
    transform: scale(1.02);
    transition: transform .3s ease-in-out;
  }

  border: 1px solid transparent;
  border-radius: 10px;
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 50px;

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;

}
  
  .titulo{
    color: black;
    font-size: 22px;
  }

  img{
    object-fit: contain;
    width: 100%;
    z-index: -1;
  }

  p{
    font-weight: 200;
  }

  .container{
    padding: 10px;
  }

  .containerBtn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .btnVer{
    width: 100%;
    background-color: #0070D1;
    padding: 5px;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: background .3s ease-in-out;
  }

  .btnAñadir{
    background-color: #0070D1;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    font-weight: 600;
    flex: 1;
  }

  .btnAñadir:hover{
    background-color: #004f94;
  }

  .btnVer:Hover{
    background-color: #004f94;
  }

  input{
    width: 50px;
  }

  #divTarjeta{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
  }

  .divBtn{
    display: flex;
    width: 100%;
    gap: 10px;
  }

  .divCantidad{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
    width: 100%;
    border: 1px solid lightgray;
  }

  #inputCuenta{
    text-align: center;
    border: none;
    font-weight: 900;
    flex: 1;
  }

.btnCuenta{
  background-color: #0070D1;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

`
function Tarjeta({ titulo, descripcion, url, setArticulos, precio, articulos }) {

  const [cuenta, setCuenta] = useState(1)
  const [enCarrito, setEnCarrito] = useState(false)

  const navigate = useNavigate()

  function verProducto() {
    navigate('/producto', {
      state: {
        titulo,
        descripcion,
        url,
        precio
      }
    })
  }

  function actualizarCuenta(tipo) {
    if (cuenta > 1 && tipo === 'resta') {
      setCuenta((prev) => prev - 1)
    }

    if (tipo === 'suma') {
      setCuenta((prev) => prev + 1)
    }
  }

  function addAlCarrito() {

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
    <StyledCard onClick={verProducto}>
      <img src={url} alt=""/>
      <div id='divTarjeta' className={`container ${enCarrito ? 'active' : ''}`}>
        <h2 className='titulo'>{titulo}</h2>
        <p>US&{precio}</p>
      </div>
    </StyledCard>
  )
}

export default Tarjeta