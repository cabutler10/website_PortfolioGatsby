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
import Container from "../ui/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingTop: 45,
  },
  imgContainer: {
    flexBasis: "100%",
    paddingBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
      paddingBottom: 0,
    },
  },
  textContainer: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexBasis: "60%",
    },
  },
  textFirst: {
    paddingBottom: 5,
  },
  text: {
    paddingBottom: 5,
    paddingTop: 15,
  },
  subtitle1: {
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
    letterSpacing: 3,
  },
  progress: {
    backgroundColor: theme.status.gray,
  },
  progressBar: {
    opacity: 0.8,
  },
  icon: {
    verticalAlign: "middle",
    marginRight: 15,
  },
  flexItem: {
    flexBasis: "30%",
  },
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
  secondary: {
    color: theme.status.gray.black,
  },
}));

function Skills() {
  const classes = useStyles();

  let progress = [
    { text: "statistics", value: 79 },
    { text: "web engineering", value: 85 },
    { text: "UX / accessibility", value: 55 },
    { text: "lecturing", value: 62 },
    { text: "management", value: 25 },
  ];
  const develop = [
    "React",
    "Gatsby",
    "Redux",
    "Material-UI",
    "i18next",
    "MDX Markdown",
    "google maps",
  ];
  const lang = ["Javascript", "GraphQL", "Python", "R"];
  const chart = ["Highcharts", "ggplot2", "recharts", "apexcharts", "Shiny"];
  return (
    <Container background="white">
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.subtitle1}
      >
        Expertise
      </Typography>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div className={classes.flexItem}>
            <Typography>
              <Hidden smDown>
                <CodeIcon className={classes.icon} />
              </Hidden>
              Languages
            </Typography>
            <List>
              {lang.map((elem) => (
                <ListItem key={elem} dense>
                  <ListItemIcon className={classes.listItem}>
                    <BulletIcon className={classes.bullet} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      root: classes.noPadding,
                    }}
                    primary={elem}
                  />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.flexItem}>
            <Typography>
              <Hidden smDown>
                <ToolIcon className={classes.icon} />
              </Hidden>
              Development
            </Typography>
            {develop.map((elem) => (
              <ListItem key={elem} dense>
                <ListItemIcon className={classes.listItem}>
                  <BulletIcon className={classes.bullet} />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    root: classes.noPadding,
                  }}
                  primary={elem}
                />
              </ListItem>
            ))}
          </div>
          <div className={classes.flexItem}>
            <Typography>
              <Hidden smDown>
                <ChartIcon className={classes.icon} />
              </Hidden>
              Charting
            </Typography>
            {chart.map((elem) => (
              <ListItem key={elem} dense>
                <ListItemIcon className={classes.listItem}>
                  <BulletIcon className={classes.bullet} />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    root: classes.noPadding,
                  }}
                  primary={elem}
                />
              </ListItem>
            ))}
          </div>
        </div>

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
    </Container>
  );
}

Skills.propTypes = {
  classes: PropTypes.object,
};

export default Skills;
