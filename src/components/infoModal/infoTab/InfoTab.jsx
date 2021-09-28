import {Link} from "react-router-dom"
import "./InfoTab.css"

const InfoTab = ({title, text, link, span}) => {
  return (
    <div className="infotab">
      <h3 className="infotab-title section-title">{title}</h3>
      <p className="infotab-text section-text">
        {text}
      </p>
      <Link to={`/${link}`}>
        <button className="project-button">
          <span>{span}</span>
        </button>
      </Link>
    </div>
  );
};

export default InfoTab
