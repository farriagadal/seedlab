import Link from 'next/link'
import { Container, Logo, Isotipo, MenuButton, MenuList, ContactBtn, CloseBtn } from './styles'
import Image from 'next/image'
import { useState } from 'react'

const NavMobile = () => {
  const [open, setOpen] = useState(false)

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
      <MenuButton onClick={() => setOpen(true)}>
        <Image src='/icons/menu-icon.svg' alt="SeedLab Logo" width={29} height={19} />
      </MenuButton>
      {
        open && (
          <MenuList>
            <Link href="/">Servicios</Link>
            <Link href="/">Nuestro Valor</Link>
            <Link href="/">Cómo Trabajamos</Link>
            <Link href="/">Tecnologías</Link>
            <Link href="/contacto"><ContactBtn>
              <span>Contáctanos</span>
              <Image src='/icons/contact-icon.svg' alt="Contact Icon" width={16} height={16} />
            </ContactBtn></Link>
            <CloseBtn onClick={() => setOpen(false)}>
              <Image src='/icons/close-icon.svg' alt="Close Icon" width={22} height={22} />
            </CloseBtn>
          </MenuList>
        )
      }

    </>
  )
}

export default NavMobile