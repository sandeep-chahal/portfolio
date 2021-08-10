import React from "react"
import Layout from "../components/layout"
import "../styles/home.scss"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <h1>
          <div>
            Hey{" "}
            <span role="img" aria-label="hi">
              👋
            </span>
            ,
          </div>
          <div>
            I'm <span className="name">Sandeep Chahal</span>
          </div>
        </h1>
        <p>
          A <span className="highlight">full-stack developer</span>, passionate
          about technology, solving problems and eager to learn new things. I
          love writing{" "}
          <span className="highlight">clean and efficient code</span>. If you
          don't see green dots on github contributions chart that means am
          trying out new stuff.
        </p>
        <div className="social-links">
          <a target="_blank" href="https://github.com/sandeep-chahal">
            <img alt="github" src="github.svg" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sandeep-chahal-7678ab162/"
          >
            <img alt="linkedin" src="linkedin.svg" />
          </a>
          <a target="_blank" href="mailto:sandeepchahal573@gmail.com">
            <img alt="mail" src="mail.svg" />
          </a>
        </div>
        <div className="btns">
          <a
            href="https://docs.google.com/document/d/1Vxj2h9B1toIBewGXXL4lwOSxoNLTsFyP34s6K_k05Vo/edit?usp=sharing"
            target="_blank"
            className="outlined-btn"
          >
            Resume
          </a>
          <Link to="/Contact" className="filled-btn">
            Contact
          </Link>
        </div>
      </div>
    </Layout>
  )
}
