import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
} from "../../assets/icons/icons";
import SplashMobile from "./SplashMobile";
import Container from "../ui/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 300,
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.up("sm")]: {
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      height: 500,
    },
  },
  img: {
    height: 200,
    [theme.breakpoints.up("sm")]: {
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      height: 500,
    },
  },
  container: {
    position: "absolute",
    zIndex: 2,
    background: "none",
    padding: 0,
    right: 15,
    bottom: 15,
    [theme.breakpoints.up("sm")]: {
      background: "none",
      right: "auto",
      left: 45,
      bottom: 60,
    },
    [theme.breakpoints.up("md")]: {
      background: "none",
      right: "auto",
      left: 100,
      bottom: 120,
    },
    [theme.breakpoints.up("lg")]: {
      background: "none",
      right: "auto",
      left: 170,
      bottom: 100,
    },
  },
  bold: {
    margin: 0,
    fontWeight: 600,
    letterSpacing: 5,
    paddingBottom: 15,
    paddingTop: 15,
    color: theme.palette.primary.main,
    fontSize: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: 32,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 40,
    },
  },
  big: {
    fontSize: 28,
    margin: 0,
    color: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      fontSize: 38,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 50,
    },
  },
  text: {
    textTransform: "lowercase",
    margin: 0,
    fontSize: 16,
    letterSpacing: 3,
    color: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 28,
    },
  },
  icon: {
    marginRight: 30,
    width: 32,
    height: 32,
    fill: theme.palette.primary.main,
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
  },
}));

export default function Splash() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Container padding="none" background="white">
      <div className={classes.root}>
        <Img
          fluid={data.img.childImageSharp.fluid}
          alt="bird flying"
          className={classes.img}
        />
        <Hidden smUp>
          <SplashMobile />
        </Hidden>
        <Hidden smDown>
          <div className={classes.container}>
            <p className={classes.text}>Hello, I am</p>
            <p className={classes.bold}>
              <span className={classes.big}>A</span>
              LYSSA <span className={classes.big}>B</span>
              UTLER
            </p>
            <p className={classes.text}>DATA SCIENTIST & FRONTEND DEVELOPER</p>
            <Divider className={classes.divider} />
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
        </Hidden>
      </div>
    </Container>
  );
}
