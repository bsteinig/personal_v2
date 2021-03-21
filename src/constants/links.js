import React from 'react'
import {Link } from 'gatsby'

const data = [
    {
        id: 1,
        text:  "About",
        url:  "/#About",
     
    },
    {
        id: 2,
        text:  "Experience",
        url:  "/#Experience",
       
    },
    {
        id: 3,
        text:  "Projects",
        url:  "/#Projects",
        
    },
    {
        id: 4,
        text:  "Contact",
        url:  "/#Contact",
      
    },
    {
        id: 5,
        text: "Resume",
        url: "https://drive.google.com/file/d/13jZGLgTgAricJ1okq07wzVepyQTaWIP3/view?usp=sharing"
    }
]

const tempLinks = data.map(link => {
    return (
        <li key={link.id}>
            <Link to={link.url} >{link.text}</Link>
        </li>
    )
})

export default ({styleClass}) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}