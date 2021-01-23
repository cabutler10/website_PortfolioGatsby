import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Container from "../ui/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 45,
  },
  imgContainer: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 30,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      paddingBottom: 0,
    },
  },
  textContainer: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
  },
  img: {
    height: "100%",
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
    },
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
    marginTop: 15,
    marginBottom: 15,
    letterSpacing: 3,
    width: "100%",
  },
}));

export default function Interests() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "interests1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img2: file(relativePath: { eq: "interests2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Container background="gray">
      <Typography
        variant="subtitle1"
        color="primary"
        align="center"
        className={classes.subtitle1}
      >
        Data Scientist, Front End Web Developer
      </Typography>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <Hidden mdDown>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              alt="drawing of chart"
              className={classes.img}
            />
          </Hidden>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="keyboard"
            className={classes.img}
          />
        </div>
        <div className={classes.textContainer}>
          <Typography color="primary" className={classes.textFirst}>
            I am a Data Scientist with a strong interest in Web Development. I
            am fascinated with the idea of being able to make data driven
            decision making something everyone can use and understand by
            building online and mobile tools, charts, and tutorials.
          </Typography>
          <Typography color="primary" className={classes.textLast}>
            I am a strong believer that data analyses shouldn't be hard to do or
            to understand. What good is data analysis if it sits buried in
            lengthy articles that don't get read? What I love about Web
            Development is that is provides an opportunity for data analyses to
            be something everyone can use.
          </Typography>
        </div>
      </div>
    </Container>
  );
}
