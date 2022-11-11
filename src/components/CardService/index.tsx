import { Container, IconMore, IconWrapper } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

type CardServiceProps = {
  Icon: any,
  title?: string,
  description?: string,
  url?: string
}


const CardService = ({ Icon, title, description, url = '/' }: CardServiceProps) => {
  const [isHover, setIsHover] = useState(false)
  
  return (
    <Container isActive={isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <IconWrapper isActive={isHover}><Icon /></IconWrapper>
      <h4>{title}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
      </p>
      <IconMore isActive={isHover}>
        <Image src='/icons/more-icon.svg' alt="Web Logo" width={25} height={25} />
      </IconMore>
      <Link href={url} />
    </Container>
  )
}

export default CardService