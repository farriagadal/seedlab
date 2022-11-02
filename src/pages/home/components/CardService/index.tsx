import { Container, IconMore } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import MoreIcon from 'src/public/icons/more-icon.svg'

const CardService = () => {
  const [isHover, setIsHover] = useState(false)
  
  return (
    <Container isHover={isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Image src='/icons/web-icon.svg' alt="Web Logo" width={114} height={114} />
      <h4>Servicio lorem ipsum dolor.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
      </p>
      <IconMore isHover={isHover}>
        <MoreIcon />
      </IconMore>
    </Container>
  )
}

export default CardService