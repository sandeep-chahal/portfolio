import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello world!
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  )
}
