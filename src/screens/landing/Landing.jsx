import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa"; //close contender FaLaptopCode
import resPic from "../../images/resPic.jpeg";
import "./landing.css";

const Landing = () => {
  const [toggleDetail, setToggleDetail] = useState(0);

  const handleAtomClick = () => {
    console.log(toggleDetail);
    if (toggleDetail === 2) {
      setToggleDetail(0);
    }
    else {
      setToggleDetail(toggleDetail + 1);
    }
  };

  return (
    <div>
      <section className="intro app-section">
        <p className="intro-hello">Hello</p>
        <p className="intro-me">
          I'm Erick, a software engineer. Welcome to my portfolio
        </p>
        <p className="intro-options">What would you like to see first?</p>
      </section>

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
                <BsFillPersonLinesFill size={30} />
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

        {/* <div className="interior-ring">
          <div className="interior-circle"></div>
          <div className="interior-circle"></div>
        </div> */}

        {/* <div className="nucleus">MyPic</div> */}
      </div>
    </div>
  );
};

export default Landing;
