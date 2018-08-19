import React, { Component } from "react";
import PropTypes from "prop-types";

import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import UploadIcon from "@material-ui/icons/CloudUpload";
import StatsIcon from "../images/stats.png";

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
    paddingTop: 60
  },
  iconContainer: {
    flexBasis: "40%",
    textAlign: "center"
  },
  textContainer: {
    flexBasis: "60%"
  },
  paddingLeft: {
    paddingLeft: 30
  },
  paddingRight: {
    paddingRight: 30
  },
  boxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  box: {
    width: "50%",
    background: theme.status.trueWhite,
    "&:before": {
      content: "''",
      float: "left",
      paddingTop: "100%"
    }
  },
  blue1: {
    background: theme.status.blue
  },
  blue2: {
    background: theme.status.blueDk
  },
  blue3: {
    background: theme.status.blueLt
  },
  icon: {
    width: 42,
    height: 42,
    marginTop: "25%"
  },
  heading: {
    paddingTop: 15,
    paddingBottom: 15,
    letterSpacing: 3,
    width: "100%"
  }
});

class Interests extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          variant="subheading"
          color="primary"
          align="center"
          className={classes.heading}
        >
          Statistics, Web Development, Teaching.
        </Typography>
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <img src={StatsIcon} alt="" />
          </div>
          <div className={classes.textContainer}>
            <Typography
              variant="body1"
              color="primary"
              className={classes.paddingLeft}
            >
              I am a Data Scientist with a strong interest in Web Development. I
              am fascinated with the idea of being able to make data driven
              decision making something everyone can use and understand by
              building online and mobile tools, charts, and tutorials.
            </Typography>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.textContainer}>
            <Typography
              variant="body1"
              color="primary"
              className={classes.paddingRight}
            >
              I am a strong believer that data analysis shouldn't be hard to do
              or to understand. My blog aims to share what I have learned about
              data analysis, web development, and online charting. With the
              technology available today, it has never been easier to turn data
              into something useful and accessible for everyone.
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <div className={classes.boxContainer}>
              <div className={classnames(classes.box, classes.blue2)}>
                <CodeIcon className={classes.icon} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <div className={classes.boxContainer}>
              <div className={classnames(classes.box, classes.blue3)}>
                <UploadIcon className={classes.icon} />
              </div>
            </div>
          </div>
          <div className={classes.textContainer}>
            <Typography
              variant="body1"
              color="primary"
              className={classes.paddingLeft}
            >
              My background is in applied mathematics for biological research. I
              fell into front end web development a few years ago and I quickly
              realized how important embracing this technology could be. What
              good is data analysis if it sits buried in lengthly articles that
              don't get read? What I love about web development is that is
              provides an opportunty for data analysis to be something everyone
              can use.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

Interests.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Interests));

/* <div className={classes.iconContainer}>
  <div className={classes.boxContainer}>
    <div className={classnames(classes.box, classes.blue2)}>
      <CodeIcon className={classes.icon} />
    </div>
  </div>
</div>; */
