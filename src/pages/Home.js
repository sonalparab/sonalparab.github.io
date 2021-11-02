import React from 'react';
import "./Home.css"
import Headshot from "../images/Sonal.jpg";

const Home = () => {
  return (
    <div className="container">
      <img height={200} width={200} src={Headshot} align="left" className="headshot" />
      <div className="text">
        My name is Sonal.
        <p>I am interested in software development.</p>
        <p>The rest of this text is will be added later!</p>
      </div>
    </div>
  );
}

export default Home;