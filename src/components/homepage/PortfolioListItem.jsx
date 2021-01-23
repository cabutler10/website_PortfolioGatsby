import React from "react";
import { makeStyles } from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BulletIcon from "@material-ui/icons/Stop";

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: 0,
    minWidth: 25,
    paddingBottom: 0,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 10,
    },
  },
  bullet: { color: theme.status.black, width: 10, height: 10 },
  noPadding: {
    padding: 0,
  },
}));

export default function PortfolioListItem({ title }) {
  const classes = useStyles();

  return (
    <ListItem dense>
      <ListItemIcon className={classes.listItem}>
        <BulletIcon className={classes.bullet} />
      </ListItemIcon>
      <ListItemText
        classes={{
          root: classes.noPadding,
        }}
        primary={title}
      />
    </ListItem>
  );
}
