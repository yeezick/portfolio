import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSpaceShuttle } from "react-icons/fa";
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
        <div className="shuttle">
          <FaSpaceShuttle size={50} />
        </div>
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
            href="https://drive.google.com/file/d/1fR2EMVuTNo3DwBDdJrUxOoPtmArEretD/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
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
                href="https://drive.google.com/file/d/1fR2EMVuTNo3DwBDdJrUxOoPtmArEretD/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
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
