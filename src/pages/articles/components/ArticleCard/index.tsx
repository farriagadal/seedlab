import Link from 'next/link'
import { Container, Category } from './styles'
import { format } from 'date-fns'
import categories from 'data/categories.json'

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
        {
          article.category_id &&
          <Category color={categories.find((category) => category.id === article.category_id)?.color}>
            {
              categories.find((category) => category.id === article.category_id)?.name
            }
          </Category>
        }

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