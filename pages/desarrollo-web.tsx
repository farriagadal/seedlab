import Head from 'next/head'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Content from 'src/pages/service/components/Content'
import Heading from 'src/pages/service/components/Heading'
import IconWeb1 from 'public/icons/how-work-1.svg'
import IconWeb2 from 'public/icons/how-work-2.svg'
import IconWeb4 from 'public/icons/how-work-3.svg'
import OtherServices from 'src/pages/service/components/OtherServices'


const cardServices = [
  {
    Icon: IconWeb2,
  },
  {
    Icon: IconWeb1,
  },
  {
    Icon: IconWeb4,
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEEDLAB.CL - Desarrollo Web</title>
      </Head>
      <Header />
      <Heading />
      <Content />
      <OtherServices title="Otros servicios" services={cardServices} />
      <Footer />
    </div>
  )
}