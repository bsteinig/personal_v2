import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects"></Projects>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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


export default ProjectsPage
