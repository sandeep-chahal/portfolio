import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <nav className="desktop-nav">
      <h1>
        <Link to="/">
          <span className="sign">&lt;</span>
          <span className="logo">S</span>
          <span className="sign">/&gt;</span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            <img alt="home" src="home.svg" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/Projects" activeClassName="active">
            <img alt="projects" src="project.svg" />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/Contact" activeClassName="active">
            <img alt="contact" src="user.svg" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
