import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Layout from "../layouts/layout";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 15,
    [theme.breakpoints.up("md")]: {
      padding: 60
    }
  }
}));

function Blog({ data }) {
  const classes = useStyles();

  const authorImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes("author")
  );
  return (
    <Layout img={authorImg}>
      <div className={classes.root}>
        <Typography>Blog</Typography>
      </div>
    </Layout>
  );
}

Blog.propTypes = {
  classes: PropTypes.object
};

export default Blog;

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
