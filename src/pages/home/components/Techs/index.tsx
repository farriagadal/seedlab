import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, List, Tech, Text } from './styles'

const techsCards = [
  {
    img: '/images/aws-logo.png',
    alt: 'AWS Logo'
  },
  {
    img: '/images/atlassian-logo.jpg',
    alt: 'atlassian Logo'
  },
  {
    img: '/images/react-logo.png',
    alt: 'React Logo'
  },
  {
    img: '/images/strapi.png',
    alt: 'Strapi Logo'
  },
  {
    img: '/images/google-cloud.png',
    alt: 'Google Cloud Logo'
  },
  {
    img: '/images/docker.png',
    alt: 'Dcoker Logo'
  },
  {
    img: '/images/strapi.png',
    alt: 'Strapi Logo'
  },
  {
    img: '/images/google-cloud.png',
    alt: 'Google Cloud Logo'
  },
  {
    img: '/images/docker.png',
    alt: 'Dcoker Logo'
  },
]


const Techs = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsShow(entries[0].intersectionRatio === 1)
      // if (entries[0].intersectionRatio === 1) {
      //   setIsShow(true)
      // }
    }, { threshold: 1 })
    observer.observe(document.querySelector('#techs'))
  }, [])

  return (
    <div id="techs" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Container isActive={isShow || isHover}>
        <Text>
          <label>Stacks</label>
          <h2>Mantente actualizado</h2>
          <p>Las nuevas tecnologías y herramientas nos permiten construir sitios web y aplicaciones asegurando una calidad y experiencia de usuario de última generación.
          </p>
        </Text>
        <List>
          {techsCards.map((card, index) => (
            <Tech key={index}>
              <Image src={card.img} alt={card.alt} fill />
            </Tech>
          ))}
        </List>
      </Container>
    </div>

  )
}

export default Techs