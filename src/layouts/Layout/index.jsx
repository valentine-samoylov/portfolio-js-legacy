// Layout
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
