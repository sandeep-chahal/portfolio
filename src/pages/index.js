import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      Hello world!
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
    </Layout>
  )
}
