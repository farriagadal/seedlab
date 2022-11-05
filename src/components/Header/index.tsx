
import { useEffect } from 'react'
import NavDesktop from '../NavDesktop'
import NavMobile from '../NavMobile'

const Header = () => {
  let isMobile = true

  useEffect(() => {
    setTimeout(() => {
      isMobile = window.innerWidth < 768
    }, 4000)

  }, [])
  
  return (
    <>
      { isMobile ? <NavMobile /> : <NavDesktop /> }
    </>
  )
}

export default Header