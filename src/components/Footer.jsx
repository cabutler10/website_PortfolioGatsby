import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Link from "./ui/Link";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Container from "./ui/Container";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "../assets/icons/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  copyright: {
    fontSize: 14,
    textTransform: "capitalize",
    padding: 15,
  },
  flexItem: {
    flexBasis: "100%",
    paddingTop: 15,
    [theme.breakpoints.up("md")]: {
      flexBasis: "35%",
      paddingTop: 0,
    },
  },
  flexItemRight: {
    flexBasis: "45%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "20%",
    },
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    [theme.breakpoints.up("sm")]: {
      lineHeight: 2,
    },
  },
  divider: {
    borderTop: `1px solid ${theme.status.grayDk}`,
  },
  textHeading: {
    letterSpacing: 3,
    fontSize: 12,
    textTransform: "uppercase",
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingTop: 0,
    },
  },
  textField: {
    margin: 0,
    width: "48%",
  },
  input: {
    fontSize: 12,
    border: "1px solid",
    paddingLeft: 20,
  },
  inputError: {
    fontSize: 12,
    border: `1px solid ${theme.palette.error.main}`,
    paddingLeft: 20,
  },

  icon: {
    width: 32,
    height: 32,
    fill: theme.status.black,
    marginLeft: 15,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 15,
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "83%",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    height: 250,
  },
  bottomContainer: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Container background="dkGray">
        <footer className={classes.container}>
          <Hidden smDown>
            <div className={classes.flexItem}>
              <Typography className={classes.textHeading}>about me</Typography>
              <Typography className={classes.text}>
                I am a Seattle native that is currently living in Munich,
                Germany. My personal interests include traveling, hiking,
                floating down rivers and pretending to be a photographer.
              </Typography>
              <div className={classes.iconContainer}>
                <IconButton
                  aria-label="linkedin"
                  className={classes.button}
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
                  className={classes.button}
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
                  className={classes.button}
                  href="https://www.instagram.com/cabutler10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  disableFocusRipple
                  disableRipple
                >
                  <InstagramIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
            <div className={classes.flexItemRight}>
              <StaticImage
                src="../assets/author.jpg"
                alt="profile"
                placeholder="blurred"
                quality={100}
              />
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.flexItem}>
              <Typography className={classes.textHeading}>about me</Typography>
              <div className={classes.flex}>
                <div className={classes.flexItemRight}>
                  <StaticImage
                    src="../assets/author.jpg"
                    alt="profile"
                    placeholder="blurred"
                    quality={100}
                  />

                  <Hidden smUp>
                    <div className={classes.iconContainer}>
                      <IconButton
                        aria-label="linkedin"
                        className={classes.button}
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
                        className={classes.button}
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
                        className={classes.button}
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
                <div className={classes.flexItemRight}>
                  <Typography className={classes.text}>
                    I am a Seattle native that is currently living in Munich,
                    Germany. My personal interests include traveling, hiking,
                    floating down rivers and pretending to be a photographer.
                  </Typography>
                  <Hidden xsDown>
                    <div className={classes.iconContainer}>
                      <IconButton
                        aria-label="linkedin"
                        className={classes.button}
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
                        className={classes.button}
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
                        className={classes.button}
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
              </div>
            </div>
          </Hidden>
        </footer>
        <div className={classes.divider} />
      </Container>
      <div className={classes.bottomContainer}>
        <Typography
          variant="body1"
          align="center"
          className={classes.copyright}
          style={{ color: "#fff", fontWeight: 700 }}
        >
          &copy; Alyssa Butler
        </Typography>
        <Link
          style={{ color: "#fff", fontWeight: 700 }}
          className={classes.copyright}
          to="/credit"
        >
          photo credit
        </Link>
        <Link
          style={{ color: "#fff", fontWeight: 700 }}
          className={classes.copyright}
          to="/imprint"
        >
          imprint
        </Link>
      </div>
    </>
  );
}
