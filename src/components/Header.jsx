import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";

import MobileHeaderList from "./MobileHeaderList";

const styles = theme => ({
  button: {
    color: theme.status.greyDk,
    marginRight: 15,
    width: 60,
    zIndex: 1100,
    [theme.breakpoints.up("md")]: {
      width: 90
    }
  },
  toolbarRoot: {
    minHeight: 48,
    paddingRight: 0,
    paddingLeft: 0,
    alignItems: "stretch",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 40,
      paddingRight: 40,
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
    backgroundColor: theme.status.black,
    borderRadius: 0
  },
  icon: {
    fill: theme.status.white
  }
});

class Header extends Component {
  state = {
    isOpen: false,
    windowGlobal: undefined
  };

  componentDidMount() {
    const windowGlobal = typeof window !== "undefined" && window;
    this.setState({
      windowGlobal
    });
  }

  handleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { classes } = this.props;
    const links = ["/Resume/"]; ///Blog/", porfolio","photo","contact"
    const linkLabels = ["resume"];
    const { windowGlobal } = this.state;
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
              <Link to="/">A.B</Link>
            </Button>
            <Button
              aria-label="menu"
              className={classes.mobileIconButton}
              onClick={this.handleDrawer}
            >
              <MenuIcon className={classes.icon} />
            </Button>
            <Drawer
              anchor="right"
              open={this.state.isOpen}
              onClose={this.handleDrawer}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.handleDrawer}
                onKeyDown={this.handleDrawer}
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
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
