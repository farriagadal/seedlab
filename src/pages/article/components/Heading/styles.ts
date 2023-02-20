import styled from 'styled-components'

export const Container = styled.div`
  height: 590px;
  width: calc(100vw - (100vw - var(--container-width)) / 2);
  display: flex;
  align-items: end;
  border-top-right-radius: 100px;
  margin-top: 60px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 765px) {
    width: calc(100% - 18px);
    height: 442px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 101%;
    height: 101%;
    background: linear-gradient(180deg, rgba(2, 23, 32, 0) 0%, var(--color-1) 100%);
    background-blend-mode: multiply;
    mix-blend-mode: normal;
    z-index: 11;
  }
`

type BgImgProps = {
  src?: string
}

export const BgImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props: BgImgProps) => props.src || '/images/wireframes.jpg'});
  background-size: cover;
  filter: grayscale(1);
  animation: expand-opacity linear 20s;
  transform: scale(1.2);
  opacity: 0.3;

  @keyframes expand-opacity {
    0% {
      transform: scale(1);
      opacity: 0.1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.2;
    }
    100% {
      transform: scale(1.2);
      opacity: 0.3;
    }
  }
`

export const Bar = styled.div`
  width: var(--container-width);
  margin: auto;
  margin-top: 30px;
  position: relative;

  @media only screen and (max-width: 765px) {
    width: 100%;
    margin-top: 120px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 1130px;
    border-bottom: 1px solid var(--color-4);

    @media only screen and (max-width: 765px) {
      width: calc(100vw - 30px);
    }
  }
  
`

export const BackBtn = styled.div`
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-3);
  display: flex;
  align-items: center;
  background: var(--color-1);
  z-index: 1;
  position: relative;
  width: fit-content;
  padding-left: 20px;
  padding-right: 37px;

  img {
    margin-right: 16px;
  }
`

export const ArrowDown = styled.a`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  width: 130px;
  height: 20px;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  top: 5px;
  background: var(--color-1);
  z-index: 1;
  text-align: center;

  @media only screen and (max-width: 765px) {
    top: -70px;
  }

  img {
    filter: brightness(0) invert(1);
    transform: translateY(-30px);
    animation: updown infinite 2s ease-in-out;

    @media only screen and (max-width: 765px) {
      transform: translateY(-10px);
    }
  }

  @keyframes updown {
    0% {
      transform: translateY(-30px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @media only screen and (max-width: 765px) {
    @keyframes updown {
      0% {
        transform: translateY(-10px);
      }
      50% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(-10px);
      }
    }
  }
`


export const Text = styled.div`
  width: var(--content-width);
  z-index: 11;
  position: absolute;
  left: 50vw;
  transform: translateX(-50%);
  padding-bottom: 20px;

  @media only screen and (max-width: 765px) {
    width: 100%;
    padding: 0 25px 20px 28px;
  }

  h2 {
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 46px;
    line-height: 100%;
    color: var(--color-3);
    max-width: 700px;
    margin-bottom: 10px;

    &::after {
      content: '.';
      color: var(--color-2);
    }
  }

  label {
    color: white;
    display: inline-flex;
    margin-top: -30px;
    opacity: 0.7;
    font-weight: 100;
    font-size: 15px;
    margin-bottom: 10px;
    margin-right: 18px;
  }
`

type LabelProps = {
  color?: string
}

export const Label = styled.div<LabelProps>`
  /* border: solid; */
  display: inline-flex;
  padding: 3px 12px;
  background: ${(props: LabelProps) => props.color || 'var(--color-2)'};
  color: white;
`