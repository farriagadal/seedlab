import styled from 'styled-components'

type ContainerProps = {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: none;
  cursor: pointer;
  position: relative;
  border-radius: 40px 0px;
  overflow: hidden;
  display: block;
  text-align: center;
  padding: 40px 10px;
  height: 253px;
  border: 1px solid #072C3C;
  transition: border-color 0.2s ease-in, filter 0.2s;
  border-color: ${(props) => (props.isActive ? '#23D4AA' : '#072C3C')};
  
  &:hover {
    border-color: #23D4AA;
  }

  &:active {
    filter: brightness(0.5);
  }

  h4 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 100%;
    /* or 16px */
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    justify-content: center;
  }

`

export const IconWrapper = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: scale(0.8);
  }
`