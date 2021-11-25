// components
import ProjectItem from "./projectItem/ProjectItem";
// assets
import allProjects from "./ProjectsData";
import "./projects.css";
const Projects = () => {
  return (
    <div className="projects">
      {allProjects.map(({url, text, techs, img, title}, index) => (
        <ProjectItem
          url={url}
          text={text}
          techs={techs}
          img={img}
          title={title}
          key={`AP${index}`}
        />
      ))}
      {/* <ProjectItem url="" github="" img={} title="" text="" techs=""/> */}
    </div>
  );
};

export default Projects;
