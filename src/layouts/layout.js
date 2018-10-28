import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import withRoot from "../withRoot";
class Layout extends Component {
  render() {
    const { img, handleContactSend, children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer img={img} handleContactSend={handleContactSend} />
      </div>
    );
  }
}

export default withRoot(Layout);
