import Link from 'next/link'
import { Container, Logo, MenuOption } from './styles'
import Image from 'next/image'

const NavDesktop = () => {
  return (
    <Container>
      <nav>
        <Logo>
          <Link href="/">
            <Image src='/icons/logo.svg' alt="SeedLab Logo" width={245} height={46} />
          </Link>
        </Logo>
        <MenuOption><Link href="#">Servicios</Link></MenuOption>
        <MenuOption><Link href="#">Nuestro Valor</Link></MenuOption>
        <MenuOption><Link href="#">Como trabajamos</Link></MenuOption>
        <MenuOption><Link href="#">Tecnologías</Link></MenuOption>
      </nav>
    </Container>
  )
}

export default NavDesktop