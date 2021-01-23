const config = require("./data/SiteConfig");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    titleTemplate: "",
    description: config.siteDescription,
    url: config.siteUrl, // No trailing slash allowed!
    siteUrl: config.siteUrl,
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
        icon: `${__dirname}/src/assets/favicon/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: "Open Sans",
                variants: [`400`, `700`],
              },
            ],
          },
        },
      },
    },
  ],
};
