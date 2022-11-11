import { Container, IconWrapper } from './styles'
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
  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <Container isActive={isSelected} onClick={() => {setIsSelected(!isSelected)}}>
      <IconWrapper><Icon /></IconWrapper>
      <h4>Servicio lorem ipsum dolor</h4>
    </Container>
  )
}

export default CardService