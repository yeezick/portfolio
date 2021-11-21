// assets
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRuby,
  SiRails,
  SiReact,
  SiMongodb,
  SiNodeDotJs,
} from "react-icons/si";
import "./SolarSystem.css";
const SolarSystem = () => {
  return (
    <div className="solar-system">
      <div className="orbit">
        <SiReact size={30} color="#61DBFB" />
      </div>

      <div className="orbit">
        <SiJavascript size={30} color="#F0DB4F" />
      </div>

      <div className="orbit">
        <SiRuby size={30} color="#cc0000" />
      </div>

      <div className="orbit">
        <SiMongodb size={30} color="#3FA037" />
      </div>

      <div className="orbit">
        <SiNodeDotJs size={30} color="#68A063" />
      </div>

      <div className="orbit">
        <SiRails size={50} color="#cc0000" />
      </div>

      <div className="orbit">
        <SiCss3 size={30} color="#2965f1" />
      </div>

      <div className="orbit">
        <SiHtml5 size={30} color="#f06529" />
      </div>
      <img src="https://raw.githubusercontent.com/yeezick/iNetwork/main/src/images/erick-cool.gif" alt="myself" className="sun" />
    </div>
  );
};

export default SolarSystem;
