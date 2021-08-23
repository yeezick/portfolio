import iNetwork from "../../images/iNetwork.png";
import homeio from "../../images/homeio.png";
import dignifiedWiners from "../../images/dignified-winers.png";
import "./projects.css";
const Projects = () => {


  return (
    <div className="projects">
      <div className="project-item">
        <a
          href="https://inetwork.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-img" src={iNetwork} alt="iNetwork" />
        </a>

        <div className="project-desc">
          <h3 className="project-title">iNetwork</h3>
          <p className="project-text">
            A casual online alternative to the formal resume, users can submit
            their information through a form to render an “business card.” Full
            CRUD functionality implemented via AirTable. <br/>
          </p>
            <p className="project-techs">
              Utilizes React with JS, AOS, and Bootstrap.
            </p>
          <a
            href="https://inetwork.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button"><span>Visit Site</span></button>
          </a>
          <a
                href="https://github.com/yeezick/iNetwork"
                target="_blank"
                rel="noreferrer"
              >
                <button className="project-button">
                  <span>Visit GitHub</span>
                </button>
              </a>
        </div>
      </div>

      <div className="project-item">
        <a href="https://homeio.netlify.app/" target="_blank" rel="noreferrer">
          <img className="project-img" src={homeio} alt="Home.io" />
        </a>

        <div className="project-desc">
          <h3 className="project-title">Home.io</h3>
          <p className="project-text">
            Conceptually forked from the iPhone widget screen, home.io gives
            signed-up users access to a personalized home screen rendering data
            from up to 7 API’s. <br/>
          </p>
            <p className="project-techs">
              Made with Ruby on Rails and React.
            </p>
          <a
            href="https://homeio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button"><span>Visit Site</span></button>
          </a>
          <a
                href="https://github.com/yeezick/home.io-v2"
                target="_blank"
                rel="noreferrer"
              >
                <button className="project-button">
                  <span>Visit GitHub</span>
                </button>
              </a>
        </div>
      </div>

      <div className="project-item">
        <a href="https://dignified-winers.netlify.app/" target="_blank" rel="noreferrer">
          <img className="project-img" src={dignifiedWiners} alt="Dignified Winers" />
        </a>

        <div className="project-desc">
          <h3 className="project-title">Dignified Winers</h3>
          <p className="project-text">
          Dignified Winers was collaboration between 4 talented developers and
            conceived as a request by a mock-client; a luxury magazine featuring
            ranked wines while allowing users to sign up and contribute. <br/>
          </p>
            <p className="project-techs">
            Developed with the MERN Stack, aided by Insomnia, Heroku, and
              Netlify.
            </p>
          <a
            href="https://dignified-winers.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button"><span>Visit Site</span></button>
          </a>
          <a
            href="https://github.com/jessa-clark/dignified-winers"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button"><span>Visit GitHub</span></button>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Projects;
