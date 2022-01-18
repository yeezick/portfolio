// .timeline-item div - used as a wrapper. This div will have half the width of it's parent's width (50%) and every other .timeline-item div will be placed to the right side using the :nth-child(odd) selector
// .timeline-item-content div - another wrapper (more on why we need this in the styling section)
// .tag span - this tag will have a custom background color depending on the category
// the time/date and the text
// link - we will need to check this to see if a link is provided because we might not always want to have one
// .circle span - this tag will be used to place a circle on the middle line/bar
import "./Timeline.css";

export const TimelineItem = ({ project }) => {
  const { category, date, link, text } = project;
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: category.color }}>
          {category.tag}
        </span>
        <time>{date}</time>
        {project.img && (
          <>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} />
            </a>
          </>
        )}
        <p>{text}</p>
        <a href={link.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        {link.url && (
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
};
