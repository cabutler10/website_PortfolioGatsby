import React from "react";
import Splash from "../components/homepage/Splash";
import Interests from "../components/homepage/Interests";
import Layout from "../components/Layout";
import Skills from "../components/homepage/Skills";
import Portfolio from "../components/homepage/Portfolio";

export default function Index({ location }) {
  return (
    <Layout location={location}>
      <Splash />
      <Interests />
      <Skills />
      <Portfolio />
    </Layout>
  );
}
