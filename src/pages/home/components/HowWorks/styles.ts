import styled from 'styled-components'

type ContainerProps = {
  isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: var(--container-width);
  margin: auto;
  color: white;
  padding: 120px 0 120px 0;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(-250px)')};
  transition: all 0.4s linear;

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #23D4AA;
    text-align: center;
    display: block;

    &:after {
      content: '';
      left: calc(50% + 120px);
      width: calc(49vw - 120px);
      border-bottom: solid 1px;
      margin-top: 10px;
      position: absolute;
      opacity: 0.1;
    }
  }


  h2  {
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.04em;
    max-width: 600px;
    margin: 34px auto 70px auto;

    &::after {
      content: '.';
      color: #23D4AA;
    }
  }

  @keyframes slidedown {
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

type ListProps = {
  isActive?: boolean;
}

export const List = styled.div<ListProps>`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 50px;
  row-gap: 47px;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(-250px)')};
  transition: all 0.4s linear;
`