import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "../images/icons/icons";

const styles = theme => ({
  container: {
    position: "absolute",
    background: theme.status.black,
    left: 0,
    bottom: 40,
    right: 0,
    padding: 15,
    zIndex: 2
  },
  buttonContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 2
  },
  bold: {
    fontWeight: 600,
    letterSpacing: 5,
    fontSize: 24,
    color: theme.status.white
  },
  big: {
    fontSize: 30,
    color: theme.status.white
  },
  text: {
    textTransform: "lowercase",
    fontSize: 12,
    letterSpacing: 3,
    color: theme.status.white
  },
  mobileText: {
    position: "absolute",
    left: 0,
    zIndex: 1000,
    top: "37%",
    fontSize: 72,
    color: theme.palette.secondary.main,
    fontFamily: "'Homemade Apple'"
  },
  button: {
    width: "100%"
  },
  icon: {
    width: 18,
    height: 18,
    fill: theme.status.black
  }
});

class SplashMobile extends Component {
  render() {
    let { classes } = this.props;

    return (
      <Fragment>
        <Typography variant="subheading" className={classes.mobileText}>
          Developer
        </Typography>
        <div className={classes.container}>
          <Typography variant="subheading" className={classes.text}>
            Hello, I am
          </Typography>
          <Typography variant="display2" className={classes.bold}>
            <span className={classes.big}>A</span>
            LYSSA <span className={classes.big}>B</span>
            UTLER
          </Typography>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            aria-label="linkedin"
            className={classes.button}
            href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
            target="_blank"
            rel="noopener"
            disableFocusRipple
            disableRipple
          >
            <LinkedinIcon className={classes.icon} />
          </Button>
          <Button
            aria-label="github"
            className={classes.button}
            href="https://github.com/cabutler10"
            target="_blank"
            rel="noopener"
            disableFocusRipple
            disableRipple
          >
            <GithubIcon className={classes.icon} />
          </Button>
          <Button
            aria-label="instagram"
            className={classes.button}
            href="https://www.instagram.com/cabutler10/"
            target="_blank"
            rel="noopener"
            disableFocusRipple
            disableRipple
          >
            <InstagramIcon className={classes.icon} />
          </Button>
        </div>
      </Fragment>
    );
  }
}

SplashMobile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(SplashMobile));
