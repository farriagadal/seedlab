import Link from 'next/link'
import { Container, Logo, Isotipo, MenuButton } from './styles'
import Image from 'next/image'

const NavMobile = () => {
  return (
    <>
      <div id="indicator" />
      <Container>
        <Isotipo><Link href="/">
          <Image src='/icons/logo-isotipo.svg' alt="SeedLab Isotipo" width={45} height={45} />
        </Link></Isotipo>
      </Container>
      <Logo><Link href="/">
        <Image src='/icons/short-logo.svg' alt="SeedLab Logo" width={166} height={24} />
      </Link></Logo>
      <MenuButton>
        <Image src='/icons/menu-icon.svg' alt="SeedLab Logo" width={29} height={19} />
      </MenuButton>
    </>
  )
}

export default NavMobile