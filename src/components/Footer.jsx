import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";

import { InstagramIcon, GithubIcon, LinkedinIcon } from "../images/icons/icons";

const styles = theme => ({
  root: {
    backgroundColor: theme.status.grey,
    width: "100%"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: 15,
    paddingBottom: 15,
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 45
    }
  },
  copyright: {
    fontSize: 12,
    textTransform: "capitalize",
    paddingTop: 15,
    paddingBottom: 15
  },
  flexItem: {
    flexBasis: "100%",
    paddingTop: 15,
    [theme.breakpoints.up("md")]: {
      flexBasis: "35%",
      paddingTop: 0
    }
  },
  flexItemRight: {
    flexBasis: "45%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "20%"
    }
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    [theme.breakpoints.up("sm")]: {
      lineHeight: 2
    }
  },
  divider: {
    borderTop: `1px solid ${theme.status.greyDk}`
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
      paddingTop: 0
    }
  },
  textField: {
    margin: 0,
    width: "48%"
  },
  input: {
    fontSize: 12,
    border: "1px solid",
    paddingLeft: 20
  },
  button: {
    borderColor: theme.status.black,
    borderRadius: 0,
    minWidth: 0,
    padding: 8,
    marginRight: 0,
    [theme.breakpoints.up("sm")]: {
      marginRight: 15
    }
  },
  icon: {
    width: 18,
    height: 18,
    fill: theme.status.black
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 15,
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end"
    }
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "83%"
  },
  buttonSend: {
    borderRadius: 0,
    boxShadow: "none",
    marginTop: 15,
    color: theme.status.black,
    opacity: 0.8
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  }
});

class Footer extends Component {
  state = {
    email: "",
    name: "",
    message: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { img, classes } = this.props;
    const { email, name, message } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.flexItem}>
            <Typography className={classes.textHeading}>
              send me a message
            </Typography>
            <div className={classes.inputContainer}>
              <TextField
                id="name"
                className={classes.textField}
                InputProps={{
                  className: classes.input,
                  disableUnderline: true
                }}
                value={name}
                placeholder="name"
                onChange={this.handleChange("name")}
                margin="normal"
              />
              <TextField
                id="email"
                className={classes.textField}
                InputProps={{
                  className: classes.input,
                  disableUnderline: true
                }}
                value={email}
                placeholder="email"
                onChange={this.handleChange("email")}
                margin="normal"
              />
            </div>
            <TextField
              id="message"
              className={classes.textMessage}
              InputProps={{ className: classes.input, disableUnderline: true }}
              value={message}
              placeholder="your message"
              onChange={this.handleChange("message")}
              margin="normal"
              fullWidth
              multiline
              rows="4"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonSend}
              fullWidth
            >
              Send
            </Button>
          </div>
          <Hidden smDown>
            <div className={classes.flexItem}>
              <Typography className={classes.textHeading}>about me</Typography>
              <Typography className={classes.text}>
                I am a Seattle native that is currently living in Munich,
                Germany. My personal interests include traveling, hiking,
                floating down rivers and pretending to be a photographer.
              </Typography>
              <div className={classes.iconContainer}>
                <Button
                  variant="outlined"
                  aria-label="linkedin"
                  className={classes.button}
                  href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
                  target="_blank"
                  rel="noopener"
                  disableFocusRipple
                  disableRipple
                >
                  <LinkedinIcon className={classes.icon} />
                </Button>
                <Button
                  variant="outlined"
                  aria-label="github"
                  className={classes.button}
                  href="https://github.com/cabutler10"
                  target="_blank"
                  rel="noopener"
                  disableFocusRipple
                  disableRipple
                >
                  <GithubIcon className={classes.icon} />
                </Button>
                <Button
                  variant="outlined"
                  aria-label="instagram"
                  className={classes.button}
                  href="https://www.instagram.com/cabutler10/"
                  target="_blank"
                  rel="noopener"
                  disableFocusRipple
                  disableRipple
                >
                  <InstagramIcon className={classes.icon} />
                </Button>
              </div>
            </div>
            <div className={classes.flexItemRight}>
              <Img fluid={img.node.fluid} alt="" className={classes.img} />
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.flexItem}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                about me
              </Typography>
              <div className={classes.flex}>
                <div className={classes.flexItemRight}>
                  <Img fluid={img.node.fluid} alt="" className={classes.img} />
                  <Hidden smUp>
                    <div className={classes.iconContainer}>
                      <Button
                        variant="outlined"
                        aria-label="linkedin"
                        className={classes.button}
                        href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
                        target="_blank"
                        rel="noopener"
                        disableFocusRipple
                        disableRipple
                      >
                        <LinkedinIcon className={classes.icon} />
                      </Button>
                      <Button
                        variant="outlined"
                        aria-label="github"
                        className={classes.button}
                        href="https://github.com/cabutler10"
                        target="_blank"
                        rel="noopener"
                        disableFocusRipple
                        disableRipple
                      >
                        <GithubIcon className={classes.icon} />
                      </Button>
                      <Button
                        variant="outlined"
                        aria-label="instagram"
                        className={classes.button}
                        href="https://www.instagram.com/cabutler10/"
                        target="_blank"
                        rel="noopener"
                        disableFocusRipple
                        disableRipple
                      >
                        <InstagramIcon className={classes.icon} />
                      </Button>
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
                      <Button
                        variant="outlined"
                        aria-label="linkedin"
                        className={classes.button}
                        href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
                        target="_blank"
                        rel="noopener"
                        disableFocusRipple
                        disableRipple
                      >
                        <LinkedinIcon className={classes.icon} />
                      </Button>
                      <Button
                        variant="outlined"
                        aria-label="github"
                        className={classes.button}
                        href="https://github.com/cabutler10"
                        target="_blank"
                        rel="noopener"
                        disableFocusRipple
                        disableRipple
                      >
                        <GithubIcon className={classes.icon} />
                      </Button>
                      <Button
                        variant="outlined"
                        aria-label="instagram"
                        className={classes.button}
                        href="https://www.instagram.com/cabutler10/"
                        target="_blank"
                        rel="noopener"
                        disableFocusRipple
                        disableRipple
                      >
                        <InstagramIcon className={classes.icon} />
                      </Button>
                    </div>
                  </Hidden>
                </div>
              </div>
            </div>
          </Hidden>
        </div>
        <div className={classes.divider} />
        <Typography
          variant="body1"
          align="center"
          className={classes.copyright}
        >
          &copy; Alyssa Butler | last updated may 2018 | imprint
        </Typography>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
