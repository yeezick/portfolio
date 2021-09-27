import { Link } from "react-router-dom";

const InfoModal = ({toggleDetail}) => {

  const Tap = () => {
    return (
      <div className="atom-section">
        <h3 className="section-title">Tap the atom to view more.</h3>
      </div>
    );
  };

  const About = () => {
    return (
      <div className="atom-section">
        <h3 className="section-title">About Me</h3>
        <p className="section-text">
          I'm a 22 year old developer, with a huge passion for science and
          astronomy. My deep admiration for these make it apparent to me that being on the cutting edge of
          technology is equivalent to contributing to humanity's evolution. That's exactly where I want to be.
        </p>
        <Link to="/about">
          <button className="project-button">
            <span>Find Out More</span>
          </button>
        </Link>
      </div>
    );
  };

  const Portfolio = () => {
    return (
      <div className="atom-section">
        <h3 className="section-title">Portfolio</h3>
        <p className="section-text">
          While I specialize working with JavaScript and the MERN stack, my
          exposure with Ruby on Rails has given me necessary insight on how the
          concepts behind languages and frameworks truly transfer; allowing me
          the confidence to immerge myself into uncomfortable territory with an
          everlasting passion to learn and excel.
        </p>
        <Link to="/portfolio">
          <button className="project-button">
            <span>See My Work</span>
          </button>
        </Link>
      </div>
    );
  };

  return (
    <div className="atom-content">
    {toggleDetail === 0 ? <Tap/> : toggleDetail === 1 ? (
      <About />
    ) : (
      <Portfolio />
    )}
  </div>
  )
}

export default InfoModal
