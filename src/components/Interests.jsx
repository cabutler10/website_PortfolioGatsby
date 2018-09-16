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
    paddingTop: 60
  },
  iconContainer: {
    flexBasis: "30%"
  },
  textContainer: {
    flexBasis: "60%"
  },
  paddingLeft: {
    borderTop: "1px solid",
    borderColor: theme.status.greyDk,
    paddingTop: 45,
    lineHeight: 2
  },
  paddingRight: {
    borderTop: "1px solid",
    borderColor: theme.status.greyDk,
    paddingTop: 45,
    lineHeight: 2
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
    let { img, classes } = this.props;

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
            <Img fluid={img[0].node.fluid} alt="" className={classes.img} />
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
            <Img fluid={img[1].node.fluid} alt="" className={classes.img} />
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <Img fluid={img[2].node.fluid} alt="" className={classes.img} />
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

export default withStyles(styles)(Interests);

/* <div className={classes.iconContainer}>
  <div className={classes.boxContainer}>
    <div className={classnames(classes.box, classes.blue2)}>
      <CodeIcon className={classes.icon} />
    </div>
  </div>
</div>; */
