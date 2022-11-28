import 'src/styles/main.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { FacebookPixelWithNoSSR } from 'src/components/FacebookPixel'

export default function App({ Component, pageProps }: AppProps) {

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Company',
    headline: 'Desarrollo Web y Aplicaciones Móviles',
    description: 'Contamos con amplia experiencia en el desarrollo de software con el propósito de optimizar y automatizar procesos dentro de tu negocio.',
    author: [
      {
        '@type': 'Fernando',
        name: 'Fernando A.',
      },
    ],
    datePublished: '2022-11-28T09:00:00.000Z',
  }
  

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <meta property="og:type" content="landing" />
        <meta property="og:url" content="https://www.seedlabs.cl/" />
        <meta property="og:title" content="Desarrollo Web y Aplicaciones Móviles" />
        <meta property="og:description" content="Contamos con amplia experiencia en el desarrollo de software con el propósito de optimizar y automatizar procesos dentro de tu negocio." />
        <meta property="og:image" content="https://www.seedlabs.cl/images/graficos.jpg" />
        <meta property="og:site_name" content="Seedlabs.cl" />
        
        <meta name="twitter:image" content="https://www.seedlabs.cl/images/graficos.jpg" />
        <meta name="twitter:card" content="Seedlabs.cl" />
        <meta name="twitter:site" content="@seedlabs.cl" />
        <meta name="twitter:creator" content="@Fernando.A" />
      </Head>
      <FacebookPixelWithNoSSR />
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </>

  )
}