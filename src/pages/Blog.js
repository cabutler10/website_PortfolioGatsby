import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";

import Layout from "../layouts/layout";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 15,
    [theme.breakpoints.up("md")]: {
      padding: 60
    }
  }
});

class Blog extends Component {
  render() {
    let { classes } = this.props;
    return (
      <Layout>
        <div className={classes.root}>
          <Typography>Blog</Typography>
        </div>
      </Layout>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Blog));