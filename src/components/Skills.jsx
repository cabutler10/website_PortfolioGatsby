import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BulletIcon from "@material-ui/icons/Stop";
import CodeIcon from "@material-ui/icons/Code";
import ToolIcon from "@material-ui/icons/Palette";
import ChartIcon from "@material-ui/icons/BarChart";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.status.trueWhite,
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      padding: 45
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingTop: 45
  },
  imgContainer: {
    flexBasis: "100%",
    paddingBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
      paddingBottom: 0
    }
  },
  textContainer: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexBasis: "50%"
    }
  },
  textFirst: {
    paddingBottom: 5
  },
  text: {
    paddingBottom: 5,
    paddingTop: 15
  },
  subtitle1: {
    marginTop: 15,
    marginBottom: 15,
    letterSpacing: 3
  },
  progress: {
    backgroundColor: theme.status.grey
  },
  progressBar: {
    opacity: 0.8
  },
  icon: {
    verticalAlign: "middle",
    marginRight: 15
  },
  flexItem: {
    flexBasis: "30%"
  },
  listItem: {
    paddingLeft: 30,
    paddingBottom: 0
  },
  bullet: { color: theme.status.black, width: 10, height: 10 },
  noPadding: {
    padding: 0
  },
  secondary: {
    color: theme.status.grey.black
  }
}));

function Skills() {
  const classes = useStyles();

  let progress = [
    { text: "statistics", value: 79 },
    { text: "web engineering", value: 85 },
    { text: "UX / accessibility", value: 55 },
    { text: "lecturing", value: 62 },
    { text: "management", value: 25 }
  ];
  const develop = [
    "React",
    "Gatsby",
    "Redux",
    "Material-UI",
    "Bootstrap",
    "Styled Components"
  ];
  const lang = ["Javascript", "R", "Python", "GraphQL"];
  const chart = ["Highcharts", "ggplot2", "Shiny", "D3.js"];
  return (
    <div className={classes.root}>
      <Typography
        variant="subtitle1"
        color="primary"
        align="center"
        className={classes.subtitle1}
      >
        expertise
      </Typography>
      <div className={classes.container}>
        <Hidden smDown>
          <div className={classes.textContainer}>
            <div className={classes.flexItem}>
              <Typography variant="subtitle1">
                <CodeIcon className={classes.icon} />
                Languages
              </Typography>
              <List>
                {lang.map(elem => (
                  <ListItem key={elem} dense className={classes.listItem}>
                    <ListItemIcon>
                      <BulletIcon className={classes.bullet} />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        root: classes.noPadding
                      }}
                      primary={elem}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
            <div className={classes.flexItem}>
              <Typography variant="subtitle1">
                <ToolIcon className={classes.icon} />
                Development
              </Typography>
              {develop.map(elem => (
                <ListItem key={elem} dense className={classes.listItem}>
                  <ListItemIcon>
                    <BulletIcon className={classes.bullet} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      root: classes.noPadding
                    }}
                    primary={elem}
                  />
                </ListItem>
              ))}
            </div>
            <div className={classes.flexItem}>
              <Typography variant="subtitle1">
                <ChartIcon className={classes.icon} />
                Charting
              </Typography>
              {chart.map(elem => (
                <ListItem key={elem} dense className={classes.listItem}>
                  <ListItemIcon>
                    <BulletIcon className={classes.bullet} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      root: classes.noPadding
                    }}
                    primary={elem}
                  />
                </ListItem>
              ))}
            </div>
          </div>
        </Hidden>
        <div className={classes.imgContainer}>
          {progress.map((elem, idx) => (
            <Fragment key={idx}>
              <Typography
                className={idx === 0 ? classes.textFirst : classes.text}
              >
                {elem.text}
              </Typography>
              <LinearProgress
                variant="determinate"
                className={classes.progress}
                color="primary"
                value={elem.value}
                classes={{ bar1Determinate: classes.progressBar }}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {
  classes: PropTypes.object
};

export default Skills;
