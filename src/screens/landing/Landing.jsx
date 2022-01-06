import { useState, useEffect } from "react";
import TypewriterComponent from "typewriter-effect";

import InfoModal from "../../components/infoModal/InfoModal";
import SolarSystem from "../../animations/SolarSytem/SolarSystem";

import "./landing.css";

const Landing = () => {
  const [toggleDetail, setToggleDetail] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing">
      <section className="landing-intro">
        <div className="intro-greeting">
          <p className="intro-text">Hello World,</p>
          <p className="intro-typewriter">
            I'm{" "}
            <TypewriterComponent
              className="typewriter"
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Erick!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a software engineer!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a problem-solver!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a leader!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a team-player!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a nerd!")
                  .start();
              }}
            />
          </p>
        </div>
      </section>
      <div id="landing-modal">
        <InfoModal
          toggleDetail={toggleDetail}
          setToggleDetail={setToggleDetail}
        />
      </div>

      <div
        className={`landing-solar-system ${toggleDetail && "active-system"}`}
      >
        <SolarSystem />
      </div>
    </div>
  );
};

export default Landing;
