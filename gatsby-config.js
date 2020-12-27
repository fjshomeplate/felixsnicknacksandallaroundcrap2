const fetch = require(`node-fetch`)
const { createHttpLink } = require(`apollo-link-http`)

module.exports = {
  siteMetadata: {
    title: `Felix's Nick-Nacks and All-Around Crap`,
    description: `Gatsby Silly Site Challenge Entry of Felix`,
    author: `Felix Stuart`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
          endpoint: `https://api-us-east-1.graphcms.com/v2/ckifzth4esi4k01xogrfy5vce/master`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
