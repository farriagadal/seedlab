import Link from 'next/link'
import { Container } from './styles'
import { format } from 'date-fns'


type ArticleCardProps = {
  article?: any
}

const imgDefault = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'

const ArticleCard = ({ article }: ArticleCardProps) => {

  const getDate = () => {
    if (!article.date_updated) {
      return ''
    }
    const newDate = new Date(article.date_updated)
    return <label>{format(newDate, 'dd/MM/yyyy')}</label>
  }

  return (
    <>
      <Container>
        <img src={article.image || imgDefault} />
        <p>{article.title}</p>
        <label>{getDate()}</label>
        <span>{article.description}</span>
        <Link href={`/articulos/${article.slug}`} />
      </Container>
    </>
  )
}

export default ArticleCard