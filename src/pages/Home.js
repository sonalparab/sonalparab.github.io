import React from 'react';
import "./Home.css"
import Headshot from "../images/Sonal.jpg";
import LinkedInLogo from "../images/LinkedIn.png"
import EmailIcon from "../images/EmailIcon.png"
import GithubIcon from "../images/github.png"

const Home = () => {

  return (
    <div className="homeContainer">
      <img height={200} width={200} src={Headshot} align="left" className="headshot" />
      <div className="homeText">
        Hi! My name is Sonal.
        <p>I am currently a senior at Cornell University studying Computer Science with a minor in User Experience Design.
          I like to work on full stack software development projects because that allows me to both work on the backend, which I have a lot of experience with, and the frontend, which users interact with.
          I love learning new technologies and creating software that helps makes everyday tasks easier for people! </p>
        Feel free to reach out on <a href="https://www.linkedin.com/in/sonal-parab/" target="_blank" style={{ color: "blue" }}>LinkedIn</a> or <a href="mailto: sonalparab2018@gmail.com" target="_blank" style={{ color: "blue" }}>email me</a>!
        <div className="iconContainer">
          <a href="https://www.linkedin.com/in/sonal-parab/" target="_blank">
            <img src={LinkedInLogo}
              width={30} height={30} className="iconImg" />
          </a>
          <a href="mailto: sonalparab2018@gmail.com" target="_blank">
            <img src={EmailIcon}
              width={30} height={30} className="iconImg" />
          </a>
          <a href="https://github.com/sonalparab" target="_blank">
            <img src={GithubIcon}
              width={30} height={30} className="iconImg" />
          </a>
        </div>
      </div>
    </div >
  );
}

export default Home;