const config = require("./data/SiteConfig");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    description: config.siteDescription,
    siteUrl: config.siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/web`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: config.siteGATrackingID
    //   }
    // },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: "/src",
        background_color: "#f9f9f9",
        theme_color: "#f7b64e",
        display: "minimal-ui",
        icon: "./src/images/favicon/favicon.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`
  ]
};
