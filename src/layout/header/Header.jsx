import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import "./header.css"

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 425) {
        setShowMenu(false);
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <nav className="navbar">
      <Link className="nav-left" to="/">
        <img src="" alt="react"/>
        <h1 className="nav-title">Erick Manrique</h1>
      </Link>

      <div className="nav-right">
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>

      </div>
    </nav>
  )
}

export default Header
