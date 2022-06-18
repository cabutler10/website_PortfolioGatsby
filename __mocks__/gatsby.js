const React = require("react")
const gatsby = jest.requireActual("gatsby")
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => {
    // When component calls useStaticQuery(...), this result will be returned
    return {
      site: {
        siteMetadata: {
          defaultTitle: "Jane Doe Blog",
          titleTemplate: "%s · Jane Doe",
          defaultDescription: "Blog description.",
          siteUrl: "https://someblog.com",
          defaultImage: "/images/profile.png",
        },
      },
    }
  }),
}
