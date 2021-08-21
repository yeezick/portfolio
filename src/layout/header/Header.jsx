import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 425) {
        setShowMenu(false);
        setDesktop(true);
      }
      if (window.innerWidth < 1024) {
        setDesktop(false);
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
        <FaReact size={50} className="nav-react" />
        <h1 className="nav-title">Erick Manrique</h1>
      </Link>

      {desktop ? (
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
              <Link
                className="nav-link"
                to="/about"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                About
              </Link>
              <Link
                className="nav-link"
                to="/portfolio"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Portfolio
              </Link>
              <Link
                className="nav-link"
                to="/about"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
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
