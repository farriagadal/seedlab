import styled from 'styled-components'

export const Container = styled.div`
  width: var(--content-width);
  margin: auto;
  color: white;
  padding-top: 54px;
  padding-bottom: 72px;


  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
    margin: auto;
  }

  b p {
    color: white;
    font-weight: 700;
  }

  p {
    color: #7E888D;
    font-weight: 400;
  }

  ul {
    background: #23D4AA;
    border-radius: 30px 0px;
    padding: 60px;
    margin: 70px -60px;
    list-style-type: none;
    position: relative;

    @media only screen and (max-width: 765px) {
      margin: 40px 0;
      padding: 30px;
    }


    li {
      font-family: 'Nunito';
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      letter-spacing: 0.04em;
      color: #FFFFFF;
      margin-bottom: 34px;
      padding-left: 60px;

      @media only screen and (max-width: 765px) {
        padding-left: 50px;
      }

      &:before {
        content:  url('/icons/check-icon.svg');
        position: absolute;
        left: 60px;
        margin-top: 6px;

        @media only screen and (max-width: 765px) {
          left: 30px;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

    }
  }
`
export const BtnContact = styled.div`
  margin-top: 47px;
  background: #021720;
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

  &:hover {
    background: #23D4AA;
  }
`

export const Divider = styled.div`
  width: var(--container-width);
  margin: auto;
  border-bottom: 1px solid #072C3C;

  
  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
  }
`
