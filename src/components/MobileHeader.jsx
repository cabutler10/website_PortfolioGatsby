import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowIcon from "@material-ui/icons/KeyboardArrowRight";

const styles = theme => ({
  list: {
    width: 200
  },
  text: {
    textTransform: "uppercase",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    color: theme.status.greyDk
  },
  icon: {
    color: theme.status.grey
  }
});

const MobileHeaderList = props => {
  const { links, handlePageChange, classes } = props;

  return (
    <div className={classes.list}>
      <List component="nav">
        {links.map(link => (
          <ListItem
            button
            divider
            dense
            key={`mobileLink_${link}`}
            onClick={() => {
              handlePageChange(link);
            }}
          >
            <ListItemText
              disableTypography
              className={classes.text}
              primary={link}
            />
            <ArrowIcon className={classes.icon} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

MobileHeaderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(MobileHeaderList));
