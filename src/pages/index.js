import React, { Fragment, Component } from "react";
import Header from "../components/Header";
import Splash from "../components/Splash";
import Interests from "../components/Interests";
import About from "../components/About";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Layout from "../layouts/layout";

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

    return (
      <Layout>
        <Header
          handlePageChange={this.handlePageChange}
          img={data.backgroundImage}
        />
        {page === "home" && (
          <Fragment>
            <Splash />
            <Interests />
            <About img={data.profileImage} />
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
  query ProfileImageQuery {
    profileImage: imageSharp(id: { regex: "/profile/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  query BackgroundImageQuery {
    backgroundImage: imageSharp(id: { regex: "/background/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
