import React from "react"
import "../styles/index.scss"
import Nav from "./Nav"
import { Helmet } from "react-helmet"
import PageTransition from "gatsby-plugin-page-transitions"

export default ({ children }) => {
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sandeep Chahal</title>
        <meta
          name="description"
          content="Sandeep Chahal portfolio. A full-satck developer, passionate about technology."
        />
        <meta
          name="keywords"
          content="Sandeep, Sandeep Singh, Sandeep Chahal, Sandeep Singh Chahal"
        />
        <meta name="author" content="Sandeep Chahal" />
      </Helmet>
      <Nav />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
    </div>
  )
}
