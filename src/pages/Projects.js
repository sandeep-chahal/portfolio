import React from "react"
import projectsData from "../content/projects_data.json"
import Project from "../components/Project"

export default function Projects() {
  return (
    <>
      <div className="project-wrapper">
        <h1>Projects</h1>
        <div className="projects-list">
          {projectsData.map(project => (
            <Project {...project} />
          ))}
        </div>
        <div className="more-msg">
          Click{" "}
          <a target="_blank" href="https://github.com/sandeep-chahal">
            here
          </a>{" "}
          to see all projects
        </div>
      </div>
    </>
  )
}
