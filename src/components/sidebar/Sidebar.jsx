import { useState } from "react"

import "./sidebar.css"

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
    <div className="sidebar" onClick={handleSidebar}>
    <p className="sidebar-label">CONTACT ME</p>  
    </div>
    
    
      <div className={showSidebar ? "sidebar-menu active" : "sidebar-menu"}>
      <div className="sidebar-content" onClick={handleSidebar}>
        <div className="sidebar-toggle">
        <p>CLOSE</p>
        </div>
        <p className="sidebar-item">
         LinkedIn </p>
        <p className="sidebar-item">
         Resume </p>
      </div>
      </div>
      </>

    
  )
}

export default Sidebar
