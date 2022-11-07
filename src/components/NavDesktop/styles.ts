import styled from 'styled-components'

type ContainerProps = {
  isTop: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 44px;
  position: sticky;
  top: 0;
  z-index: 111;
  background: #021720;
  transition: background 0.2s ease-in-out;

  nav {
    align-items: flex-end;
    max-width: var(--container-width);
    margin: auto;
    display: flex;
    align-items: center;
    height: 60px;

    .full-logo {
      animation: 0.3s appear-logo linear;
      display: ${props => props.isTop ? 'block' : 'none'};
    }
  
    .short-logo {
      position: absolute;
      animation: 0.2s appear-logo linear;
      left: 47px;
      top: 22px;
      display: ${props => props.isTop ? 'none' : 'block'};
    }

    .short-logo-black {
      position: absolute;
      left: 47px;
      top: 22px;
      display: none;
    }

    @keyframes appear-logo {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &:hover {
    background: ${props => props.isTop ? '#031821' : '#23D4AA'};

    .short-logo {
      display: none;
    }

    .short-logo-black {
      display: ${props => props.isTop ? 'none' : 'block'};;
    }
  }
`
export const Logo = styled.div`
  margin-right: auto;
`

export const MenuOption = styled.div`
  font-family: 'Poppins';
  color: white;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.1em;
  margin-left: 76px;
`

export const ContactBtn = styled.div`
  background: #021720;
  border: 1px solid #23D4AA;
  border-radius: 0px 20px;
  width: 188px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  transform: rotate(-90deg);
  z-index: 1111;
  position: fixed;
  bottom: 30vh;
  right: -30px;

  &:hover {
    background: #23D4AA;

    img {
      filter: brightness(0) invert(1);
    }
  }

  span {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  img {
    margin-right: 18px;
    transform: rotate(90deg);
    transition: all 0.2s;
  }
`