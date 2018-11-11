import React, { Component } from "react";
import { graphql } from "gatsby";

import Splash from "../components/Splash";
import Interests from "../components/Interests";
import Layout from "../layouts/layout";
import Skills from "../components/Skills";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "../utils/index";

class Index extends Component {
  state = {
    isSnackbarOpen: false
  };

  handleContactSend = () => {
    fetch("/api/form-submit-url", {
      method: "POST",
      body: this.state
    });
    this.setState({ isSnackbarOpen: true });
  };

  handleSnackbarClose = () => {
    this.setState({ isSnackbarOpen: false });
  };

  render() {
    const { data } = this.props;
    const { isSnackbarOpen } = this.state;
    const backgroundImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("background")
    );
    const authorImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("author")
    );
    const interestsImg1 = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("interests1")
    );
    const interestsImg2 = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("interests2")
    );

    return (
      <Layout img={authorImg} handleContactSend={this.handleContactSend}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={isSnackbarOpen}
          autoHideDuration={600}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Message Sent!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        <Splash img={backgroundImg} />
        <Interests img={[interestsImg1, interestsImg2]} />
        <Skills />
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
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
