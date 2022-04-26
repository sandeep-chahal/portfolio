import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <>
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
          I am a full stack web and blockchain developer with a passion for
          learning new technologies. I am a quick learner and have a strong
          desire to stay up-to-date with the latest trends in web and blockchain
          development. I am also very curious and always looking for new ways to
          solve problems. I have a strong belief that blockchain technology will
          shape the future of the web and I am very excited to be part of this
          growing industry.
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
            href="https://docs.google.com/document/d/1MMQ8ii4K_CsObbgNmRFstVju4ly8Yi19IhiXGLQwurE/edit?usp=sharing"
            target="_blank"
            className="outlined-btn"
          >
            Resume
          </a>
          <Link href="/Contact">
            <a className="filled-btn">Contact</a>
          </Link>
        </div>
      </div>
    </>
  )
}
