import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby-theme-material-ui";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowIcon from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "../assets/icons/icons";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 200,
  },
  text: {
    textTransform: "uppercase",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  link: {
    color: theme.status.grayDk,
  },
  icon: {
    color: theme.status.gray,
    marginRight: 15,
  },
  button: {
    width: "100%",
    padding: 0,
  },
  iconSocial: {
    width: 18,
    height: 18,
    fill: theme.status.black,
  },
}));

function MobileHeaderList({ links }) {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <List component="nav">
        <Link to="/" className={classes.link}>
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary="home"
            />
            <ArrowIcon className={classes.icon} />
          </ListItem>
        </Link>
        {links.map((link, idx) => (
          <Link
            to={`/${link}/`}
            key={`mobileLink_${link}`}
            className={classes.link}
          >
            <ListItem button divider dense>
              <ListItemText
                disableTypography
                className={classes.text}
                primary={link}
              />
              <ArrowIcon className={classes.icon} />
            </ListItem>
          </Link>
        ))}
        <Button
          aria-label="linkedin"
          className={classes.button}
          href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
          target="_blank"
          rel="noopener noreferrer"
          disableFocusRipple
          disableRipple
        >
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary={<LinkedinIcon className={classes.iconSocial} />}
            />

            <ArrowIcon className={classes.icon} />
          </ListItem>
        </Button>
        <Button
          aria-label="github"
          className={classes.button}
          href="https://github.com/cabutler10"
          target="_blank"
          rel="noopener noreferrer"
          disableFocusRipple
          disableRipple
        >
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary={<GithubIcon className={classes.iconSocial} />}
            />

            <ArrowIcon className={classes.icon} />
          </ListItem>
        </Button>
        <Button
          aria-label="instagram"
          className={classes.button}
          href="https://www.instagram.com/cabutler10/"
          target="_blank"
          rel="noopener noreferrer"
          disableFocusRipple
          disableRipple
        >
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary={<InstagramIcon className={classes.iconSocial} />}
            />

            <ArrowIcon className={classes.icon} />
          </ListItem>
        </Button>
      </List>
    </div>
  );
}

MobileHeaderList.propTypes = {
  classes: PropTypes.object,
  links: PropTypes.array.isRequired,
};

export default MobileHeaderList;
