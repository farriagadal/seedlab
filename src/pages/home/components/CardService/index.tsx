import { Container, IconMore, IconWrapper } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

type CardServiceProps = {
  Icon: any,
  title?: string,
  description?: string
}


const CardService = ({ Icon, title, description }: CardServiceProps) => {
  const [isHover, setIsHover] = useState(true)
  
  return (
    <Container isActive={isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <IconWrapper isActive={isHover}><Icon /></IconWrapper>
      <h4>Servicio lorem ipsum dolor</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
      </p>
      <IconMore isActive={isHover}>
        <Image src='/icons/more-icon.svg' alt="Web Logo" width={25} height={25} />
      </IconMore>
      <Link href='/' />
    </Container>
  )
}

export default CardService