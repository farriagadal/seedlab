import Link from 'next/link'
import { Container, BtnContact } from './styles'

type ContentProps = {
  article?: any
}

const Content = ({ article }: ContentProps) => {
  return (
    <>
      <Container id="content">
        <b><p> {article?.resume} </p></b>
        <div className='cotenthtml' dangerouslySetInnerHTML={{ __html: article.content }} />
      </Container>
    </>
  )
}

export default Content