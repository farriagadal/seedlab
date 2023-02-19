import ArticleCard from '../ArticleCard'
import { Container, Grid, Box } from './styles'
import Pagination from '@mui/material/Pagination'
import { useEffect, useState } from 'react'

type ContentProps = {
  articles?: any
}

const ITEMS_PER_PAGE = 8

const List = ({ articles }: ContentProps) => {
  const [page, setPage] = useState(1)
  const [items, setItems] = useState(articles.slice(0, ITEMS_PER_PAGE))
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE)

  useEffect(() => {
    setItems([])
    setTimeout(() => {
      setItems(articles.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE))  
    })
  }, [page])

  return (
    <Container>
      <h2>Artículos</h2>
      <Grid>
        {
          items.map((article: any, index: number) => (
            <ArticleCard key={index} article={article} />
          ))
        }
      </Grid>
      <Box>
        <Pagination count={totalPages} onChange={(e, page) => setPage(page)} />
      </Box>
    </Container>
  )
}

export default List