import Header from "../header/Header"
import Footer from "../footer/Footer"
import "./layout.css"

const Layout = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
