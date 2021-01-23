import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BulletIcon from "@material-ui/icons/Stop";

const useStyles = makeStyles(theme => ({
  secondary: { fontSize: 14, color: theme.status.grayDk },
  secondary2: { fontSize: 12, color: theme.status.grayDk, padding: 0 },
  primary: {
    fontWeight: 600,
    color: theme.status.grayDk
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
}));

function ResumeEntry({ title, company, date, listItems, noPadding }) {
  const classes = useStyles();

  return (
    <List>
      <ListItem disableGutters className={noPadding ? classes.noPadding : null}>
        <ListItemText
          classes={{
            secondary: classes.secondary,
            primary: classes.primary
          }}
          primary={
            title ? (
              <>
                {title}
                {date && <span className={classes.right}>{date}</span>}
              </>
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

ResumeEntry.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.string,
  listItems: PropTypes.array,
  noPadding: PropTypes.bool
};

export default ResumeEntry;
