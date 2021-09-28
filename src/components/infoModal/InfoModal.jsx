import { Link } from "react-router-dom";
import InfoTab from "./infoTab/InfoTab"
import "./InfoModal.css"

const InfoModal = ({toggleDetail}) => {

  const Tap = () => {
    return (
      <div className="atom-section">
        <h3 className="section-title">Tap the atom to view more.</h3>
      </div>
    );
  };

  return (
    <div id="infomodal">
    {toggleDetail === 0 ? <Tap/> : toggleDetail === 1 ? (
      <InfoTab title={"About Me"} text={"I'm a 22 year old developer, with a huge passion for science an astronomy. My deep admiration for these make it apparent to me that being on the cutting edge of technology is equivalent to contributing to humanity's evolution. That's exactly where I want to be."} link={"about"} span={"Find Out More"}/>
    ) : (
      <InfoTab title={"Portfolio"} text={"While I specialize working with JavaScript and the MERN stack, my exposure with Ruby on Rails has given me necessary insight on how the concepts behind languages and frameworks truly transfer; allowing me the confidence to immerge myself into uncomfortable territory with an everlasting passion to learn and excel."} link={"portfolio"} span={"See My Work"}/>
    )}
  </div>
  )
}

export default InfoModal
