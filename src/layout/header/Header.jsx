import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 425) {
        setShowMenu(false);
        setMobileNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      {showMenu ? (
        <FaTimes
          size={30}
          className="nav-menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <FaBars
          size={30}
          className="nav-menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      )}
      <Link className="nav-left" to="/">
        <FaReact size={50} className="nav-react"/>
        <h1 className="nav-title">Erick Manrique</h1>
      </Link>

        {!mobileNav ? (
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
        ) : (
          <>
            {showMenu ? (
              <div className="mobile-nav-right">
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
            ) : null}
          </>
        )}
   
    </nav>
  );
};

export default Header;
