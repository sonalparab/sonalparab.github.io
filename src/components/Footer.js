import React from 'react';
import "./Footer.css"
import LinkedInLogo from "../images/LinkedIn.png"
import EmailIcon from "../images/EmailIcon.png"
import GithubIcon from "../images/github.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/sonal-parab/" target="_blank">
          <img src={LinkedInLogo}
            width={40} height={40} className="iconImg" />
        </a>
        <a href="mailto: sonalparab2018@gmail.com" target="_blank">
          <img src={EmailIcon}
            width={40} height={40} className="iconImg" />
        </a>
        <a href="https://github.com/sonalparab" target="_blank">
          <img src={GithubIcon}
            width={40} height={40} className="iconImg" />
        </a>
      </div>
    </div>

  );
}

export default Footer;