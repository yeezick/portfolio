import { useState } from "react"
import {SiLinkedin} from "react-icons/si"
import {RiCloseFill, RiGithubLine, RiTwitterLine, RiFileList3Line} from "react-icons/ri"
import {HiOutlineAtSymbol} from "react-icons/hi"

import "./sidebar.css"

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className="sidebar-wrapper">
    <div className="sidebar" onClick={handleSidebar}>
    <p className="sidebar-label">CONTACT ME</p>  
    </div>
    
    
      <div className={showSidebar ? "sidebar-menu active" : "sidebar-menu"}>
      <div className="sidebar-content" onClick={handleSidebar}>
        <div className="sidebar-toggle">
        <RiCloseFill size={40}/>
        </div>
         <RiGithubLine size={40}/>
        <SiLinkedin size={40}/>
        <RiTwitterLine size={40}/>
         <HiOutlineAtSymbol size={40}/>
    <RiFileList3Line size={40}/>
      </div>
      </div>
      </div>


  )
}

export default Sidebar
