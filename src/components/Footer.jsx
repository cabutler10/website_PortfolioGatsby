import React, { useState } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Notification from "../UIcomponents/Snackbar";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "../images/icons/icons";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.status.grey,
    width: "100%"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      padding: 45
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170
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
  inputError: {
    fontSize: 12,
    border: `1px solid ${theme.palette.error.main}`,
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
    backgroundColor: theme.palette.primary.dark,
    color: theme.status.white,
    opacity: 0.8
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  },
  img: {
    height: 250
  }
}));

function Footer({ img }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);
  const [isNameValid, setNameValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);
  const [isTouched, setTouched] = useState(false);
  const [isSnackbarOpen, setSnackbar] = useState(false);
  const [notification, setNotification] = useState("success");
  const [isLoading, setLoading] = useState(false);

  const handleChange = name => event => {
    if (!isTouched) {
      setTouched(true);
    }
    if (name === "email") {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (!pattern.test(event.target.value)) {
        setEmailValid(false);
        setEmail(event.target.value);
      } else {
        setEmailValid(true);
        setEmail(event.target.value);
      }
    }
    if (name === "name") {
      if (event.target.value.length > 500) {
        setNameValid(false);
      } else {
        setNameValid(true);
        setName(event.target.value);
      }
    }
    if (name === "message") {
      if (event.target.value.length > 1000) {
        setMessageValid(false);
      } else {
        setMessageValid(true);
        setMessage(event.target.value);
      }
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    if (
      isEmailValid &&
      isMessageValid &&
      message.length > 0 &&
      isNameValid &&
      isTouched
    ) {
      fetch("https://cabutler10.prod.with-datafire.io/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message,
          emailAddress: email,
          name: name
        })
      })
        .then(response => {
          if (response.status === 200) {
            setSnackbar(true);
            setNotification("success");
            setLoading(false);
          } else {
            setSnackbar(true);
            setNotification("error");
            setLoading(false);
          }
        })
        .catch(err => {
          setSnackbar(true);
          setNotification("error");
          setLoading(false);
        });
    } else {
      setSnackbar(true);
      setNotification("warning");
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbar(false)}
      >
        <Notification
          onClose={() => setSnackbar(false)}
          variant={notification}
          message={
            notification === "success"
              ? "Your email has been sent successfully"
              : notification === "warning"
              ? "Please check the form has been filled out correctly"
              : "An error has occurred."
          }
        />
      </Snackbar>
      <div className={classes.container}>
        <div className={classes.flexItem}>
          <form noValidate autoComplete="off">
            <Typography className={classes.textHeading}>
              send me a message
            </Typography>
            <div className={classes.inputContainer}>
              <TextField
                id="name"
                name="name"
                className={classes.textField}
                InputProps={{
                  className: isNameValid ? classes.input : classes.inputError,
                  disableUnderline: true
                }}
                value={name}
                placeholder="name"
                onChange={handleChange("name")}
                margin="normal"
                required
              />
              <TextField
                id="email"
                name="email"
                type="email"
                className={classes.textField}
                InputProps={{
                  className: isEmailValid ? classes.input : classes.inputError,
                  disableUnderline: true
                }}
                value={email}
                placeholder="email"
                onChange={handleChange("email")}
                margin="normal"
                required
              />
            </div>
            <TextField
              id="message"
              name="message"
              className={classes.textMessage}
              InputProps={{
                className: isMessageValid ? classes.input : classes.inputError,
                disableUnderline: true
              }}
              value={message}
              placeholder="your message"
              onChange={handleChange("message")}
              margin="normal"
              fullWidth
              multiline
              rows="4"
              required
            />
            <Button
              variant="contained"
              className={classes.buttonSend}
              fullWidth
              onClick={handleSubmit}
            >
              {isLoading ? (
                <CircularProgress size={24} color="primary" />
              ) : (
                "send"
              )}
            </Button>
          </form>
        </div>
        <Hidden smDown>
          <div className={classes.flexItem}>
            <Typography className={classes.textHeading}>about me</Typography>
            <Typography className={classes.text}>
              I am a Seattle native that is currently living in Munich, Germany.
              My personal interests include traveling, hiking, floating down
              rivers and pretending to be a photographer.
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
            <Typography className={classes.textHeading}>about me</Typography>
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
      <Typography variant="body1" align="center" className={classes.copyright}>
        &copy; Alyssa Butler | 2018 | imprint
      </Typography>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object,
  img: PropTypes.object
};

export default Footer;
