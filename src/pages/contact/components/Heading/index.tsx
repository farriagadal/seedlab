import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Bar, BackBtn, Text } from './styles'

const Heading = () => {
  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/contact-bg.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <h2>Conversemos sobre tu proyecto</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </Text>
      </Container>
      <Bar>
        <Link href="/"><BackBtn>
          <Image src="/icons/back-arrow.svg" alt="Back" width={21} height={18} /> Volver
        </BackBtn></Link>
      </Bar>
    </>

  )
}

export default Heading