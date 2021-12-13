import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function SocialHeader() {
  return (
    <div class="social-container">
      <p>Follow Us On Social Media: </p>
      <a href="https://www.youtube.com/" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.twitter.com/offshoreocean"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/offshoreocean"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.tiktok.com/@offshoreocean" className="tiktok social">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/offshore-ocean"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  )
}
