module.exports = {
  siteMetadata: {
    title: `Butler Web Development`,
    description: `A personal website for Alyssa Butler`,
    author: `Alyssa Butler`,
    siteUrl: `https://github.com/cabutler10/website_PortfolioGatsby`,
  },
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-mui-emotion",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `butler-web-development`,
        short_name: `butler-web-development`,
        start_url: `/`,
        background_color: `#00274e`,
        theme_color: `#e0e0e0`,
        display: `minimal-ui`,
        icon: `src/images/b.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
