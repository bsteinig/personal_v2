import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks syleClass="footer-links" />
        <h4><span>Designed &#38; Built by Ben Steinig</span></h4>
      </div>
    </footer>
  )
}

export default Footer