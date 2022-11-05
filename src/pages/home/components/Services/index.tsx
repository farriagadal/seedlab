import CardService from '../CardService'
import { Container, List } from './styles'
import IconWeb from 'public/icons/web-icon.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const cardServices = [
  {
    Icon: IconWeb,
  },
  {
    Icon: IconWeb,
  },
  {
    Icon: IconWeb,
  },
  {
    Icon: IconWeb,
  }
]

const Services = () => {
  return (
    <Container>
      <h2>Nuestros servicios</h2>
      <List>
        <Splide options={{
          perPage: 4,
          rewind: false,
          arrows: false,
          width : '100%',
          gap   : '30px',
          pagination: false,
          drag: false,
          // dragMinThreshold: 0,
          // flickPower: 500,
          breakpoints: {
            640 : {
              dragMinThreshold: 10,
              flickPower: 10,
              perPage: 1,
              drag: true,
            },
          },
        }}>
          <SplideSlide><CardService /></SplideSlide>
          <SplideSlide><CardService /></SplideSlide>
          <SplideSlide><CardService /></SplideSlide>
          <SplideSlide><CardService /></SplideSlide>
        </Splide>
        {/* <CardService />
        <CardService />
        <CardService />
        <CardService /> */}
      </List>
    </Container>
  )
}

export default Services