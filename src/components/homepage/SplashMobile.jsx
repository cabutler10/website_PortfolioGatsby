import React from "react";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
} from "../../assets/icons/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    background: theme.palette.primary.main,
    left: 0,
    bottom: 100,
    right: 0,
    padding: 15,
    zIndex: 2,
  },
  iconContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  bold: {
    fontWeight: 600,
    margin: 0,
    letterSpacing: 5,
    fontSize: 28,
    color: theme.status.white,
    textAlign: "center",
  },
  big: {
    fontSize: 32,
    margin: 0,
    color: theme.status.white,
  },
  text: {
    margin: 0,
    textTransform: "lowercase",
    fontSize: 16,
    letterSpacing: 3,
    color: theme.status.white,
  },
  icon: {
    width: 32,
    height: 32,
    fill: theme.palette.primary.main,
  },
}));

export default function SplashMobile() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <p className={classes.text}>Hello, I am</p>
        <p className={classes.bold}>
          <span className={classes.big}>A</span>
          LYSSA <span className={classes.big}>B</span>
          UTLER
        </p>
      </div>
      <div className={classes.iconContainer}>
        <IconButton
          aria-label="linkedin"
          href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
          target="_blank"
          rel="noopener noreferrer"
          disableFocusRipple
          disableRipple
        >
          <LinkedinIcon className={classes.icon} />
        </IconButton>
        <IconButton
          aria-label="github"
          href="https://github.com/cabutler10"
          target="_blank"
          rel="noopener noreferrer"
          disableFocusRipple
          disableRipple
        >
          <GithubIcon className={classes.icon} />
        </IconButton>
        <IconButton
          aria-label="instagram"
          href="https://www.instagram.com/cabutler10/"
          target="_blank"
          rel="noopener noreferrer"
          disableFocusRipple
          disableRipple
        >
          <InstagramIcon className={classes.icon} />
        </IconButton>
      </div>
    </>
  );
}
