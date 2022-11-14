import { Container, BgImg, Text, Section } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const OurValues = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsShow(entries[0].intersectionRatio === 1)
    }, { threshold: [0, 1] })
    observer.observe(document.querySelector('#ourvalues'))
  }, [])

  return (
    <Section id="ourvalues" isActive={isShow || isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Container>
        <BgImg isActive={isShow || isHover}><Image src='/images/equipo-seed.jpg' alt="Seedlab Fondo" fill /></BgImg>
        <Text isActive={isShow || isHover}>
          <label>Nuestro Valor</label>
          <h2>Desarrollamos tu idea tal como te la imaginas</h2>
          <p>Somos apasionados por el desarrollo de software y siempre estamos buscando nuevas tecnologías para poder ofrecer soluciones vanguardistas a nuestros clientes.
          </p>
        </Text>
      </Container>
    </Section>

  )
}

export default OurValues