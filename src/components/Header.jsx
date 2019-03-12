import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "../UIcomponents/Link";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import MobileHeaderList from "./MobileHeaderList";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: 15,
    width: 60,
    zIndex: 1100,
    [theme.breakpoints.up("md")]: {
      width: "auto",
      fontSize: 20
    }
  },
  link: {
    color: theme.status.greyDk
  },
  toolbarRoot: {
    minHeight: 48,
    paddingRight: 0,
    paddingLeft: 0,
    alignItems: "stretch",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 45,
      paddingRight: 45,
      alignItems: "center",
      justifyContent: "flex-end"
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 170,
      paddingRight: 170,
      alignItems: "center"
    }
  },
  appbar: {
    boxShadow: "none"
  },
  appbarPages: {
    backgroundColor: theme.status.greyLt
  },
  appbarIndex: {
    backgroundColor: "transparent"
  },
  mobileButton: {
    flexBasis: "50%",
    borderRadius: 0
  },
  mobileIconButton: {
    flexBasis: "50%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0
  },
  icon: {
    fill: theme.status.white
  }
}));

function Header() {
  const classes = useStyles();
  const [isOpen, setDrawer] = useState(false);
  const [windowGlobal, setWindowGlobal] = useState(undefined);

  useEffect(() => {
    const windowGlobal = typeof window !== "undefined" && window;
    setWindowGlobal(windowGlobal);
  });

  const links = ["/Resume/"]; ///Blog/", porfolio","photo","contact"
  const linkLabels = ["resume"];
  const location = windowGlobal
    ? windowGlobal.location
    : { pathname: "/", hash: "" };
  return (
    <AppBar
      position="static"
      className={classnames(
        classes.appbar,
        location.pathname === "/" ? classes.appbarIndex : classes.appbarPages
      )}
    >
      <Toolbar
        classes={{
          root: classnames(
            classes.toolbarRoot,
            location.pathname === "/" ? null : classes.toolbarPages
          ),
          gutters: classes.toolbarGutters
        }}
      >
        <Hidden smUp>
          <Button className={classes.mobileButton}>
            <Link to="/" className={classes.link}>
              A.B
            </Link>
          </Button>
          <Button
            aria-label="menu"
            className={classes.mobileIconButton}
            onClick={() => setDrawer(isOpen ? false : true)}
          >
            <MenuIcon className={classes.icon} />
          </Button>
          <Drawer anchor="right" open={isOpen} onClose={() => setDrawer(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => setDrawer(isOpen ? false : true)}
              onKeyDown={() => setDrawer(isOpen ? false : true)}
            >
              <MobileHeaderList links={links} linkLabels={linkLabels} />
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Link to="/">
            <Button className={classes.button}>A.B</Button>
          </Link>
          <span>
            {links.map((link, idx) => (
              <Link to={link} key={`link_${link}`}>
                <Button className={classes.button}>{linkLabels[idx]}</Button>
              </Link>
            ))}
          </span>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object
};

export default Header;
