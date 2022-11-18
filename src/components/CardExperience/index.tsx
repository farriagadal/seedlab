import { Container } from './styles'
import { useState, useEffect } from 'react'

const CardExperience = ({ children, index }: any) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      if (entries[0].intersectionRatio === 1) {
        setIsShow(true)
      } else {
        setTimeout(() => {
          setIsShow(false)
        }, 2000)
      }
    }, { threshold: 1 })
    observer.observe(document.querySelector(`#experience-${index}`))
    
  }, [])

  return <Container show={isShow} id={`experience-${index}`}>{ children }</Container>
}

export default CardExperience