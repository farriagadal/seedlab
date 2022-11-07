import styled from 'styled-components'


export const Container = styled.div`
  margin-top: 24px;
  position: sticky;
  top: 24px;
  z-index: 111;
  /* background: #021720;
  transition: background 0.2s ease-in-out; */
`
export const Isotipo = styled.div`
  margin-left: 20px
`

export const Logo = styled.div`
  position: absolute;
  top: 34px;
  left: 100px;
`

export const MenuButton = styled.button`
  position: fixed;
  bottom: 0px;
  right: 0px;
  background: #23D4AA;
  border-radius: 16px 0px 0px 0px;
  width: 60px;
  height: 60px;
  border: none;
  z-index: 11;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.7);
  }
`