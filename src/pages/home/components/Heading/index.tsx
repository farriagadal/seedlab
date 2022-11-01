import { Container, BgImg } from './styles'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Heading = () => {
  return (
    <Container>
      <label>Con SEEDLAB Lograrás</label>
      <Splide aria-label="My Favorite Images"
        options={{
          type: 'fade',
          arrows: false,
          pagination: false,
          autoplay: true,
          interval: 4000,
          rewind: true
        }}
      >
        <SplideSlide>
          <h1>Presencia Digital</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <BgImg><Image src='/images/heading-bg.jpg' alt="Seedlab Fondo" fill /></BgImg>
        </SplideSlide>
        <SplideSlide>
          <h1>Presencia Digital 2</h1>
          <p>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <BgImg><Image src='/images/city-bg.jpg' alt="Seedlab Fondo" fill /></BgImg>
        </SplideSlide>
      </Splide>
    </Container>
  )
}

export default Heading