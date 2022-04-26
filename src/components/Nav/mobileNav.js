import React, { useState } from "react"
import Link from "next/link"

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className={open ? "open mobile-nav" : "mobile-nav"}>
      <div className="menu">
        <Link activeClassName="active" href="/">
          <a>Home</a>
        </Link>
        <Link activeClassName="active" href="/Projects">
          <a>Projects</a>
        </Link>
        <Link activeClassName="active" href="/Contact">
          <a>Contact</a>
        </Link>
      </div>
      <div className="hamburger" onClick={() => setOpen(prev => !prev)}>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}
