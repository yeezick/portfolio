import "./Atom.css";
import resPic from "../../images/resPic.jpeg";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRuby,
  SiRails,
  SiReact,
  SiPostgresql,
  SiBootstrap,
  SiJquery,
  SiMongodb,
  SiNodeDotJs,
} from "react-icons/si";

{
  /* <SiJquery size={40} color="#78cff5" />
<SiHtml5 size={40} color="#f06529" />
<SiCss3 size={40} color="#2965f1" />
<SiJavascript size={40} color="#F0DB4F" />
<SiNodeDotJs size={40} color="#68A063" />
<SiMongodb size={40} color="#3FA037" />
<SiReact size={40} color="#61DBFB" />
<SiRuby size={40} color="#cc0000" />
<SiRails size={60} color="#cc0000" />
<SiPostgresql size={40} color="#0064a5" />
<SiBootstrap size={40} color="#563d7c" /> */
}

const Atom = ({ toggleDetail, handleAtomClick }) => {
  return (
    <section className="atom-wrapper">
      <div id="atom" onClick={handleAtomClick}>
        <div className="exterior-ring">
          <div className="interior-ring">
            <div className="interior-orbit">
              <div className="interior-circle"><SiReact size={30} color="#61DBFB" /></div>
              <div className="interior-circle"><SiJavascript size={30} color="#F0DB4F" /></div>
            </div>
          </div>

          <div className="exterior-circle">
          <SiRuby size={30} color="#cc0000" />
          </div>
          <div className="exterior-circle">
            <SiRails size={30} color="#cc0000" />
          </div>
          <div className="exterior-circle">
          <SiReact size={30} color="#61DBFB" />
          </div>
          <div className="exterior-circle">
            <SiMongodb size={30} color="#3FA037" />
          </div>
          <div className="exterior-circle">
            <SiNodeDotJs size={30} color="#68A063" />
          </div>
          <div className="exterior-circle">
            <SiJavascript size={30} color="#F0DB4F" />
          </div>
          <div className="exterior-circle">
            <SiCss3 size={30} color="#2965f1" />
          </div>
          <div className="exterior-circle">
            <SiHtml5 size={30} color="#f06529" />
          </div>
          <img src={resPic} alt="myself" className="nucleus" />
        </div>
      </div>
    </section>
  );
};

export default Atom;
