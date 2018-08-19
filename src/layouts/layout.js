import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {
  render() {
    const { img, children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer img={img} />
      </div>
    );
  }
}

export default Layout;
