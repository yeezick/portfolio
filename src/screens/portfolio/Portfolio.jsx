import Projects from "../../components/projects/Projects";


import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="screen">
      <section className="portfolio-landing">
        <div className="portfolio-intro">
          <h2 className="portfolio-title">Erick Manrique</h2>
          <h2 className="portfolio-subtitle">Software Engineer</h2>
        </div>
        <h2 className="section-title">PROFILE</h2>
        <p className="section-text">
          A strong background in hospitality demands a capacity for pressure in
          fast-paced, team-driven environments. This environment is where I
          managed to surface and develop natural qualities including:
          problem-solving * Communication and organization team-driven
          leadership * a passion for learning by practice
        </p>
      </section>

      <section className="portfolio-projects">
        <h2 className="section-title">PROJECTS</h2>
        <Projects />
        <p>optional dropdown of old projects</p>
      </section>

      <section className="portfolio-skills">
        <div className="skills-technical">
          <h3 className="list-title">TECHNICAL</h3>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>

        <div className="list">
          <h3 className="list-title">ATTRIBUTES</h3>
          <ul>
            <li>Team-Oriented Leadership</li>
            <li>Problem Solving</li>
            <li>Agile Development</li>
            <li>Debugging</li>
            <li>Communication</li>
            <li>Versatile and Organized</li>
          </ul>
        </div>
      </section>

      <section className="portfolio-growth">
        <p className="section-text">
          I think an excellent place to demonstrate growth is in my past
          experiences. The icon to the left will take you to my first attempt at
          a portfolio site. I made it about 2 months after I started the
          self-taught journey to code.
        </p>
        <p>project thumbnail</p>
        <p>project thumbnail</p>
      </section>
    </div>
  );
};

export default Portfolio;
