import Head from 'next/head'
import Content from 'src/pages/service/components/Content'
import Heading from 'src/pages/service/components/Heading'
import IconWeb1 from 'public/icons/how-work-1.svg'
import IconWeb2 from 'public/icons/how-work-2.svg'
import IconWeb4 from 'public/icons/how-work-3.svg'
import OtherServices from 'src/pages/service/components/OtherServices'
import services from 'data/services.js'


// get last 3 services
const cardServices = services.slice(0, 3)

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEEDLABS.CL - Desarrollo Web</title>
      </Head>
      <Heading />
      <Content />
      <OtherServices title="Otros servicios" services={cardServices} />
    </div>
  )
}