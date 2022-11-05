import styled from 'styled-components'

type ContainerProps = {
  isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: var(--container-width);
  margin: auto;
  color: white;
  padding: 30px 0 120px 0;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(250px)')};
  transition: all 0.4s linear;

  display: flex;
`

export const Text = styled.div`
  max-width: 600px;
  align-self: center;

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #23D4AA;

    &:before {
      content: '';
      left: calc((var(--container-width) - 100vw)/2);
      width: calc((100vw - var(--container-width))/2 - 30px);
      border-bottom: solid 1px;
      margin-top: 10px;
      position: absolute;
      opacity: 0.1;
    }
  }


  h2  {
    line-height: 100%;
    letter-spacing: 0.04em;
    &::after {
      content: '.';
      color: #23D4AA;
    }
  }

  p {
    line-height: 25px;
    letter-spacing: 0.04em;
  }
`

export const List = styled.div`
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 65px;
  row-gap: 43px;
  transition: all 0.4s linear;
  max-width: 570px;
`

export const Tech = styled.div`
  position: relative;
  width: 252px;
  height: 164px;
  background: #FFFFFF;
  border-radius: 30px 0px;

  img {
    max-height: 70px;
    max-width: 170x;
    left: 50% !important;
    top: 50%  !important;
    transform: translateX(-50%) translateY(-50%) !important;
  }
`