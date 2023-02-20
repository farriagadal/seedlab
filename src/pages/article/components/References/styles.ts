import styled from 'styled-components'

export const Container = styled.div`
  width: var(--content-width);
  margin: auto;
  color: white;
  
  a {
    display: block;
    opacity: 0.6;
    margin-bottom: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
  }
`

export const Divider = styled.div`
  width: var(--container-width);
  margin: auto;
  margin-top: 80px;
  border-bottom: 1px solid var(--color-4);

  
  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
  }
`