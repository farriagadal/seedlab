/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { Container, Logo, MenuOption, ContactBtn } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NavDesktop = () => {
  const [isTop, setIsTop] = useState(true)
  const router = useRouter()

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
            <h2 className='full-logo'>F. Arriagada</h2>
            <h2 className='short-logo'>F. Arriagada</h2>
            
          </Logo>
          {
            router.pathname === '/' ? 
              <>
                <MenuOption><a href="/#services">Experiencia</a></MenuOption>
                <MenuOption><a href="/#ourvalues">¿Quien soy?</a></MenuOption>
                <MenuOption><a href="/#howworks">Skills</a></MenuOption>
                <MenuOption><a href="/#techs">Tecnologías</a></MenuOption>
              </>
              :
              <>
                <MenuOption><Link href="/#services">Experiencia</Link></MenuOption>
                <MenuOption><Link href="/#ourvalues">¿Quien soy?</Link></MenuOption>
                <MenuOption><Link href="/#howworks">Skills</Link></MenuOption>
                <MenuOption><Link href="/#techs">Tecnologías</Link></MenuOption>
              </>
          }
        </nav>
      </Container>
      <Link href="/contacto">
        <ContactBtn>
          <Image src='/icons/contact-icon.svg' alt="Contact Icon" width={16} height={16} />
          <span>Contáctame</span>
        </ContactBtn>
      </Link>

    </>
    

  )
}

export default NavDesktop