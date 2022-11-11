import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  color: white;
  padding-top: 50px;
  overflow: hidden;

  @media only screen and (max-width: 765px) {
    padding-left: 20px;
    max-width: 100vw;
    height: initial;
  }

  h2 {
    margin-bottom: 25px;
    font-size: 30px;
    line-height: 45px;
    &::after {
      content: '.';
      color: var(--color-2);
    }
  }
`

export const List = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 30px; */
  .splide {
    .splide__track {
      overflow: unset;
    }
    .splide__slide {
      @media only screen and (max-width: 765px) {
        width: 60vw !important;
      }
    }
  }
`