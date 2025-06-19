import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  background-color: white;
  box-shadow: 0 4px 8px 12px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  gap: 20px;
  z-index: 1000;


  .logoTienda{
    width: 100%;
    max-width: 350px;
    height: 40px;
  }

  .carritoImg{
    width: 100%;
    max-width: 35px;
    cursor: pointer;
  }

  .loginBtn{
    background-color: #003791;
    color: white;
    text-align: center;
    padding: 5px;
    width: 100%;
    max-width: 100px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 14px;
  }

  nav{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
  }

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 10px;

  }
`

export function Header({ toggleCarrito }) {
  return (
    <HeaderStyled>
      <Link to="/">
        <img className='logoTienda' src="/public/store-logo.png" alt="" />
      </Link>
      <nav>
        <button href="" className='loginBtn'>Login</button>
        <img className='carritoImg' src="/public/carritoTienda.png" alt="" onClick={toggleCarrito} />
      </nav>
    </HeaderStyled>
  )
}

export default Header