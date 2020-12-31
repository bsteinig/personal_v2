import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"


export default ({data}) => {

  const {allStrapiProjects:{nodes:projects}} = data

  return (
    <Layout>
      <Hero/>
      <About/>
      <Jobs/>
      <Projects projects={projects} title="featured projects" showLink></Projects>
      <Contact/>
    </Layout>
  )
}


export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        title
        id
        featured
        description
        github
        url
        stack {
          id
          tag
        }
        image {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`