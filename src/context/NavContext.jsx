// NavContext
import { useState, createContext } from 'react'

export const NavContext = createContext()

const NavProvider = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('')

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  }

  return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
}

export default NavProvider
