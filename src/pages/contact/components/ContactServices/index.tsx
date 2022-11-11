
import { Container, List } from './styles'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import CardService from '../CardService'

type ContactServicesProps = {
  services: any[]
}

const ContactServices = ({services}: ContactServicesProps) => {
  return (
    <Container>
      <h2>Selecciona un servicio</h2>
      <List>
        <Splide options={{
          perPage: 4,
          rewind: false,
          arrows: false,
          width : '100%',
          gap   : '31px',
          pagination: false,
          drag: false,
          // dragMinThreshold: 0,
          // flickPower: 500,
          breakpoints: {
            640 : {
              dragMinThreshold: 10,
              flickPower: 10,
              gap: '30px',
              perPage: 1,
              drag: true,
              padding: { right: '20px' }
            },
          },
        }}>
          {services.map((card, index) => (
            <SplideSlide key={index}>
              <CardService {...card} />
            </SplideSlide>
          ))}
        </Splide>
        {/* <CardService />
        <CardService />
        <CardService />
        <CardService /> */}
      </List>
    </Container>
  )
}

export default ContactServices