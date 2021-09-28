import {Link} from "react-router-dom"

const InfoTab = ({title, text, link, span}) => {
  return (
    <div className="atom-section">
      <h3 className="section-title">{title}</h3>
      <p className="section-text">
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
