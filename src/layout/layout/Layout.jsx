import Header from "../header/Header"
import Footer from "../footer/Footer"
import "./layout.css"

const Layout = (props) => {
  return (
    <div>
      <Header/>
      <main className="layout-children">
      {props.children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
