import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import CodeIcon from "@material-ui/icons/Code";
import ToolIcon from "@material-ui/icons/Palette";
import StarIcon from "@material-ui/icons/Star";
import Container from "../ui/Container";
import PortfolioListItem from "./PortfolioListItem";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 60,
  },
  imgContainer: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
      paddingBottom: 0,
    },
  },
  reverse: {
    flexDirection: "column-reverse",
    flexWrap: "nowrap",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  skills: {
    display: "flex",
    justifyContent: "space-around",
  },
  textContainer: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "50%",
    },
  },
  img: {
    height: "100%",
    flexBasis: "100%",
  },
  textFirst: {
    paddingBottom: 30,
    lineHeight: 1.7,
    fontWeight: 600,
  },
  text: {
    paddingBottom: 30,
    lineHeight: 1.7,
  },
  textLast: {
    lineHeight: 1.7,
  },
  subtitle1: {
    marginBottom: 30,
    letterSpacing: 3,
    width: "100%",
  },
  link: {
    color: theme.palette.primary.main,
    paddingLeft: 5,
    paddingRight: 5,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  icon: {
    verticalAlign: "middle",
    marginRight: 15,
  },
  subtitle: {
    padding: 0,
    margin: 0,
    color: "#000",
  },
  linkImg: {
    width: "100%",
  },
}));

export default function Interests() {
  const classes = useStyles();

  return (
    <Container background="gray">
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.subtitle1}
        style={{ marginBottom: 10 }}
      >
        Highlighted Projects
      </Typography>
      <Typography
        variant="body1"
        align="center"
        className={classes.subtitle1}
        style={{ marginBottom: 60 }}
      >
        Please check out my
        <a
          className={classes.link}
          href="https://github.com/cabutler10"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        repository for a comprehensive view of my work.
      </Typography>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <a
            className={classes.linkImg}
            href="https://eisbach-riders.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              src="../../assets/eisbachRiders.png"
              alt="eisbach riders website"
              placeholder="blurred"
              quality={100}
            />
          </a>
        </div>
        <div className={classes.textContainer}>
          <a
            className={classes.link}
            href="https://eisbach-riders.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography
              variant="h5"
              className={classes.textFirst}
              style={{ paddingBottom: 5 }}
            >
              Eisbach Riders
            </Typography>
            <p className={classes.subtitle}>Brands Page</p>
          </a>
          <div className={classes.skills}>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <CodeIcon className={classes.icon} />
                </Hidden>
                Platform
              </Typography>
              <List>
                <PortfolioListItem title="Gatsby" />
                <PortfolioListItem title="WordPress CMS" />
              </List>
            </div>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <ToolIcon className={classes.icon} />
                </Hidden>
                Development
              </Typography>
              <List>
                <PortfolioListItem title="Material-UI" />
                <PortfolioListItem title="GraphQL" />
                <PortfolioListItem title="MDX Markdown" />
                <PortfolioListItem title="google-map-react" />
                <PortfolioListItem title="i18next" />
                <PortfolioListItem title="Recharts" />
              </List>
            </div>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <StarIcon className={classes.icon} />
                </Hidden>
                Highlights
              </Typography>
              <List>
                <PortfolioListItem title="UI/UX Designs" />
                <PortfolioListItem title="Google Map Integration" />
                <PortfolioListItem title="Wordpress CMS" />
              </List>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(classes.container, classes.reverse)}>
        <div className={classes.textContainer}>
          <a
            className={classes.link}
            href="https://secondwavesurfing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography
              variant="h5"
              className={classes.textFirst}
              style={{ paddingBottom: 5 }}
            >
              Second Wave Surfing
            </Typography>
            <p className={classes.subtitle}>E-Commerce Shop</p>
          </a>
          <div className={classes.skills}>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <CodeIcon className={classes.icon} />
                </Hidden>
                Platform
              </Typography>
              <List>
                <PortfolioListItem title="Gatsby" />
                <PortfolioListItem title="WordPress" />
              </List>
            </div>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <ToolIcon className={classes.icon} />
                </Hidden>
                Development
              </Typography>
              <List>
                <PortfolioListItem title="Material-UI" />
                <PortfolioListItem title="gatsby-source-wordpress-experimental" />
                <PortfolioListItem title="MDX Markdown" />
                <PortfolioListItem title="i18next" />
              </List>
            </div>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <StarIcon className={classes.icon} />
                </Hidden>
                Highlights
              </Typography>
              <List>
                <PortfolioListItem title="UI/UX Designs" />
                <PortfolioListItem title="Blog" />
                <PortfolioListItem title="WooCommerce Shop" />
              </List>
            </div>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <a
            className={classes.linkImg}
            href="https://secondwavesurfing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              src="../../assets/sws.png"
              alt="second wave surfing website"
              placeholder="blurred"
              quality={100}
            />
          </a>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <a
            className={classes.linkImg}
            href="https://houseafloat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              src="../../assets/houseAfloat.png"
              alt="house afloat website"
              placeholder="blurred"
              quality={100}
            />
          </a>
        </div>
        <div className={classes.textContainer}>
          <a
            className={classes.link}
            href="https://houseafloat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography
              variant="h5"
              className={classes.textFirst}
              style={{ paddingBottom: 5 }}
            >
              House Afloat
            </Typography>
            <p className={classes.subtitle}>Lifestyle Blog</p>
          </a>

          <div className={classes.skills}>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <CodeIcon className={classes.icon} />
                </Hidden>
                Platform
              </Typography>
              <List>
                <PortfolioListItem title="Gatsby" />
              </List>
            </div>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <StarIcon className={classes.icon} />
                </Hidden>
                Development
              </Typography>
              <List>
                <PortfolioListItem title="Material-UI" />
                <PortfolioListItem title="MDX Markdown" />
                <PortfolioListItem title="i18next" />
              </List>
            </div>
            <div className={classes.flexItem}>
              <Typography>
                <Hidden smDown>
                  <ToolIcon className={classes.icon} />
                </Hidden>
                Highlights
              </Typography>
              <List>
                <PortfolioListItem title="UI/UX Designs" />
                <PortfolioListItem title="Blog" />
              </List>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
