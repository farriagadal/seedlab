import Link from 'next/link'
import { Container, BtnContact, Divider } from './styles'

type ContentProps = {
  article?: any
}

const Content = ({ article }: ContentProps) => {
  return (
    <>
      <Container id="content">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </Container>
      {/* <Divider /> */}
    </>
  )
}

export default Content