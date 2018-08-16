import React, { Component } from "react";
import { graphql } from "gatsby";

import Splash from "../components/Splash";
import Interests from "../components/Interests";
import About from "../components/About";
import Layout from "../layouts/layout";

import "../utils/index";

class Index extends Component {
  render() {
    const { data } = this.props;
    const profileImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("profile")
    );
    const backgroundImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("background")
    );

    return (
      <Layout>
        <Splash img={backgroundImg} />
        <Interests />
        <About img={profileImg} />
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
