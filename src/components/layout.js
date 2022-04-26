import React from "react"
import Nav from "./Nav"
import Head from "next/head"

export default ({ children }) => {
  return (
    <div className="layout">
      <Head>
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
      </Head>
      <Nav />
      <main>{children}</main>
      <div className="bg-app-container">
        <video
          className="bg-element"
          // src="https://media.istockphoto.com/photos/flying-in-a-technological-abstract-space-with-luminous-neon-tubes-picture-id1209657199?k=20&m=1209657199&s=612x612&w=0&h=1eYw2eOr6ncBn6ROHx6Y1ytCHOGDoizSfIdPGjM35dw="
          autoPlay
          loop
          controlsList="nodownload"
          muted
        >
          <source src="./bg2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
