import styled from 'styled-components'

type ContainerProps = {
  isHover: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid #072C3C;
  position: relative;
  border-radius: 50px 0px 0px 0px;
  /* display: grid;
  place-items: center;
  align-items: start; */
  display: block;
  text-align: center;
  padding: 42px 38px;
  background: ${(props) => (props.isHover ? '#23D4AA' : 'none')};
  min-height: 340px;
  height: 480px;
  max-height: ${(props) => (props.isHover ? '480px' : '340px')};
  transition: all 0.25s ease-in;
  transform: ${(props) => (props.isHover ? 'translateY(-60px)' : 'none')};

  h4 {
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 26px;
    line-height: 100%;
    color: #FFFFFF;
    text-align: center;
    margin: 20px 0;
  }

  p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
    color: #021720;
    opacity: 0.7;
    display: ${(props) => (props.isHover ? 'block' : 'none')};
    animation: 0.2s appear linear;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

type IconMoreProps = {
  isHover: boolean;
}

export const IconMore = styled.div<IconMoreProps>`
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);

  img {
    opacity: ${(props) => (props.isHover ? '1' : '0.1')};
    filter: ${(props) => (props.isHover ? 'brightness(0) invert(1)' : 'none')};
  }
`