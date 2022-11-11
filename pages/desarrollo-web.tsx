import Head from 'next/head'
import Content from 'src/pages/service/components/Content'
import Heading from 'src/pages/service/components/Heading'
import IconWeb1 from 'public/icons/how-work-1.svg'
import IconWeb2 from 'public/icons/how-work-2.svg'
import IconWeb4 from 'public/icons/how-work-3.svg'
import OtherServices from 'src/pages/service/components/OtherServices'


const cardServices = [
  {
    Icon: IconWeb2,
    url: '/desarrollo-web'
  },
  {
    Icon: IconWeb1,
    url: '/desarrollo-web'
  },
  {
    Icon: IconWeb4,
    url: '/desarrollo-web'
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEEDLAB.CL - Desarrollo Web</title>
      </Head>
      <Heading />
      <Content />
      <OtherServices title="Otros servicios" services={cardServices} />
    </div>
  )
}