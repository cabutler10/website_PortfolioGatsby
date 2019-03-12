import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
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
}));

function ResumeEntrySmall({ title, company, date, listItems }) {
  const classes = useStyles();

  return (
    <List>
      <ListItem disableGutters>
        <ListItemText
          classes={{
            secondary: classes.secondary,
            primary: classes.primary
          }}
          primary={
            <>
              {title}
              {date && <span className={classes.right}>{date}</span>}
            </>
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

ResumeEntrySmall.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.string,
  listItems: PropTypes.array,
  noPadding: PropTypes.bool
};

export default ResumeEntrySmall;
