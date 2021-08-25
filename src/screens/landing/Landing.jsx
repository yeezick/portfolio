import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa"; //close contender FaLaptopCode
import resPic from "../../images/resPic.jpeg";
import "./landing.css";

const Landing = () => {
  const [toggleDetail, setToggleDetail] = useState(0);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const handleAtomClick = () => {
    console.log(toggleDetail);
    if (toggleDetail === 2) {
      setToggleDetail(0);
    } else {
      setToggleDetail(toggleDetail + 1);
    }
  };

  const About = () => {
    return (
      <div className="atom-section">
        <h3 classname="section-title">About Me</h3>
        <p className="section-text">
          about description
        </p>
      </div>
    )
  }

  const Portfolio = () => {
    return (
      <div className="atom-section">
        <h3 classname="section-title">Portfolio</h3>
        <p className="section-text">
          portfolio description
        </p>
      </div>
    )
  }

  return (
    <div>
      <section className="intro app-section">
        <p className="intro-hello">Hello</p>
        <p className="intro-me">
          I'm Erick, a software engineer. Welcome to my portfolio
        </p>
        <p className="intro-options">What would you like to see first?</p>
      </section>

      <section className="atom-wrapper">
        <div
          id="atom"
          className={
            toggleDetail === 0
              ? "atom"
              : toggleDetail === 1
              ? "atom atom-active-about"
              : "atom atom-active-portfolio"
          }
          onClick={handleAtomClick}
        >
          <div className="exterior-ring">
            <div className="interior-ring">
              <div className="interior-orbit">
                <Link to="/portfolio" className="interior-circle">
                  <BsFillPersonLinesFill size={30} variant="light" />
                </Link>
                <Link to="/about" className="interior-circle">
                  <FaCode size={40} />
                </Link>
              </div>
            </div>

            <div className="exterior-circle"></div>
            <div className="exterior-circle"></div>
            <div className="exterior-circle"></div>
            <div className="exterior-circle"></div>
            <div className="exterior-circle"></div>
            <div className="exterior-circle"></div>
            <div className="exterior-circle"></div>
            <div className="exterior-circle"></div>
            <img src={resPic} alt="myself" className="nucleus" />
          </div>
        </div>
        <div className="atom-content">
          {toggleDetail === 0 ? null : toggleDetail === 1 ? <About/> : <Portfolio/> }
        </div>
      </section>

    </div>
  );
};

export default Landing;
