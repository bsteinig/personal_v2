import React from "react"
import Title from "./Title"

const Contact = () => {


    return (
        <section id="Contact" className="section-center contact">
            <Title title="Get in Touch"/>
            <article className="contact-info">
                <h4>I'm currently seeking opportunities for Summer 2021 as a software engineering or web development intern. 
                    My Inbox is always open, so feel free to reach out with any questions, or just to say Hi!</h4>
                <a className="center-btn btn" href="mailto:bsteinig@umich.edu">  Say Hello</a>
            </article>
            
        </section>
    )
}

export default Contact