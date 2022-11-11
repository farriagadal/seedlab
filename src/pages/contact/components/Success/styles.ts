import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: var(--container-width);
  display: flex;
  align-items: center;
  padding: 100px 0 160px 0;

  @media only screen and (max-width: 765px) {
    display: block;
    padding: 80px 20px 140px 20px;
  }
`

export const BgImg = styled.div`
  position: relative;
  min-width: 540px;
  height: 330px;
  box-shadow: 0px 30px 100px rgba(18, 7, 35, 0.3);
  overflow: hidden;
  border-radius: 80px 0;

  
  @media only screen and (max-width: 765px) {
    width: 100%;
    min-width: initial;
    margin-bottom: 30px;
    border-radius: 150px 0;
  }

  img {
    object-fit: cover;
    animation: expand linear 12s;
    transform: scale(1.2);
  }

  @keyframes expand {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`

export const Text = styled.div`
  width: 100%;
  margin-left: 118px;

  @media only screen and (max-width: 765px) {
    margin-left: 0;
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-right: 42px;
    margin-bottom: 0;
  }
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 765px) {
    display: block;
  }

  h2 {
    margin-top: 0;
    margin-left: 33px;
    margin-bottom: 0;
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 46px;
    line-height: 100%;
    color: #FFFFFF;
    max-width: 457px;

    @media only screen and (max-width: 765px) {
      margin-left: 0;
      margin-top: 20px;
    }

    &::after {
      content: '.';
      color: #23D4AA;
    }
  }

`

export const BtnContact = styled.button`
  margin-top: 40px;
  background: none;
  border: 1px solid #23D4AA;
  border-radius: 20px 0px;
  width: 214px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  cursor: 'pointer';

  &:hover {
    background: #23D4AA;
  }
`