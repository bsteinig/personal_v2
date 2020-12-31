import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
{
  file(relativePath: {eq: "FlatLay.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
    const {file:{childImageSharp:{fluid}}} = useStaticQuery(query);
    return (
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <h4>Hi, my name is</h4>
              <h1>Ben Steinig.</h1>
              <h1>I build web projects.</h1>
              <div className="underline"></div>
              <h5>I'm a current CS student at the University of Michigan, in Ann Arbror, MI, and an aspiring software engineer. I have experience with C++, Python, Javascript, and React and am actively seeking internship opportunities.</h5>
              <a className="btn" href="mailto:bsteinig@umich.edu">  Contact Me</a>
              <SocialLinks></SocialLinks>
            </div>
          </article>
          <Image fluid={fluid} className="hero-img"/>
        </div>
      </header>
    )
  }
  
  export default Hero