import Head from 'next/head'
import Content from 'src/pages/article/components/Content'
import Heading from 'src/pages/article/components/Heading'
import OtherServices from 'src/components/OtherServices'
import services from 'data/services.js'
import { useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import axios from 'axios'
import References from 'src/pages/article/components/References'

// get last 3 services
const cardServices = services.slice(0, 3)

export default function ArticlePage({ article }: any) {
  return (
    <div>
      <Head>
        <title>SEEDLABS.CL - Desarrollo Web</title>
      </Head>
      <Heading title={article.title} />
      <Content article={article} />
      <References references={article.references} />
      <OtherServices title="Otros servicios" services={cardServices} />
    </div>
  )
}

ArticlePage.getInitialProps = async ({ req, query }: any) => {
  const hostUrl = req.headers.host
  const protocol = req.headers.referer.split(':')[0]
  const res = await axios.get(`${protocol}://${hostUrl}/api/article`, { params: { slug: query.slug } })

  return {
    article: res.data
  }
}