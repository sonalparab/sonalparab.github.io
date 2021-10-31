import React from 'react';
import "./Home.css"
import Headshot from "../images/Sonal.jpg";

const Home = () => {
  return (
    <div>
      <div className="container">
        <img height={200} width={200} src={Headshot} align="left" />
        <div className="text">
          <p>My name is Sonal.</p>
          <p>I am interested in software development.</p>
          <p>The rest of this text is will be added later!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;