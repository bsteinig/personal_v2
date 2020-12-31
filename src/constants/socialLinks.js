import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com/in/bsteinig/",
    },
    {
        id: 2,
        icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
        url: "https://github.com/bsteinig",
    },
    {
        id: 3,
        icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
        url: "https://dribbble.com/bsteinig",
    },
    {
        id: 4,
        icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
        url: "https://www.instagram.com/bensteinig/",
    },
    {
        id: 5,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "https://twitter.com/bensteinig",
    },
]

const links = data.map(link => {
    return (
      <li key={link.id}>
        <a href={link.url} className="social-link">
          {link.icon}
        </a>
      </li>
    )
  })

export default ({styleClass}) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
    )
}