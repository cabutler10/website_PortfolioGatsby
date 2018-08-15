import React, { Fragment, Component } from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Splash from "../components/Splash";
import Interests from "../components/Interests";
import About from "../components/About";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Layout from "../layouts/layout";

import "../utils/index";

class Index extends Component {
  state = {
    page: "home"
  };

  handlePageChange = page => {
    this.setState({ page });
  };

  render() {
    const { data } = this.props;
    const { page } = this.state;
    const profileImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("profile")
    );
    const backgroundImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("background")
    );

    return (
      <Layout>
        <Header handlePageChange={this.handlePageChange} />
        {page === "home" && (
          <Fragment>
            <Splash img={backgroundImg} />
            <Interests />
            <About img={profileImg} />
          </Fragment>
        )}
        {page === "resume" && (
          <Fragment>
            <Resume />
          </Fragment>
        )}
        <Footer />
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

// export const pageQuery = graphql`
//   query ImageQuery {
//     profileImage: imageSharp(id: { regex: "/profile/" }) {
//       sizes(maxWidth: 1240) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//     backgroundImage: imageSharp(id: { regex: "/background/" }) {
//       sizes(maxWidth: 1240) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `;
