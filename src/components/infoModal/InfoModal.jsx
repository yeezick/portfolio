import { useState } from "react";
import InfoTab from "./infoTab/InfoTab";
import "./InfoModal.css";

const InfoModal = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="infomodal">
      <div className="modal-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <p>
          WHO AM I?
          </p>
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <p>
          WHAT CAN I DO?
          </p>
        </div>
        {
          toggleState > 0 ?
          <span    className={toggleState > 0 ? "exit-tab" : "tabs"}
          onClick={() => toggleTab(0)}>X</span>
          : null
        }
      </div>

      <div className="modal-content">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <InfoTab
            title={"About Me"}
            text={
              "I'm a 22 year old developer, with a huge passion for science an astronomy. My deep admiration for these make it apparent to me that being on the cutting edge of technology is equivalent to contributing to humanity's evolution. That's exactly where I want to be."
            }
            link={"about"}
            span={"Find Out More"}
          />
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <InfoTab
            title={"Portfolio"}
            text={
              "While I specialize working with JavaScript and the MERN stack, my exposure with Ruby on Rails has given me necessary insight on how the concepts behind languages and frameworks truly transfer; allowing me the confidence to immerge myself into uncomfortable territory with an everlasting passion to learn and excel."
            }
            link={"portfolio"}
            span={"See My Work"}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
