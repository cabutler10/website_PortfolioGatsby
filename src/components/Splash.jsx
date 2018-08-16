import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {InstagramIcon, GithubIcon,LinkedinIcon } from "../images/icons/icons"

const styles = theme => ({
  root: {
    height: 300,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: 600
    }
  },
  border: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    border: "4px solid",
    background: "rgba(51,51,51,.5)",
    borderColor: theme.status.pink,
    [theme.breakpoints.up("md")]: {
      background: "none",
      marginLeft: 100,
      paddingTop: 30,
      paddingRight: 50,
      paddingBottom: 30,
      paddingLeft: 50
    }
  },
  bold: {
    fontWeight: 600,
    letterSpacing: 5,
    fontSize: 24,
    paddingTop: 15,
    paddingBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 51
    }
  },
  big: {
    fontSize: 36,
    [theme.breakpoints.up("md")]: {
      fontSize: 64
    }
  },
  text: {
    textTransform: "uppercase",
    fontSize: 18,
    letterSpacing: 3,
    [theme.breakpoints.up("md")]: {
      fontSize: 24
    }
  },
  button: {
    padding: 8,
    minWidth: 36,
    marginRight: 30,
    marginTop: 30
  },
  icon: {
    width: 24,
    height: 24,
    fill: theme.status.greyDk
  },
  img: {
    width: "100%"
  }
});

class Splash extends Component {
  render() {
    let { img, classes } = this.props;

    return <Img fluid={img.node.fluid} className={classes.img} alt="" />;
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
