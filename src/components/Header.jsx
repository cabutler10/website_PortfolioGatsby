import * as React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MobileHeaderList from "./MobileHeaderList";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Container from "./ui/Container";
import Link from "./ui/Link";

function Header() {
  const [drawer, setDrawer] = React.useState(false);

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
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Hidden mdUp>
            <Link to="/">
              <Button
                szie="large"
                sx={{ color: (theme) => theme.status.white }}
              >
                A.B
              </Button>
            </Link>

            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fill: (theme) => theme.status.white }} />
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
              <Button sx={{ color: (theme) => theme.status.white }}>A.B</Button>
            </Link>
            <span>
              {links.map((elem) => (
                <Link to={elem} key={`link_${elem}`}>
                  <Button sx={{ color: (theme) => theme.status.white }}>
                    {elem}
                  </Button>
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
