import { SiMailDotRu, SiTwitter, SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="creator">
        <h4 className="footer-title">From the Creator</h4>
        <p className="footer-text">
          Looking for a codebase? OctoCat may know the way...
          {/* I hope you enjoyed my site! Please don’t be afraid to let me know what
          you thought and I encourage you to connect or reach out to me! Last
          but not least, I wish you an excellent day and the best of luck on
          your own journey. */}
          {/* <br />
          If you’d llike to see the code for this site, OctoCat may know the
          way... */}
        </p>
      </div>
      <div className="network">
        {/* <h4 className="footer-title">Professional Network</h4> */}
        <div className="footer-links">
          <a
            href="https://github.com/yeezick"
            className="network-link"
            rel="noreferrer"
          >
            <GoMarkGithub size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/erick-manrique/"
            className="network-link"
            rel="noreferrer"
          >
            <SiLinkedin size={50} />
          </a>
          <a
            href="https://github.com/yeezick/portfolio"
            target="_blank"
            rel="noreferrer"
            alt="dignified winers repository link"
            className="network-octocat"
          >
            <img
              src="https://github.com/jessa-clark/dignified-winers/blob/development/client/public/img/octocat-kenobi.png?raw=true"
              alt="github 404 octo-cat"
            />
          </a>
          <a
            href="https://twitter.com/erckmun"
            className="network-link"
            rel="noreferrer"
          >
            <SiTwitter size={50} />
          </a>
          <a
            href="mailto:ramerick5@gmail.com?subject=Nice%20Webpage"
            className="network-link"
            rel="noreferrer"
          >
            <SiMailDotRu size={50} />
          </a>
        </div>
      </div>
      I am the footer
    </footer>
  );
};

export default Footer;
