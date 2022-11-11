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
        <BgImg isActive={isShow || isHover}><Image src='/images/heading-bg.jpg' alt="Seedlab Fondo" fill /></BgImg>
        <Text isActive={isShow || isHover}>
          <label>Nuestro Valor</label>
          <h2>Lorem ipsum dolor sit amet, consectetur</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Text>
      </Container>
    </Section>

  )
}

export default OurValues