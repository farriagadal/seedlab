import Link from 'next/link'
import { Container, Icons } from './styles'
import Image from 'next/image'

const Footer = () => {

  return (
    <Container>
      <Link href="/">
        <h2>F. Arriagada</h2>
      </Link>
      <p>Fernando Arriagada Portafolio Web - Chile</p>
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