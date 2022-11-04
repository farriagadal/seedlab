import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, List, Tech, Text } from './styles'

const techsCards = [
  {
    img: '/icons/vue-icon.svg',
    alt: 'Vue Icon'
  },
  {
    img: '/icons/vue-icon.svg',
    alt: 'Vue Icon'
  },
  {
    img: '/icons/vue-icon.svg',
    alt: 'Vue Icon'
  },
  {
    img: '/icons/vue-icon.svg',
    alt: 'Vue Icon'
  },
  {
    img: '/icons/vue-icon.svg',
    alt: 'Vue Icon'
  },
  {
    img: '/icons/vue-icon.svg',
    alt: 'Vue Icon'
  },
]


const Techs = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsShow(entries[0].intersectionRatio === 1)
    }, { threshold: 0.5 })
    observer.observe(document.querySelector('#techs'))
  }, [])

  return (
    <div id="techs" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Container isActive={isShow || isHover}>
        <Text>
          <label>Tecnologías</label>
          <h2>Lorem ipsum dolor sit amet, consectetur</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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