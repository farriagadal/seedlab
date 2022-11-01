import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 44px;
  position: sticky;
  top: 0;
  z-index: 111;

  nav {
    align-items: flex-end;
    max-width: var(--container-width);
    margin: auto;
    display: flex;
    /* padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 30px;
    row-gap: 30px; */
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
  padding-bottom: 10px;
  margin-left: 76px;
`