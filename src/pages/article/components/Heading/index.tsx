import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Bar, BackBtn, ArrowDown, Text, Label } from './styles'
import { format } from 'date-fns'

type HeadingProps = {
  title: string,
  image?: string,
  date?: any,
  category?: string,
  color?: string
}

const Heading = ({ title, image, date, category, color }: HeadingProps) => {

  const getDate = () => {
    const newDate = new Date(date)
    return <label>{format(newDate, 'dd/MM/yyyy')}</label>
  }

  return (
    <>
      <Container>
        <BgImg src={image} />
        <Text>
          {/* <Image src='/icons/how-work-1.svg' alt="Web Logo" width={77} height={77} /> */}
          <h1>{ title }</h1>
          { date && getDate() }
          { category && <Label color={color}>{category}</Label> }
        </Text>
      </Container>
      <Bar>
        <Link href="/articulos"><BackBtn>
          <Image src="/icons/back-arrow.svg" alt="Back" width={21} height={18} /> Volver
        </BackBtn></Link>
        <ArrowDown href="#content">
          <Image src='/icons/arrow-down.svg' alt="Arrow Down" width={45} height={45} />
        </ArrowDown>
      </Bar>
    </>

  )
}

export default Heading