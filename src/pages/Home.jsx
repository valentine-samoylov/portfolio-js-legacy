// Home
import { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import setDynamicVH from '@utils/setDynamicVH'
import LogoWebpack from '@assets/images/svg/webpack.svg'
import LogoReact from '@assets/images/svg/react.svg'
import LogoSASS from '@assets/images/svg/sass.svg'

const Home = () => {
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
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="d-f ai-c">
            <LogoWebpack /> Webpack Boilerplate (<LogoReact />
            React + <LogoSASS /> SASS)
          </h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
