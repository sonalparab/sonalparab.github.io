import React from 'react';
import "./Home.css"
import Headshot from "../images/Sonal.jpg";

const Home = () => {
  return (
    <div className="homeContainer">
      <img height={200} width={200} src={Headshot} align="left" className="headshot" />
      <div className="homeText">
        My name is Sonal.
        <p>I am interested in software development. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>The rest of this text is will be added later!</p>
      </div>
    </div>
  );
}

export default Home;