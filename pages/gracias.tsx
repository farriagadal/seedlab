import Head from 'next/head'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Success from 'src/pages/contact/components/Success'

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>SEEDLAB.CL - Contácto</title>
      </Head>
      <Header />
      <Success />
      <Footer />
    </div>
  )
}