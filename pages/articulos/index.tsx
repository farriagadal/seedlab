import Head from 'next/head'
import axios from 'axios'
import List from 'src/pages/articles/components/List'

export default function ArticlesPage({ articles }: any) {
  return (
    <div>
      <Head>
        <title>Seedlabs.cl - Desarrollo Web</title>
      </Head>
      <List articles={articles} />
    </div>
  )
}

ArticlesPage.getInitialProps = async ({ req, query }: any) => {
  const res = await axios.get('https://www.seedlabs.cl/api/articles')
  return {
    articles: res.data
  }
}