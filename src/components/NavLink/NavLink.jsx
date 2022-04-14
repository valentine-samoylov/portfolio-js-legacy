// NavLink
import { useContext } from 'react'
import { NavContext } from '@context/NavContext'
import './NavLink.scss'

const NavLink = ({ navLinkId, scrollToId, linkText }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

  const handleClick = (e) => {
    e.preventDefault()
    setActiveNavLinkId(navLinkId)
    document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' })
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
