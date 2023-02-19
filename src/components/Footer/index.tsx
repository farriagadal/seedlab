import Link from 'next/link'
import { Container, Icons, Text } from './styles'
import Image from 'next/image'

const Footer = () => {

  return (
    <Container>
      <Link href="/" className="full-logo">
        <Image src='/icons/logo.svg' alt="SeedLab Logo" width={245} height={46} />
      </Link>
      <Text>
        <p>SeedLab 2022 - Todos los derechos reservados</p>
        <p>Providencia, Av. Italia 850. Santiago, Chile.</p>
      </Text>
      <Icons>
        <a href="#">
          <Image src='/icons/instagram.svg' alt="Facebook Logo Svg" width={25} height={25} />
        </a>
        <a href="#">
          <Image src='/icons/facebook.svg' alt="Facebook Logo Svg" width={30} height={30} />
        </a>
        <a href="#">
          <Image src='/icons/linkedin.svg' alt="Linkedin Logo Svg" width={30} height={30} />
        </a>
      </Icons>
    </Container>
  )
}

export default Footer