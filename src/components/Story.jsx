import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: 15,
    backgroundColor: theme.status.blue,
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: "10%",
      paddingRight: "10%"
    }
  },
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
  heading: {
    paddingTop: 15,
    paddingBottom: 15,
    letterSpacing: 2,
    width: "100%"
  },
  text: {
    paddingBottom: 15,
    flexBasis: "80%"
  }
});

class Story extends Component {
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography color="primary" align="center" className={classes.heading}>
          My Story
        </Typography>
        <div className={classes.container}>
          <Typography variant="body1" className={classes.text}>
            I am a Data Scientist with a strong interest in Web Development. I
            am fascinated with the idea of being able to make data driven
            decision making something everyone can use and understand by
            building online and mobile tools, charts, and tutorials.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            I am a strong believer that data analysis shouldn't be hard to do or
            to understand. My blog aims to share what I have learned about data
            analysis, web development, and online charting. With the technology
            available today, it has never been easier to turn data into
            something useful and accessible for everyone.
          </Typography>
          <Typography variant="body1">
            My background is in applied mathematics for biological research. I
            fell into front end web development a few years ago and I quickly
            realized how important embracing this technology could be. What good
            is data analysis if it sits buried in lengthly articles that don't
            get read? What I love about web development is that is provides an
            opportunty for data analysis to be something everyone can use.
          </Typography>
        </div>
      </div>
    );
  }
}

Story.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Story);
