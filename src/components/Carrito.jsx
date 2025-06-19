import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledCarrito = styled.section`
    background-color: #00000070;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .priceDiv{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .modalCarrito{
      background-color: white;
      border-radius: 10px;
      width: 100%;
      max-width: 800px;
      height: 400px;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .articulosDiv{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px;
      gap: 20px;
      border-right: 2px solid lightgray;
    }

    .containerArticulos{
      overflow: auto;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 300px;
      padding: 10px;
      height: 250px;
      gap: 30px;
    }

    .tArticulos{
      font-size: 30px;
    }

    img{
      width: 50px;
    }

    p{
      font-weight: 600;
    }

    .divProducto{
      padding-bottom: 10px;
      border-bottom: 2px solid lightgrey;
    }

    .textoVacio{
      width: 100%;
      text-align: center;
      font-size: 20px;
      color: lightgray;
    }
  `

function Carrito({ articulos, toggleCarrito }) {

  const [total, setTotal] = useState(0)

  useEffect(() => { calcularTotal() }, [articulos])

  function calcularTotal() {
    setTotal(0)
    const totalPorArticulo = articulos.map((articulo) => Number(articulo.precio) * Number(articulo.cantidad))
    for (let i = 0; i < totalPorArticulo.length; i++) {
      console.log(totalPorArticulo[i]);
      setTotal((prev) => prev + totalPorArticulo[i])
    }

    return total
  }
  return (
    <StyledCarrito>
      <div className="modalCarrito">
        <div className="articulosDiv">
          <h2 className='tArticulos'>Productos</h2>
          <div className="containerArticulos">
            {articulos.length === 0 ? (
              <p className='textoVacio'>No hay Articulos</p>
            ) : (
                articulos.map(articulo => (
                  <div className='divProducto'>
                    <h2 key={articulo.titulo}>{articulo.titulo}</h2>
                    <img key={articulo.url} src={articulo.url} alt="" />
                    <div className='priceDiv'>
                      <p key={articulo.cantidad}>{articulo.cantidad}x</p>
                      <p key={articulo.precio}>US${articulo.precio}</p>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
        <div className="divCompra">
          <h2>Total: US$ {total.toFixed(2)}</h2>
          <button onClick={toggleCarrito}>Cancelar</button>
          <button>Comprar</button>
        </div>
      </div>
    </StyledCarrito>
  )
}

export default Carrito