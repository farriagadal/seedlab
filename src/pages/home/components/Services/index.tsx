import CardService from 'src/components/CardService'
import { Container, List } from './styles'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import IconWeb1 from 'public/icons/how-work-1.svg'
import IconWeb2 from 'public/icons/how-work-2.svg'
import IconWeb3 from 'public/icons/web-icon.svg'
import IconWeb4 from 'public/icons/how-work-3.svg'


type ServicesProps = {
  services: any[]
  title: string
}

const Services = ({services, title}: ServicesProps) => {
  return (
    <Container id="services">
      <h2>{title}</h2>
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

export default Services