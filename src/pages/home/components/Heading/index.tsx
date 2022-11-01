import { Container, BgImg } from './styles'
import Image from 'next/image'

const Heading = () => {
  return (
    <Container>
      <label>Con SEEDLAB Lograrás</label>
      <h1>Presencia Digital</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      <BgImg><Image src='/images/heading-bg.jpg' alt="Seedlab Fondo" fill /></BgImg>
    </Container>
  )
}

export default Heading