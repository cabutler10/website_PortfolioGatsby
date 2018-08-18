import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";

import MobileHeaderList from "./MobileHeader";

const styles = theme => ({
  button: {
    color: theme.status.grey,
    marginRight: 15,
    width: 90,
    zIndex: 1100
  },
  toolbarPages: {
    justifyContent: "space-between"
  },
  toolbarRoot: {
    minHeight: 48
  },
  appbar: {
    boxShadow: "none"
  },
  appbarPages: {
    backgroundColor: theme.status.greyLt
  },
  appbarIndex: {
    backgroundColor: "transparent"
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
    const links = ["/Resume/", "/Blog/"]; //"porfolio","photo","contact"
    const linkLabels = ["resume", "blog"];
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
          <Link to="/">
            <Button className={classes.button}>A.B</Button>
          </Link>
          <Hidden mdUp>
            <IconButton
              aria-label="menu"
              className={classes.menuToggle}
              onClick={this.handleDrawer}
            >
              <MenuIcon />
            </IconButton>
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
          <Hidden smDown>
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

export default withRoot(withStyles(styles)(Header));
