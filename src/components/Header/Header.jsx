// Header
import { useEffect, useState, useRef } from 'react'
import './Header.scss'
import Container from '@components/Container/Container'
import Nav from '@components/Nav/Nav'
import ScrollIndicator from '@components/ScrollIndicator/ScrollIndicator'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)

  const handleScroll = () => {
    const offsetY = window.scrollY
    if (offsetY >= headerRef.current.scrollHeight) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'isScrolled' : ''}`} ref={headerRef}>
      <Container>
        <div className="header__inner">
          <Nav />
        </div>
      </Container>
      <ScrollIndicator />
    </header>
  )
}

export default Header
