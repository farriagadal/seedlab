import Head from 'next/head'
import Heading from 'src/pages/home/components/Heading'
import Services from 'src/pages/home/components/Services'
import OurValues from 'src/pages/home/components/OurValues'
import HowWorks from 'src/pages/home/components/HowWorks'
import Techs from 'src/pages/home/components/Techs'
import IconWeb1 from 'public/icons/web.svg'
import IconWeb2 from 'public/icons/software-icon.svg'
import IconWeb3 from 'public/icons/phone.svg'
import IconWeb4 from 'public/icons/chat.svg'
import Content from 'src/pages/service/components/Content'


const cardServices = [
  {
    title: 'Sitios web corporativos',
    Icon: IconWeb1,
    url: '/desarrollo-web',
    description: 'Creamos sitios web corporativos que te ayudarán a posicionar tu marca, tal como tú lo imaginas.'
  },
  {
    title: 'Software a medida (SAAS)',
    Icon: IconWeb2,
    url: '/software-a-medida',
    description: 'Creamos software a medida para que puedas automatizar tus procesos y mejorar la productividad de tu empresa.'
  },
  {
    title: 'Aplicaciones móviles',
    Icon: IconWeb3,
    url: '/apliaciones-moviles',
    description: 'Creamos aplicaciones móviles para que puedas llegar a tus clientes de forma más directa y personalizada.'
  },
  {
    title: 'Asesoría en tecnología',
    Icon: IconWeb4,
    url: '/asesoria-tecnologica',
    description: 'Te ayudamos a elegir la mejor tecnología para tu proyecto, y a tomar las mejores decisiones.'
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>F.Arriagada - Portafolio Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <Techs />
      {/* <HowWorks /> */}
      {/* <Services title="Experiencia" services={cardServices}/> */}
      <OurValues />
      <Content />
      {/* <HowWorks /> */}
    </div>
  )
}
