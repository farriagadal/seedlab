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
        <BgImg isActive={isShow || isHover}><Image src='/images/profile.jpg' alt="Seedlab Fondo" fill /></BgImg>
        <Text isActive={isShow || isHover}>
          <label>¿Quién soy?</label>
          <h2>Apasionado por buscar soluciones tecnológicas</h2>
          <p>En constante aprendizaje de nuevas tecnologías conocimientos. Poseo sólidos conocimientos en tecnologías para desarrollo de aplicaciones con Python (Django), JavaScript (Node.js, React, Vue, Angular) y Docker. Además de conocimiento avanzado en herramientas para desarrollo colaborativo como Git (Github y Gitlab), Jira, Slack
          </p>
        </Text>
      </Container>
    </Section>

  )
}

export default OurValues