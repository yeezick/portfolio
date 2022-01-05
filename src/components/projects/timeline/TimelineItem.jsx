// .timeline-item div - used as a wrapper. This div will have half the width of it's parent's width (50%) and every other .timeline-item div will be placed to the right side using the :nth-child(odd) selector
// .timeline-item-content div - another wrapper (more on why we need this in the styling section)
// .tag span - this tag will have a custom background color depending on the category
// the time/date and the text
// link - we will need to check this to see if a link is provided because we might not always want to have one
// .circle span - this tag will be used to place a circle on the middle line/bar

export const TimelineItem = ({ project }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag">tag</span>
        <time>{() => new Date()}</time>
        <p>{project.text}</p>
        {"link" && (
          <a href="url" target="_blank" rel="noreferrer">
            {project.url}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
};
