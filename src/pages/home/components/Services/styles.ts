import styled from 'styled-components'

export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  color: white;
  padding-top: 100px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 30px;
`