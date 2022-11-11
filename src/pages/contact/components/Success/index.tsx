import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Text, BtnContact, Title } from './styles'

const Success = () => {
  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/contact-bg.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <Title>
            <Image src='/icons/check-circle.svg' alt="Check Icon" width={74} height={74} />
            <h2>Mensaje enviado exitosamente</h2>
          </Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <Link href="/"><BtnContact>VOLVER AL INICIO</BtnContact></Link>
        </Text>
      </Container>
    </>

  )
}

export default Success