import CardService from '../CardService'
import { Container, List } from './styles'
import IconWeb from 'public/icons/web-icon.svg'

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
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </List>
    </Container>
  )
}

export default Services