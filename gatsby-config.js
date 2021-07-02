const config = require("./data/SiteConfig");

module.exports = {
  siteMetadata: {
    themeColor: `#d83a68`,
    basePath: `/`,
    title: config.siteTitle,
    titleTemplate: "%s",
    description: config.siteDescription,
    siteUrl: config.siteUrl, // No trailing slash allowed!
    image: "${__dirname}/src/assets/favicon/favicon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@f64c362be9384b6",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
        start_url: "/",
        background_color: "#f9f9f9",
        theme_color: "#f7b64e",
        display: "standalone",
        icon: "src/assets/favicon/favicon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-emotion",
    "gatsby-plugin-top-layout",
  ],
};
