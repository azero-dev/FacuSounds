module.exports = {
  siteMetadata: {
    title: `FacuSounds`,
    description: `FacuSounds (anti)System`,
    author: `Anonymous United in the Morning`,
    siteUrl: `https://bditm.es/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audios`,
        path: `${__dirname}/src/sounds`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `facusounds`,
        short_name: `facusounds`,
        start_url: `/`,
        background_color: `#cc0000`,
        display: `standalone`,
        icon: `src/images/FacuLogo.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
