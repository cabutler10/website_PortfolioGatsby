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
    marginTop: 15,
    marginBottom: 15,
    letterSpacing: 3,
    width: "35%",
    margin: "auto",
    borderBottom: `1px solid ${theme.palette.primary.main}`
  }
});

class Interests extends Component {
  render() {
    let { img, classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography
          variant="subtitle1"
          color="primary"
          align="center"
          className={classes.subtitle1}
        >
          Statistics, Web Development, Teaching
        </Typography>
        <div className={classes.container}>
          <div className={classes.imgContainer}>
            <Img fluid={img[0].node.fluid} alt="" className={classes.img} />
            <Img fluid={img[1].node.fluid} alt="" className={classes.img} />
          </div>
          <div className={classes.textContainer}>
            <Typography color="primary" className={classes.textFirst}>
              I am a Data Scientist with a strong interest in Web Development. I
              am fascinated with the idea of being able to make data driven
              decision making something everyone can use and understand by
              building online and mobile tools, charts, and tutorials.
            </Typography>
            <Typography color="primary" className={classes.text}>
              I am a strong believer that data analysis shouldn't be hard to do
              or to understand. My blog aims to share what I have learned about
              data analysis, web development, and online charting. With the
              technology available today, it has never been easier to turn data
              into something useful and accessible for everyone.
            </Typography>
            <Typography color="primary" className={classes.textLast}>
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
