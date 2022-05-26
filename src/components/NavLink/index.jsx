// NavLink
import { useContext } from 'react'
import { NavContext } from '@/context/NavContext'
import './index.scss'
import scrollToSection from '@/utils/scrollToSection'

const NavLink = ({ navLinkId, targetId, linkText }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

  const handleClick = (e) => {
    e.preventDefault()
    setActiveNavLinkId(navLinkId)
    scrollToSection(targetId)
  }

  return (
    <a
      className={`navLink ${activeNavLinkId === navLinkId ? 'isActive' : ''}`}
      id={navLinkId}
      href="#"
      onClick={handleClick}
    >
      {linkText}
    </a>
  )
}

export default NavLink
