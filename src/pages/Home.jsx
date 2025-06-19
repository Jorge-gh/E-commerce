import React, { useState } from 'react'
import styled from 'styled-components'
import Tarjeta from '../components/Tarjeta'
import Header from '../components/Header'
import Carrito from '../components/Carrito'
import ScrollTop from '../components/ScrollTop'

const HomeContainer = styled.main`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;

  .cardContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  .containerJuegos{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 30px;
  }

  .containerConsolas{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 30px;
  }

  .banner{
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 18px 8px 12px rgba(0, 0, 0, 0.1);
  }

  .imgBanner{
    width: 100%;
    height: 380px;
    object-fit: cover;
  }
  
  .textoBanner{
    padding: 30px;
  }

  .textoBanner div{
    display: flex;
    justify-content: space-between;
  }

  .textoBanner div p{
    font-size: 30px;
    font-weight: 100;
  }

  .banner div button{
    background-color: #0070D1;
    color: white;
    text-align: center;
    width: 100%;
    max-width: 150px;
    border: none;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
  }

  .ofertaBanner{
    flex: 1;
    max-width: 300px;
    position: absolute;
    left: 20%;
    top: 30%;
  }


  @media (max-width: 768px) {
    .banner {
      height: auto;
    }

    .textoBanner{
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .imgBanner {
      height: auto;
      max-height: 250px;
    }

    .ofertaBanner {
      position: absolute;
      width: 100%;
      max-width: 200px;
    }

    .textoBanner div {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    .textoBanner p{
      text-align: center;
    }

    .textoBanner div p {
      font-size: 22px;
    }
  }
`

function Home({ setArticulos, articulos, toggleCarrito, mostrarCarrito }) {

  return (
    <HomeContainer>
      <Header toggleCarrito={toggleCarrito}></Header>

      <div className="banner">
        <img className='imgBanner' src="/public/bannerPrincipal.jpg" alt="" />
        <img className='ofertaBanner' src="/public/ofertaBanner.jpg" alt="" />

        <div className='textoBanner'>
          <div><p>Ofertas De Medio Año</p> <button>Ahorrar ahora</button></div>
          <p>¡Desbloquea más diversión! Obtén juegos digitales y complementos.</p>
        </div>
      </div>

      <section className='cardContainer'>

        <h1>Juegos</h1>
        <div className="containerJuegos">
          <Tarjeta
            titulo='The Last Of US Part I'
            descripcion='Revive una obra maestra modernizada con The Last of Us Part I para PS5, una reconstrucción total del aclamado juego original. Con gráficos renovados, iluminación realista y tiempos de carga casi instantáneos gracias al SSD de alta velocidad, esta edición aprovecha al máximo el poder de la nueva generación. Disfruta de una narrativa emocional e intensa que sigue a Joel y Ellie en su lucha por sobrevivir en un mundo postapocalíptico. El remake incluye mejoras en la IA, controles adaptados al DualSense™ y una experiencia inmersiva optimizada para resolución 4K. Perfecto tanto para nuevos jugadores como para fans que quieran redescubrir esta historia inolvidable.'
            url='/public/thelastofus-part1.webp'
            precio="69.99"
            setArticulos={setArticulos}
            articulos={articulos}
          ></Tarjeta>
          <Tarjeta
            titulo='God Of War: Ragnarok'
            descripcion='Embárcate en una épica aventura nórdica con God of War Ragnarök, la esperada secuela que reúne a Kratos y Atreus en su lucha contra los dioses del fin del mundo. Con una historia profunda, combates intensos y un mundo vasto lleno de mitología, este título exclusivo de PlayStation combina acción brutal con momentos emocionales que exploran el vínculo entre padre e hijo. Disfruta de gráficos impresionantes, nuevas habilidades y enemigos legendarios en una experiencia inmersiva que define la nueva era del gaming.'
            url='/public/godofwar-ragnarok.webp'
            precio="69.99"
            setArticulos={setArticulos}
            articulos={articulos}
          ></Tarjeta>

          <Tarjeta
            titulo='FC 25'
            descripcion='Revive una obra maestra modernizada con The Last of Us Part I para PS5, una reconstrucción total del aclamado juego original. Con gráficos renovados, iluminación realista y tiempos de carga casi instantáneos gracias al SSD de alta velocidad, esta edición aprovecha al máximo el poder de la nueva generación. Disfruta de una narrativa emocional e intensa que sigue a Joel y Ellie en su lucha por sobrevivir en un mundo postapocalíptico. El remake incluye mejoras en la IA, controles adaptados al DualSense™ y una experiencia inmersiva optimizada para resolución 4K. Perfecto tanto para nuevos jugadores como para fans que quieran redescubrir esta historia inolvidable.'
            url='/public/fc25.webp'
            precio="69.99"
            setArticulos={setArticulos}
            articulos={articulos}
          ></Tarjeta>
          <Tarjeta
            titulo='NBA 2K25'
            descripcion='Embárcate en una épica aventura nórdica con God of War Ragnarök, la esperada secuela que reúne a Kratos y Atreus en su lucha contra los dioses del fin del mundo. Con una historia profunda, combates intensos y un mundo vasto lleno de mitología, este título exclusivo de PlayStation combina acción brutal con momentos emocionales que exploran el vínculo entre padre e hijo. Disfruta de gráficos impresionantes, nuevas habilidades y enemigos legendarios en una experiencia inmersiva que define la nueva era del gaming.'
            url='/public/nba2k25.webp'
            precio="69.99"
            setArticulos={setArticulos}
            articulos={articulos}
          ></Tarjeta>
        </div>

        <h1>Consolas</h1>

        <div className="containerConsolas">
          <Tarjeta
            titulo='Mando PS5 Blanco'
            descripcion='Descubre el mando inalámbrico DualSense™ blanco para PS5, diseñado para ofrecer una experiencia de juego inmersiva con retroalimentación háptica, gatillos adaptativos y un diseño ergonómico que se adapta perfectamente a tus manos. Equipado con micrófono integrado, batería recargable y conexión USB-C, este control combina estilo, comodidad y tecnología de última generación, ideal tanto para PS5 como para jugar en PC.'
            url='/public/mando-ps5-negro.webp'
            precio="72.55"
            setArticulos={setArticulos}
            articulos={articulos}
          ></Tarjeta>
          <Tarjeta
            titulo='PS5 Digital'
            descripcion='Vive la nueva generación con la PlayStation 5 Digital Edition, una consola revolucionaria que ofrece una experiencia 100% digital. Con un diseño elegante y sin unidad de discos, esta versión aprovecha al máximo el poder del SSD de ultra alta velocidad, brindando tiempos de carga casi instantáneos. Disfruta de gráficos impresionantes en resolución 4K, iluminación realista y una fluidez extraordinaria gracias a su potente hardware. Compatible con las funciones avanzadas del mando DualSense™, la PS5 Digital Edition ofrece inmersión total a través de retroalimentación háptica, gatillos adaptativos y audio 3D. Ideal para quienes buscan una experiencia moderna, sin discos y completamente optimizada para la nueva generación de videojuegos.'
            url='/public/ps5-digital-blanca.webp'
            precio="449.99"
            setArticulos={setArticulos}
            articulos={articulos}
          ></Tarjeta>

          <Tarjeta
            titulo='Dualsense PS5 Blanco'
            descripcion='Descubre el mando inalámbrico DualSense™ blanco para PS5, diseñado para ofrecer una experiencia de juego inmersiva con retroalimentación háptica, gatillos adaptativos y un diseño ergonómico que se adapta perfectamente a tus manos. Equipado con micrófono integrado, batería recargable y conexión USB-C, este control combina estilo, comodidad y tecnología de última generación, ideal tanto para PS5 como para jugar en PC.'
            url='/public/mando-ps5-blanco.webp'
            precio="72.55"
            setArticulos={setArticulos}
            articulos={articulos}
          ></Tarjeta>
          <Tarjeta
            titulo='PS5 Digital'
            descripcion='Vive la nueva generación con la PlayStation 5 Digital Edition, una consola revolucionaria que ofrece una experiencia 100% digital. Con un diseño elegante y sin unidad de discos, esta versión aprovecha al máximo el poder del SSD de ultra alta velocidad, brindando tiempos de carga casi instantáneos. Disfruta de gráficos impresionantes en resolución 4K, iluminación realista y una fluidez extraordinaria gracias a su potente hardware. Compatible con las funciones avanzadas del mando DualSense™, la PS5 Digital Edition ofrece inmersión total a través de retroalimentación háptica, gatillos adaptativos y audio 3D. Ideal para quienes buscan una experiencia moderna, sin discos y completamente optimizada para la nueva generación de videojuegos.'
            url='/public/ps5-digital-blanca.webp'
            precio="449.99"
            setArticulos={setArticulos}
            articulos={articulos}
          ></Tarjeta>
        </div>
      </section>
      {mostrarCarrito && <Carrito toggleCarrito={toggleCarrito} articulos={articulos} setArticulos={setArticulos} />}
      <ScrollTop></ScrollTop>
    </HomeContainer>
  )
}

export default Home