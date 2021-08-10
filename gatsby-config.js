/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  //   siteMetaData:{
  //       title:"Sandeep Chahal",
  //       description:"Sandeep Chahal portfolio. A full-satck developer, passionate about technology."
  //   },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500,
      },
    },
  ],
}
