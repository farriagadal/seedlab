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
        <meta property="og:url" content="https://www.example.com" />
        <meta property="og:title" content="Open Graph Title" />
        <meta property="og:description" content="Open Graph Description" />
        <meta property="og:image" content="https://www.example.com/og-image.jpg" />
        <meta property="og:site_name" content="YourSiteName" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@handle" />
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