import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Bar, BackBtn, Text } from './styles'

const Heading = () => {
  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/call.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <h2>Lleva tu proyecto de principio a fin</h2>
          <p>Ofrecemos una amplia gama de servicios de desarrollo web, desde el diseño hasta el desarrollo y el alojamiento. Somos un pequeño equipo de desarrolladores de software apasionados por el código, comprometidos a brindar el mejor servicio posible.</p>
        </Text>
      </Container>
      <Bar>
        <Link href="/"><BackBtn>
          <Image src="/icons/back-arrow.svg" alt="Back" width={21} height={18} /> Volver
        </BackBtn></Link>
      </Bar>
    </>

  )
}

export default Heading