
import { useEffect, useState } from 'react'
import NavDesktop from '../NavDesktop'
import NavMobile from '../NavMobile'

const Header = () => {
  const [isMobile, setIsMobile] = useState(true)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsMobile(window ? window.innerWidth < 768 : true)
    setIsReady(true)
  }, [])
  
  return (
    <>
      { !isReady ? null : isMobile ? <NavMobile /> : <NavDesktop /> }
    </>
  )
}

export default Header