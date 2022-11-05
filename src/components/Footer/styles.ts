import styled from 'styled-components'


export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #072C3C;
  padding: 60px 0;

  p {
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #70828A;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`