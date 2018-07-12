import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import ShowchartIcon from "@material-ui/icons/ShowChart";
import UploadIcon from "@material-ui/icons/CloudUpload";

const styles = theme => ({
  root: {
    backgroundColor: theme.status.white,
    textAlign: "center",
    padding: 15,
    [theme.breakpoints.up("md")]: {
      padding: 60
    }
  },
  text: {
    textTransform: "uppercase",
    letterSpacing: 3,
    paddingBottom: 15
  },
  textHeading: {
    textTransform: "uppercase",
    letterSpacing: 3,
    paddingBottom: 0,
    paddingTop: 30,
    [theme.breakpoints.up("md")]: {
      paddingBottom: 15,
      paddingTop: 0
    }
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 0,
    [theme.breakpoints.up("md")]: {
      padding: 30
    }
  },
  box: {
    textAlign: "center",
    padding: 15,
    fontSize: 64,
    width: 300
  },
  icons: { fontSize: 72, color: theme.status.greyDk }
});

class Interests extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          variant="title"
          color="primary"
          className={classes.textHeading}
        >
          my interests
        </Typography>
        <div className={classes.flex}>
          <div className={classes.box}>
            <ShowchartIcon className={classes.icons} />
            <Typography
              variant="title"
              color="primary"
              className={classes.text}
            >
              statistics
            </Typography>
            <Typography variant="body1" color="primary">
              My background is in Applied Math for Biological Studies. I am
              confident in R and Python. Specifically, I am interested in using
              mathematics to support the decision making process.
            </Typography>
          </div>
          <div className={classes.box}>
            <CodeIcon className={classes.icons} />
            <Typography
              variant="title"
              color="primary"
              className={classes.text}
            >
              web development
            </Typography>
            <Typography variant="body1" color="primary">
              I have been working in Front End Web Development for the past 3
              years and love how well it compliments data analysis. I use React
              but have used Angular in the past.
            </Typography>
          </div>
          <div className={classes.box}>
            <UploadIcon className={classes.icons} />
            <Typography
              variant="title"
              color="primary"
              className={classes.text}
            >
              teaching
            </Typography>
            <Typography variant="body1" color="primary">
              I have experience teaching ages middle school through college in a
              classroom setting. Please check out my portfolio section for more
              information about the work I have done.
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
