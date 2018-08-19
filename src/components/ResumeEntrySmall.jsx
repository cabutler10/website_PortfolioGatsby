import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  secondary: { fontSize: 14, color: theme.status.greyDk },
  secondary2: { fontSize: 12, color: theme.status.greyDk },
  primary: {
    fontWeight: 600,
    color: theme.status.greyDk
  },
  right: {
    float: "right",
    fontSize: 12,
    fontWeight: 500
  }
});

class ResumeEntrySmall extends Component {
  render() {
    let { title, company, date, listItems, classes } = this.props;
    return (
      <List>
        <ListItem disableGutters>
          <ListItemText
            classes={{
              secondary: classes.secondary,
              primary: classes.primary
            }}
            primary={
              <Fragment>
                {title}
                {date && <span className={classes.right}>{date}</span>}
              </Fragment>
            }
            secondary={company}
          />
        </ListItem>
        {listItems &&
          listItems.map(elem => (
            <ListItem key={elem} disableGutters>
              <ListItemText
                classes={{
                  secondary: classes.secondary2
                }}
                secondary={elem}
              />
            </ListItem>
          ))}
      </List>
    );
  }
}

ResumeEntrySmall.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(ResumeEntrySmall));
