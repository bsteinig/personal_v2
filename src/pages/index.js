import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import About from "../components/About"


export default () => {
  return (
    <Layout>
      <Hero/>
      <About/>
    </Layout>
  )
}
