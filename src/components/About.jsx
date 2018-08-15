import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";

import Img from "gatsby-image";
import headshot from "../images//profile.jpg";

const styles = theme => ({
  root: {
    padding: 15,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      padding: 90
    }
  },
  title: {
    letterSpacing: 3,
    transform: "rotate(90deg)",
    WebkitTransform: "rotate(90deg)",
    MsTransform: "rotate(90deg)",
    OTransform: "rotate(90deg)",
    width: 240,
    textAlign: "right",
    transformOrigin: "left top 0"
  },
  textHeading: {
    textTransform: "uppercase",
    letterSpacing: 3,
    paddingTop: 30,
    paddingBottom: 30
  },
  body: {
    paddingTop: 30,
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
      marginLeft: 60
    }
  },
  img: {
    width: 300,
    height: 300,
    marginRight: 0,
    [theme.breakpoints.up("md")]: {
      marginRight: 60
    }
  },
  button: {
    padding: 8,
    minWidth: 36,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 5,
    [theme.breakpoints.up("md")]: {
      marginLeft: 60
    }
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  icon: {
    fill: theme.status.greyDk,
    width: 24,
    height: 24
  },
  col: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      width: "35%"
    }
  }
});

function LinkedinIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 448 512">
      <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z" />
    </SvgIcon>
  );
}
function GitIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 496 512">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </SvgIcon>
  );
}
function InstagramIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 448 512">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </SvgIcon>
  );
}

class About extends Component {
  render() {
    let { img, classes } = this.props;
    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <Typography
            variant="title"
            color="primary"
            className={classes.textHeading}
          >
            About
          </Typography>
        </Hidden>
        {/* <img src={headshot} className={classes.img} alt="" /> */}
        <Img sizes={img.sizes} className={classes.img} alt="" />

        <div className={classes.col}>
          <Hidden smDown>
            <Typography
              variant="title"
              color="primary"
              className={classes.title}
            >
              About Me
            </Typography>
          </Hidden>
          <Typography variant="body1" color="primary" className={classes.body}>
            I am a Data Scientist who currently spends all of my time doing
            Front End Web Development with React. I love the idea of being able
            to make statistics something everyone can use by building online
            tools and tutorials. <br /> <br /> My personal interests include
            hiking, floating down rivers, and pretending to be a wildlife
            photographer.
          </Typography>
          <span className={classes.buttonContainer}>
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
              <LinkedinIcon className={classes.icon} color="secondary" />
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
              <GitIcon className={classes.icon} color="secondary" />
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
              <InstagramIcon className={classes.icon} color="secondary" />
            </Button>
          </span>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(About));
