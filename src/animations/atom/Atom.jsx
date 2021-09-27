import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa"; //close contender FaLaptopCode
import resPic from "../../images/resPic.jpeg";

import "./Atom.css"

const Atom = ({toggleDetail, handleAtomClick}) => {
  return (
    <section className="atom-wrapper">
    <div
      id="atom"
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
  </section>
  )
}

export default Atom
