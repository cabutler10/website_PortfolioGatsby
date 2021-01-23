import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby-theme-material-ui";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import MobileHeaderList from "./MobileHeaderList";
import Container from "./ui/Container";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    fill: theme.status.blue,
  },
}));

function Header() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  const links = ["resume"];

  return (
    <AppBar
      position="static"
      style={{ boxShadow: "none", borderBottom: "1px solid" }}
    >
      <Container padding="none">
        <Toolbar className={classes.toolbar}>
          <Hidden mdUp>
            <Link to="/" className={classes.link}>
              <Button szie="large">A.B</Button>
            </Link>

            <IconButton
              aria-label="menu"
              className={classes.mobileIconButton}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon className={classes.icon} />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={drawer}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <MobileHeaderList links={links} />
            </SwipeableDrawer>
          </Hidden>
          <Hidden mdDown>
            <Link to="/">
              <Button className={classes.button}>A.B</Button>
            </Link>
            <span>
              {links.map((elem) => (
                <Link to={elem} key={`link_${elem}`}>
                  <Button className={classes.button}>{elem}</Button>
                </Link>
              ))}
            </span>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object,
};

export default Header;
