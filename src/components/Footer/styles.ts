import styled from 'styled-components'


export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-4);
  padding: 60px 0;
  position: relative;

  
  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
    display: grid;
    justify-items: center;
    justify-content: center;
    padding-bottom: 80px;
  }

  @media only screen and (max-width: 400px) {
    padding-bottom: 150px;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 765px) {
    margin: 20px 0;
  }

  a {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const Text = styled.div`
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align-last: center;

  @media only screen and (max-width: 765px) {
    bottom: 40px;
    width: 100%;
  }

  p {
    font-weight: 300;
    text-align: center;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: var(--color-5);
    margin: 0px;
  }
`