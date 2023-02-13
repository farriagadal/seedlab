import { Container, Divider } from './styles'

type ContentProps = {
  references: any[]
}

const References = ({ references }: ContentProps) => {
  return (
    <>
      <Container id="content">
        <h2>Referencias</h2>
        {
          references.map((reference, index) => (
            <a href={reference} target="_blank" rel="noreferrer" key={index}>
              - {reference}
            </a>
          ))
        }
      </Container>
      <Divider />
    </>
  )
}

export default References