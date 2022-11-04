import { useEffect, useState } from 'react'
import CardWork from '../CardWork'
import { Container, List } from './styles'
import IconWork1 from 'public/icons/how-work-1.svg'
import IconWork2 from 'public/icons/how-work-2.svg'
import IconWork3 from 'public/icons/how-work-3.svg'


const cards = [
  {
    Icon: IconWork1,
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  },
  {
    Icon: IconWork2,
    title: 'Lorem ipsum dolor sed do eiusmod',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  },
  {
    Icon: IconWork3,
    title: 'Lorem ipsum dolor sed do eiusmod',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  }
]


const HowWorks = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsShow(entries[0].intersectionRatio === 1)
    }, { threshold: 1 })
    observer.observe(document.querySelector('#howworks'))
  }, [])

  return (
    <div id="howworks" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Container isActive={isShow || isHover}>
        <label>Cómo trabajamos</label>
        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
        <List isActive={isShow || isHover}>
          {cards.map((card, index) => <CardWork key={index} {...card} number={index+1} />)}
        </List>
      </Container>
    </div>

  )
}

export default HowWorks