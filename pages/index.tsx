import Head from 'next/head'
import Heading from 'src/pages/home/components/Heading'
import Services from 'src/pages/home/components/Services'
import OurValues from 'src/pages/home/components/OurValues'
import HowWorks from 'src/pages/home/components/HowWorks'
import Techs from 'src/pages/home/components/Techs'
import cardServices from 'data/services.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Desarrollo Web y Aplicaciones Móviles</title>
        <meta name="description" content="Contamos con amplia experiencia en el desarrollo de software con el propósito de optimizar y automatizar procesos dentro de tu negocio." />
      </Head>
      <Heading />
      <Services title="¿Qué ofrecemos?" services={cardServices}/>
      <OurValues />
      <HowWorks />
      <Techs />
    </div>
  )
}
