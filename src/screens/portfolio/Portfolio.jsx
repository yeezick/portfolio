import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <section className="portfolio-landing">
        <h2 className="portfolio-title">Erick Manrique</h2>
        <h2 className="portfolio-subtitle">Software Engineer</h2>
        <h5>I'm a drop down of essential information</h5>
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
        <p>project thumbnail</p>
        <p>project thumbnail</p>
        <p>project thumbnail</p>
        <p>optional dropdown of old projects</p>
      </section>

      <section className="portfolio-skills">
        <div className="skills-technical">
          <h3 className="skills-title">TECHNICAL</h3>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>

        <div className="skills-attributes">
          <h3 className="skills-title">ATTRIBUTES</h3>
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
