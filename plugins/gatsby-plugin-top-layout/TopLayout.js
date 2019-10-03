import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../src/theme";
import config from "../../data/SiteConfig";

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{config.siteTitle}</title>
        <html lang="en" />
        <meta
          name="viewport"
          description={config.description}
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" /> */}
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node
};
