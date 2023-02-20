import Head from 'next/head'
import ErrorContact from 'src/pages/contact/components/ErrorContact'

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Seedlabs.cl - Contácto</title>
      </Head>
      <ErrorContact />
    </div>
  )
}