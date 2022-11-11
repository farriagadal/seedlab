import Head from 'next/head'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Heading from 'src/pages/contact/components/Heading'
import FormContact from 'src/pages/contact/components/FormContact'

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>SEEDLAB.CL - Contácto</title>
      </Head>
      <Header />
      <Heading />
      <FormContact />
      <Footer />
    </div>
  )
}