import Head from 'next/head'
import Content from 'src/pages/service/components/Content'
import Heading from 'src/pages/service/components/Heading'
import OtherServices from 'src/components/OtherServices'
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