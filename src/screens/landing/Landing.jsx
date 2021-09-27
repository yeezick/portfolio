import { useState, useEffect } from "react";

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
      <section className="landing-intro">
        <div className="intro-greeting">
          <p className="intro-text">
            Hello,
            <br /> I'm Erick,
          </p>
          <p className="intro-typewriter">
            <span className="intro-span"> </span>
          </p>
        </div>

      </section>
        <div id="landing-modal">
          <InfoModal toggleDetail={toggleDetail} />
        </div>

      <div id="landing-atom">
        <Atom
          toggleDetail={toggleDetail}
          setToggleDetail={setToggleDetail}
          handleAtomClick={handleAtomClick}
        />
      </div>
    </div>
  );
};

export default Landing;
