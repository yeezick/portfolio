import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../animations/Logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setDesktop(false);
      } else {
        setDesktop(true);
      }
    };
    handleResize();
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
        <Logo />
        <h1 className="nav-title">Erick Manrique</h1>
      </Link>

      {desktop ? (
        <div className="nav-right">
          <Link className="nav-link" to="/about">
            ABOUT
          </Link>
          <Link className="nav-link" to="/portfolio">
            PORTFOLIO
          </Link>
          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1D4ByXJ5D3-a_QkSgLBxw4fnmqfSgd7B6/view"
          >
            RESUME
          </a>
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
                ABOUT
              </Link>
              <Link
                className="nav-link"
                to="/portfolio"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                PORTFOLIO
              </Link>
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1k5Wn0NjXWUY922SfeInHwkYWtIHqBYL0/view"
              >
                RESUME
              </a>
            </div>
          ) : null}
        </>
      )}
    </nav>
  );
};

export default Header;
