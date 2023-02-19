import Head from 'next/head'
import axios from 'axios'
import List from 'src/pages/articles/components/List'

export default function ArticlesPage({ articles }: any) {
  return (
    <div>
      <Head>
        <title>SEEDLABS.CL - Desarrollo Web</title>
      </Head>
      <List articles={articles} />
    </div>
  )
}

ArticlesPage.getInitialProps = async ({ req, query }: any) => {
  const res = await axios.get('http://127.0.0.1:3000/api/articles')
  return {
    articles: res.data
  }
}