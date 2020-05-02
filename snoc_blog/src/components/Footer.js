import React from "react"

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Code Blog</h4>
    <p className="text-center"> Follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://ww.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} className="fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://ww.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://ww.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://ww.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)
export default Footer
