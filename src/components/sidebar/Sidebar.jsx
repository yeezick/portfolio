import { useState } from "react"

import "sidebar.css"

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="sidebar">
    <p className="sidebar-label">CONTACT ME</p>  
    

      <div className="open-sidebar">
      <div className="sidebar-item">
        <p>I'm a link to contact or resume</p>
      </div>
      </div>

    </div>
  )
}

export default Sidebar
