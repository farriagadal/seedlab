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
`
export const Logo = styled.div`
  margin-right: auto;
`