import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

class Layout extends Component {
  render() {
    const { img, handleContactSend, children } = this.props;
    return (
      <div>
        <SEO />
        <Header />
        {children}
        <Footer img={img} handleContactSend={handleContactSend} />
      </div>
    );
  }
}

export default Layout;
