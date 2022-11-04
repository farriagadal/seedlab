import Link from 'next/link'
import { Container, Icons } from './styles'
import Image from 'next/image'

const Footer = () => {

  return (
    <Container>
      <Link href="/" className="full-logo">
        <Image src='/icons/logo.svg' alt="SeedLab Logo" width={245} height={46} />
      </Link>
      <p>SeedLab 2022 - Todos los derechos reservados</p>
      <Icons>
        <Link href="/">
          <Image src='/icons/facebook-icon.svg' alt="facebook" width={18} height={18} />
        </Link>
        <Link href="/">
          <Image src='/icons/facebook-icon.svg' alt="facebook" width={18} height={18} />
        </Link>
        <Link href="/">
          <Image src='/icons/facebook-icon.svg' alt="facebook" width={18} height={18} />
        </Link>
      </Icons>
    </Container>
  )
}

export default Footer