import { useEffect } from "react";
import Projects from "../../components/projects/Projects";
import { Timeline } from "../../components/projects/timeline/Timeline";
import ProjectItem from "../../components/projects/projectItem/ProjectItem";
// assets
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRuby,
  SiRails,
  SiReact,
  SiPostgresql,
  SiBootstrap,
  SiJquery,
  SiMongodb,
  SiNodeDotJs,
} from "react-icons/si";
import firstPage from "../../images/firstPage.png";
import firstPortfolio from "../../images/firstPortfolio.png";
import "./portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <Timeline />
      </section>

      <section className="portfolio-skills">
        <h2 className="section-title">SKILLS</h2>
        <div className="list">
          <h3 className="list-title">TECHNICAL</h3>
          <div className="technical-icons">
            <div className="technical-single">
              <SiJquery size={40} color="#78cff5" />
              <p>JQUERY</p>
            </div>
            <div className="technical-single">
              <SiHtml5 size={40} color="#f06529" />
              <p>HTML</p>
            </div>
            <div className="technical-single">
              <SiCss3 size={40} color="#2965f1" />
              <p> CSS</p>
            </div>
            <div className="technical-single">
              <SiJavascript size={40} color="#F0DB4F" />
              <p>JAVASCRIPT </p>
            </div>
            <div className="technical-single">
              <SiNodeDotJs size={40} color="#68A063" />
              <p> NODE.JS</p>
            </div>
            <div className="technical-single">
              <SiMongodb size={40} color="#3FA037" />
              <p>MONGODB </p>
            </div>
            <div className="technical-single">
              <SiReact size={40} color="#61DBFB" />
              <p> REACT </p>
            </div>
            <div className="technical-single">
              <SiRuby size={40} color="#cc0000" />
              <p> RUBY</p>
            </div>
            <div className="technical-single rails-single">
              <SiRails size={60} color="#cc0000" />
              <p> RAILS</p>
            </div>
            <div className="technical-single">
              <SiPostgresql size={40} color="#0064a5" />
              <p>POSTGRESQL </p>
            </div>
            <div className="technical-single">
              <SiBootstrap size={40} color="#563d7c" />
              <p> BOOTSTRAP</p>
            </div>
          </div>
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
        <h2 className="section-title">GROWTH</h2>
        <p className="section-text">
          I think an excellent place to demonstrate growth is in my past
          experiences. The site below is my first ever, dating back to March
          15th, when I stopped working to learn to program full-time.
        </p>
        <div className="projects">
          <ProjectItem
            url="https://yeezick.github.io/emBusinessCard/"
            github="https://yeezick.github.io/emBusinessCard/"
            img={firstPage}
            title="E-Business Card"
            text="Before JavaScript, there was HTML and CSS. That's historically
                true and true for me too."
            techs="Vanilla CSS and HTML"
          />

          <ProjectItem
            url="https://yeezick.github.io/firstPortfolio/"
            github="https://yeezick.github.io/firstPortfolio/"
            img={firstPortfolio}
            title="First Portfolio"
            text="After being recommended by a friend, I ambitiously created a
                portfolio showcasing 4 other, more amateur projects."
            techs="Vanilla CSS, HTML, and Bootstrap"
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
