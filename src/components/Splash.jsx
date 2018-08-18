import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "../images/icons/icons";

const styles = theme => ({
  root: {
    height: 300,
    position: "relative",
    marginTop: -48,
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      height: 600
    }
  },
  img: {
    height: 300,
    [theme.breakpoints.up("md")]: {
      height: 600
    }
  },
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 2,
    paddingLeft: 15,
    paddingBottom: 15,
    [theme.breakpoints.up("md")]: {
      background: "none",
      paddingLeft: 60,
      paddingBottom: 60
    }
  },
  bold: {
    fontWeight: 600,
    letterSpacing: 5,
    fontSize: 24,
    paddingTop: 15,
    paddingBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 36
    }
  },
  big: {
    fontSize: 30,
    [theme.breakpoints.up("md")]: {
      fontSize: 48
    }
  },
  text: {
    textTransform: "uppercase",
    fontSize: 16,
    letterSpacing: 3,
    [theme.breakpoints.up("md")]: {
      fontSize: 20
    }
  },
  button: {
    padding: 8,
    minWidth: 36,
    marginRight: 30,
    marginTop: 15
  },
  icon: {
    width: 24,
    height: 24,
    fill: theme.status.blue
  },
  divider: {
    marginTop: 15
  }
});

class Splash extends Component {
  render() {
    let { img, classes } = this.props;

    return (
      <div className={classes.root}>
        <Img fluid={img.node.fluid} alt="" className={classes.img} />
        <div className={classes.container}>
          <Typography
            variant="subheading"
            color="primary"
            className={classes.text}
          >
            Hello, I am
          </Typography>
          <Typography
            variant="display2"
            color="primary"
            className={classes.bold}
          >
            <span className={classes.big}>A</span>
            LYSSA <span className={classes.big}>B</span>
            UTLER
          </Typography>
          <Typography
            variant="subheading"
            color="primary"
            className={classes.text}
          >
            DATA SCIENTIST & FRONTEND DEVELOPER
          </Typography>
          <Divider className={classes.divider} />
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
      </div>
    );
  }
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Splash));

{
  /* <div className={classes.root}>
<Img fluid={img.node.fluid} className={classes.img} alt="" />
<div className={classes.border}>
  <Typography
    variant="subheading"
    color="textSecondary"
    className={classes.text}
  >
    Hello, I am
  </Typography>
  <Typography
    variant="display2"
    color="textSecondary"
    className={classes.bold}
  >
    <span className={classes.big}>A</span>
    LYSSA <span className={classes.big}>B</span>
    UTLER
  </Typography>
  <Typography
    variant="subheading"
    color="textSecondary"
    className={classes.text}
  >
    DATA SCIENTIST & FRONTEND DEVELOPER
  </Typography>
  <Button
    color="primary"
    variant="raised"
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
    color="primary"
    variant="raised"
    aria-label="github"
    className={classes.button}
    href="https://github.com/cabutler10"
    target="_blank"
    rel="noopener"
    disableFocusRipple
    disableRipple
  >
    <GitIcon className={classes.icon} />
  </Button>
  <Button
    color="primary"
    variant="raised"
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
</div> */
}
