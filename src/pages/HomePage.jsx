// HomePage
import { useEffect } from 'react'
import Header from '@components/Header/Header'
import Hero from '@components/Hero/Hero'
import About from '@components/About/About'
import Skills from '@components/Skills/Skills'
import Works from '@components/Works/Works'
import Download from '@components/Download/Download'
import Contacts from '@components/Contacts/Contacts'
import Footer from '@components/Footer/Footer'
import NavProvider from '@context/NavContext'
import setDynamicVH from '@utils/setDynamicVH'

const HomePage = () => {
  useEffect(() => {
    window.addEventListener('load', setDynamicVH)
    window.addEventListener('resize', setDynamicVH)

    return () => {
      window.removeEventListener('load', () => setDynamicVH)
      window.removeEventListener('resize', () => setDynamicVH)
    }
  }, [])

  return (
    <>
      <NavProvider>
        <Header />
        <main className="main">
          <Hero />
          <About />
          <Skills />
          <Works />
          <Download />
          <Contacts />
        </main>
        <Footer />
      </NavProvider>
    </>
  )
}

export default HomePage
