module.exports = {
  siteTitle: "Alyssa Butler Portfolio", // Site title.
  author: "Alyssa Butler",
  siteTitleShort: "ABportfolio", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Alyssa Butler Portfolio", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://butlerstudies.com", // Domain of your website without pathPrefix.
  pathPrefix: "/abportfolio", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "A personal website of my work.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteGATrackingID: "UA-119856505-1", // Tracking code ID for google analytics.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/cabutler10",
      iconClassName: "github"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/cabutler10/",
      iconClassName: "instagram"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/alyssa-butler-b77054ab/",
      iconClassName: "linkedin"
    },
    {
      label: "Email",
      url: "mailto:ca.butler10@gmail.com",
      iconClassName: "envelope"
    }
  ],
  copyright: "Copyright © 2018 Alyssa Butler" // Copyright string for the footer of the website and RSS feed.
};
