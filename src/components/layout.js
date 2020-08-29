import React from "react"
import "../styles/index.scss"
import Nav from "./Nav"

export default ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
    </div>
  )
}
