module.exports = {
  siteMetadata: {
    title: `A.L.I - Dashboard`,
    description: `Bringing all of the necessary data to one point for ease of use and improved efficiency across the board.`,
    author: `@JordyYeoman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
