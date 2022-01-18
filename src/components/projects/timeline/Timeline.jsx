import { allProjects } from "../ProjectsData";
import { TimelineItem } from "./TimelineItem";
import "./Timeline.css";

export const Timeline = () => {
  return (
    <div className="timeline-container">
      {allProjects.map((project, idx) => (
        <TimelineItem project={project} key={idx} />
      ))}
    </div>
  );
};
