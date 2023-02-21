import { Container, BgImg, ArrowDown } from './styles'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useState } from 'react'

const Heading = () => {
  const [imageId, setImageId] = useState(0)

  return (
    <>
      <Container>
        <label>Con SEEDLAB Lograrás</label>
        <Splide aria-label="My Favorite Images"
          options={{
            type: 'fade',
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 6000,
            rewind: true,
            pauseOnHover: false
          }}
          onMoved={(newIndex, oldIndex) => {
            setImageId(oldIndex)
          }}
        >
          <SplideSlide>
            <h1>Impulsa tu negocio</h1>
            <p>Creamos sitios y aplicaciones a medida para empresas que buscan superarse. ¡Contacta con nosotros para llevar tu negocio al siguiente nivel!.</p>
            <BgImg show={imageId === 0}><Image src='/images/graficos.jpg' alt="Seedlab Fondo" fill /></BgImg>
          </SplideSlide>
          <SplideSlide>
            <h1>Presencia digital</h1>
            <p>Atrae más clientes, aumenta tu visibilidad y convierte visitantes en clientes con nuestras estrategias personalizadas de aceleración digital. ¡Potencia tu presencia en línea hoy mismo!</p>
            <BgImg show={imageId === 1}><Image src='/images/wireframes.jpg' alt="Seedlab Fondo" fill /></BgImg>
          </SplideSlide>
          <SplideSlide>
            <h1>Plasmar tu idea</h1>
            <p>Estamos aquí para ayudarle a diseñar, construir, implementar y escalar su producto. Contamos con profesionales que se encargaran de brindar el mejor diseño y experiencia de usuario en cada desarrollo.</p>
            <BgImg show={imageId === 2}><Image src='/images/desarrolla-tu-producto.jpg' alt="Seedlab Fondo" fill /></BgImg>
          </SplideSlide>
        </Splide>
      </Container>
      <ArrowDown href="/#services">
        <Image src='/icons/arrow-down.svg' alt="Arrow Down" fill />
      </ArrowDown>
    </>

  )
}

export default Heading