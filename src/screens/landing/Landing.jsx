import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa"; //close contender FaLaptopCode
import resPic from "../../images/resPic.jpeg";
import "./landing.css";

const Landing = () => {
  const [toggleDetail, setToggleDetail] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAtomClick = () => {
    console.log(toggleDetail);
    if (toggleDetail === 2) {
      setToggleDetail(0);
    } else {
      setToggleDetail(toggleDetail + 1);
    }
  };

  const Tap = () => {
    return (
      <div className="atom-section">
        <h3 className="section-title">Tap the atom to view more.</h3>
      </div>
    );
  };

  const About = () => {
    return (
      <div className="atom-section">
        <h3 className="section-title">About Me</h3>
        <p className="section-text">
          I'm a 22 year old developer, with a huge passion for science and
          astronomy. My deep admiration for these make it apparent to me that being on the cutting edge of
          technology is equivalent to contributing to humanity's evolution. That's exactly where I want to be.
        </p>
        <Link to="/about">
          <button className="project-button">
            <span>Find Out More</span>
          </button>
        </Link>
      </div>
    );
  };

  const Portfolio = () => {
    return (
      <div className="atom-section">
        <h3 className="section-title">Portfolio</h3>
        <p className="section-text">
          While I specialize working with JavaScript and the MERN stack, my
          exposure with Ruby on Rails has given me necessary insight on how the
          concepts behind languages and frameworks truly transfer; allowing me
          the confidence to immerge myself into uncomfortable territory with an
          everlasting passion to learn and excel.
        </p>
        <Link to="/portfolio">
          <button className="project-button">
            <span>See My Work</span>
          </button>
        </Link>
      </div>
    );
  };

  return (
    <div className="landing">
      <section className="intro app-section">
        <p className="intro-hello">Hello, I'm Erick,</p>
        <p className="intro-me">
          <span className="intro-span"> </span>
        </p>
        {/* <p className="intro-options">What would you like to see first?</p> */}
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
                <div className="interior-circle">
                  <BsFillPersonLinesFill size={30} variant="light" />
                </div>
                <div className="interior-circle">
                  <FaCode size={40} />
                </div>
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
          {toggleDetail === 0 ? <Tap/> : toggleDetail === 1 ? (
            <About />
          ) : (
            <Portfolio />
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
