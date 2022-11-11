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
            <Image src='/icons/error-icon.svg' alt="Error Icon" width={74} height={74} />
            <h2>Ha ocurrido un error</h2>
          </Title>
          <p>Por favor intente más, estamos solucionando el problema en estos momentos.</p>
          <Link href="/"><BtnContact>VOLVER AL INICIO</BtnContact></Link>
        </Text>
      </Container>
    </>

  )
}

export default Success