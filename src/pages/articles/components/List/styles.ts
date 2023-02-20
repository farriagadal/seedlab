import styled from 'styled-components'

export const Container = styled.div`
  width: var(--container-width);
  margin: auto;
  padding-bottom: 100px;

  @media only screen and (max-width: 765px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  h2 {
    margin-top: 90px;
    margin-bottom: 50px;
    color: white;
    &::after {
      content: '.';
      color: var(--color-2);
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 30px;

  @media only screen and (max-width: 765px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .MuiPaginationItem-root {
    color: white;
  }
  
  .MuiPaginationItem-root.MuiButtonBase-root {
    color: white;

    &[aria-current="true"] {
      background-color: var(--color-2);
    }
  }
`
