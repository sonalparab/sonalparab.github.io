import React from 'react';
import "./Home.css"
import Headshot from "../images/Sonal.jpg";
import LinkedInLogo from "../images/LinkedIn.png"
import EmailIcon from "../images/EmailIcon.png"

const Home = () => {

  return (
    <div className="homeContainer">
      <img height={200} width={200} src={Headshot} align="left" className="headshot" />
      <div className="homeText">
        Hi! My name is Sonal.
        <p>I am interested in software development. The rest of this text is will be added later!</p>
        Feel free to reach out on LinkedIn or <a href="mailto: sonalparab2018@gmail.com" target="_blank" style={{ color: "blue" }}>email me</a>!
        <div className="iconContainer">
          <a href="https://www.linkedin.com/in/sonal-parab/" target="_blank">
            <img src={LinkedInLogo}
              width={30} height={30} className="iconImg" />
          </a>
          <a href="mailto: sonalparab2018@gmail.com" target="_blank">
            <img src={EmailIcon}
              width={30} height={30} className="iconImg" />
          </a>

        </div>
      </div>
    </div >
  );
}

export default Home;