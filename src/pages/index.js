import * as React from "react"
import About from "../components/about/About"
import Expertise from "../components/expertise/Expertise"
import Hero from "../components/hero/Hero"
import Highlights from "../components/highlights/Highlights"
import Layout from "../components/layout"
import Overview from "../components/overview/Overview"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Overview />
    <Expertise />
    <Highlights />
    <About />
  </Layout>
)

export default IndexPage
