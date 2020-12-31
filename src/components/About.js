import React from "react"
import Image from "gatsby-image"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
  allStrapiAbout {
    nodes {
      id
      thingy
      info
      stack {
        id
        tag
      }
      profile {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
}
`

const About = () => {
    const data = useStaticQuery(query)
    const {allStrapiAbout:{nodes:about}} = data
    const {thingy, info, stack, profile} = about[0]
    console.log(profile)
    return (
        <section className="section">
            <div className="section-center about-center">
                
                <Image fluid={profile.childImageSharp.fluid} className="about-img"/>
                <article className="about-text">
                    <Title title={thingy}></Title>
                    <p>{info}</p>
                    <div className="about-stack">
                        {stack.map((item) => {
                            return (
                                <span key={item.id}>{item.tag}</span>
                            )
                        })}
                    </div>
                </article>
               
            </div>
        </section>
    )
}




export default About
