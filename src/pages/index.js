import React, { Component } from "react";
import { graphql } from "gatsby";

import Splash from "../components/Splash";
import Interests from "../components/Interests";
import Layout from "../layouts/layout";

import "../utils/index";

class Index extends Component {
  render() {
    const { data } = this.props;
    const backgroundImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("background")
    );
    const authorImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("author")
    );

    return (
      <Layout img={authorImg}>
        <Splash img={backgroundImg} />
        <Interests />
      </Layout>
    );
  }
}

export default Index;

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
