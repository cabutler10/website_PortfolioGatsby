import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: 15,
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: "10%",
      paddingRight: "10%"
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 45
  },
  imgContainer: {
    flexBasis: "40%",
    display: "flex",
    justifyContent: "space-between"
  },
  textContainer: {
    flexBasis: "50%"
  },
  img: {
    height: "100%",
    flexBasis: "45%"
  },
  textFirst: {
    paddingBottom: 30,
    lineHeight: 1.7,
    fontWeight: 600
  },
  text: {
    paddingBottom: 30,
    lineHeight: 1.7
  },
  textLast: {
    lineHeight: 1.7
  },
  subtitle1: {
    paddingTop: 15,
    paddingBottom: 15,
    letterSpacing: 3,
    width: "35%",
    margin: "auto",
    borderBottom: `1px solid ${theme.status.yellow}`
  }
});

class Skills extends Component {
  render() {
    let { img, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.textContainer}>
            <Typography
              variant="subtitle1"
              color="primary"
              align="center"
              className={classes.subtitle1}
            >
              Skills
            </Typography>
          </div>
          <div className={classes.imgContainer}>
            <Img fluid={img.node.fluid} alt="" className={classes.img} />
          </div>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skills);
