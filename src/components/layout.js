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
        <meta property="og:title" content="Sandeep Chahal's Portfolio" />
        <meta
          property="og:description"
          content="Sandeep Chahal portfolio. A full-satck developer, passionate about technology."
        />
        <meta
          property="og:image"
          content="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Tanned"
        />
      </Helmet>
      <Nav />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
    </div>
  )
}
