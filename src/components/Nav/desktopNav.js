import React from "react"
import Link from "next/link"

export default () => {
  return (
    <nav className="desktop-nav">
      <h1>
        <Link href="/">
          <a>
            <span className="sign">&lt;</span>
            <span className="logo">S</span>
            <span className="sign">/&gt;</span>
          </a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/" activeClassName="active">
            <a>
              <img alt="home" src="home.svg" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Projects" activeClassName="active">
            <a>
              <img alt="projects" src="project.svg" />
              <span>Projects</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Contact" activeClassName="active">
            <a>
              <img alt="contact" src="user.svg" />
              <span>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
