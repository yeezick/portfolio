import { allProjects } from "../ProjectsData";
import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  allProjects.length > 0 && (
    <div className="timeline-container">
      {allProjects.map((project, idx) => (
        <TimelineItem project={project} key={idx} />
      ))}
    </div>
  );
};
