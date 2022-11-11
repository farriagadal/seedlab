import styled from 'styled-components'

type ContainerProps = {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  align-self: end;

  input {
    height: 42px;
    width: 100%;
    background: transparent;
    color: #fff;
    border: none;
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.04em;
    border-bottom: 1px solid #23D4AA;
    padding: 0;
    z-index: 1;
    position: relative;
    border-color: ${(props) => (props.error ? 'red' : '#23D4AA')};
    transition: all 0.3s ease-in-out;

    &:active, &:focus {
      outline: none;
    }
  }
`

type LabelProps = {
  isEmpty: boolean;
}

export const Label = styled.div<LabelProps>`
  font-weight: 700;
  font-size: ${(props) => (props.isEmpty ? '18px' : '14px')};
  line-height: 25px;
  letter-spacing: 0.04em;
  color: #395B69;
  transform: ${(props) => (props.isEmpty ? 'translateY(35px)' : 'translateY(0px)')};
  transition: all 0.2s ease-in-out;
`