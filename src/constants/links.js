import React from 'react'
import {Link } from 'gatsby'

const data = [
    {
        id: 1,
        text = "About",
        url = "/",
    },
    {
        id: 2,
        text = "Experience",
        url = "/",
    },
    {
        id: 3,
        text = "Projects",
        url = "/",
    },
    {
        id: 4,
        text = "Resume",
        url = "/",
    },
]

const tempLinks = data.map(link => {
    return (
        <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
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