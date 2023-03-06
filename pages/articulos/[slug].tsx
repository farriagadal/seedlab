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
import categories from 'data/categories.json'

// get last 3 services
const cardServices = services.slice(0, 3)

export default function ArticlePage({ article }: any) {
  return (
    <div>
      <Head>
        <title>{article.title} - Seedlabs.cl</title>
      </Head>
      <Heading
        title={article.title}
        image={article.image}
        date={article.date_updated || article.date_created}
        category={article.category_id ? categories.find((category) => category.id === article.category_id)?.name : ''}
        color={article.category_id ? categories.find((category) => category.id === article.category_id)?.color : ''}
      />
      <Content article={article} />
      <References references={article.references} />
      <OtherServices title="Otros servicios" services={cardServices} />
    </div>
  )
}

ArticlePage.getInitialProps = async ({ req, res, query }: any) => {
  // const hostUrl = req.headers.host
  // const protocol = req.headers.referer.split(':')[0]
  let article = {}
  try {
    const res = await axios.get(`${process.env.API_URL}/api/article`, { params: { slug: query.slug } })
    article = res.data
  } catch (error) {
    res.writeHead(302, { Location: '/404' })
    res.end()
  }
  return {
    article
  }
}