import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

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
    marginRight: 15
  },
  toolbarRoot: {
    justifyContent: "space-between"
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: theme.status.greyLt
  }
});

class Header extends Component {
  state = {
    isOpen: false
  };
  handleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { classes } = this.props;
    const links = ["/", "/Resume/"]; //"porfolio","photo","contact"
    const linkLabels = ["home", "resume"];
    return (
      <AppBar position="static" className={classes.appbar}>
        <Toolbar
          classes={{
            root: classes.toolbarRoot,
            gutters: classes.toolbarGutters
          }}
        >
          <Typography variant="title" color="primary">
            A.B
          </Typography>
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
