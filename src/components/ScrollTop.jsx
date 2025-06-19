import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
  box-shadow: 0 4px 8px 12px rgba(0, 0, 0, 0.1);
  color: white;
  border: none;
  border-radius: 30%;
  padding: 5px;
  cursor: pointer;
  z-index: 1000;
  display: none;
  overflow: hidden;

  img{
    width: 40px;
  }

  @media (max-width: 768px) {
    display: ${({ visible }) => (visible ? 'block' : 'none')};
  }
`

const ScrollTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button onClick={scrollToTop} visible={visible}>
      <img src="/public/flechaArriba.png" alt="" />
    </Button>
  )
}

export default ScrollTop
