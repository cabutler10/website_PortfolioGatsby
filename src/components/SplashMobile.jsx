import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    position: "absolute",
    background: theme.palette.primary.main,
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
    fontSize: 69,
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
}));

function SplashMobile() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.mobileText}>Developer</Typography>
      <div className={classes.container}>
        <Typography className={classes.text}>Hello, I am</Typography>
        <Typography variant="h3" className={classes.bold}>
          <span className={classes.big}>A</span>
          LYSSA <span className={classes.big}>B</span>
          UTLER
        </Typography>
      </div>
    </>
  );
}

SplashMobile.propTypes = {
  classes: PropTypes.object
};

export default SplashMobile;
