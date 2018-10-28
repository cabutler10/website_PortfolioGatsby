import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BulletIcon from "@material-ui/icons/Stop";

const styles = theme => ({
  secondary: { fontSize: 14, color: theme.status.greyDk },
  secondary2: { fontSize: 12, color: theme.status.greyDk, padding: 0 },
  primary: {
    fontWeight: 600,
    color: theme.status.greyDk
  },
  right: {
    float: "right",
    fontWeight: 500,
    fontSize: 12
  },
  bullet: { width: 12, height: 12 },
  noPadding: {
    padding: 0
  }
});

class ResumeEntry extends Component {
  render() {
    let { title, company, date, listItems, noPadding, classes } = this.props;
    return (
      <List>
        <ListItem
          disableGutters
          className={noPadding ? classes.noPadding : null}
        >
          <ListItemText
            classes={{
              secondary: classes.secondary,
              primary: classes.primary
            }}
            primary={
              title ? (
                <Fragment>
                  {title}
                  {date && <span className={classes.right}>{date}</span>}
                </Fragment>
              ) : null
            }
            secondary={company}
          />
        </ListItem>
        {listItems &&
          listItems.map(elem => (
            <ListItem key={elem} className={classes.noPadding}>
              <ListItemIcon>
                <BulletIcon className={classes.bullet} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  root: classes.noPadding,
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

ResumeEntry.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResumeEntry);
