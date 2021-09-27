import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InfoModal from "../../components/infoModal/InfoModal";
import Atom from "../../animations/atom/Atom";

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

  return (
    <div className="landing">
      <section className="intro">
        <div className="intro-greeting">
          <p className="intro-text">Hello, I'm Erick,</p>
          <p className="intro-typewriter">
            <span className="intro-span"> </span>
          </p>
        </div>
        <InfoModal toggleDetail={toggleDetail}/>
      </section>
      <Atom />
    </div>
  );
};

export default Landing;
