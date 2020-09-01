import React, { useState } from "react"
import { Link } from "gatsby"

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className={open ? "open mobile-nav" : "mobile-nav"}>
      <div className="menu">
        <Link activeClassName="active" to="/">
          Home
        </Link>
        <Link activeClassName="active" to="/Projects">
          Projects
        </Link>
        <Link activeClassName="active" to="/Contact">
          Contact
        </Link>
      </div>
      <div className="hamburger" onClick={() => setOpen(prev => !prev)}>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}
