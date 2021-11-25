const ProjectItem = ({url, github, img, title, text, techs}) => {
  return (
    <div className="project-item">
      <a href={url} target="_blank" rel="noreferrer">
        <img className="project-img" src={img} alt="iNetwork" />
      </a>

      <div className="project-desc">
        <h3 className="project-title">{title}</h3>
        <p className="project-text">
          {text} <br />
        </p>
        <p className="project-techs">
          Utilizes {techs}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <button className="project-button">
            <span>Visit Site</span>
          </button>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <button className="project-button">
            <span>Visit GitHub</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
