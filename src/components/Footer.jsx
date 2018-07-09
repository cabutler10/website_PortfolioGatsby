import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    backgroundColor: theme.status.greyDk,
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center"
  },
  text: {
    fontSize: 12,
    textTransform: "capitalize"
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography
        variant="body1"
        color="textSecondary"
        align="center"
        className={classes.text}
      >
        &copy; Alyssa Butler | last updated may 2018 | imprint
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Footer));
