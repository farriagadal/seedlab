import Link from 'next/link'
import { Container, Logo } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const NavMobile = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsTop(entries[0].intersectionRatio === 1)
    }, { threshold: [0,1] })

    observer.observe(document.querySelector('#indicator'))
  }, [])
  
  return (
    <>
      <div id="indicator" />
      <Container isTop={isTop}>
        <nav>
          <Logo>
            <Link href="/" className="full-logo">
              <Image src='/icons/logo.svg' alt="SeedLab Logo" width={245} height={46} />
            </Link>
          </Logo>
          {/* <MenuOption><Link href="#">Servicios</Link></MenuOption>
          <MenuOption><Link href="#">Nuestro Valor</Link></MenuOption>
          <MenuOption><Link href="#">Como trabajamos</Link></MenuOption>
          <MenuOption><Link href="#">Tecnologías</Link></MenuOption> */}
        </nav>
      </Container>
    </>
  )
}

export default NavMobile