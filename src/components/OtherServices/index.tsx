import CardService from 'src/components/CardService'
import { Container, List } from './styles'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

type OtherServicesProps = {
  services: any[]
  title: string
}

const OtherServices = ({services, title}: OtherServicesProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      <List>
        <Splide options={{
          perPage: 3,
          rewind: false,
          arrows: false,
          width : '100%',
          gap   : '90px',
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

export default OtherServices