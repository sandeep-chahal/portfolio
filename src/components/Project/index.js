import React from "react"

export default ({ title, summary, image, github, live }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <div className="about">
        <h2>{title}</h2>
        <p>{summary}</p>
        <div className="btns">
          {live && (
            <a target="_blank" href={live}>
              Live Demo
            </a>
          )}
          <a target="_blank" href={github}>
            Github
          </a>
        </div>
      </div>
    </div>
  )
}
