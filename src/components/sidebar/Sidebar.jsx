import { useState } from "react";
import { SiLinkedin } from "react-icons/si";
import {
  RiCloseFill,
  RiGithubLine,
  RiTwitterLine,
} from "react-icons/ri";
import { HiOutlineAtSymbol } from "react-icons/hi";

import "./sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="sidebar-wrapper">
      <div className={showSidebar ? "sidebar active-sidebar" : "sidebar inactive-sidebar"} onClick={handleSidebar}>
        <p className="sidebar-label">CONTACT</p>
      </div>
      <div className={showSidebar ? "sidebar-menu active" : "sidebar-menu"}>
        <div className="sidebar-content">
          <div className="sidebar-toggle" onClick={handleSidebar}>
            <RiCloseFill size={30} />
          </div>
          <a
            href="https://github.com/yeezick"
            className="network-link"
            rel="noreferrer"
          >
            <RiGithubLine size={40} />
          </a>

          <a
            href="https://www.linkedin.com/in/erick-manrique/"
            className="network-link"
            rel="noreferrer"
          >
            <SiLinkedin size={40} />
          </a>

          <a
            href="https://twitter.com/erckmun"
            className="network-link"
            rel="noreferrer"
          >
            <RiTwitterLine size={40} />
          </a>

          <a
            href="mailto:erickmanriqpro@gmail.com?subject=Nice%20Webpage"
            className="network-link"
            rel="noreferrer"
          >
            <HiOutlineAtSymbol size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
