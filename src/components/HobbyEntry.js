import React from "react";
import "./HobbyEntry.css"
import HobbyPic from "../images/HobbyPic.png";

const HobbyEntry = ({
  image1 = HobbyPic,
  image2 = HobbyPic,
  name = "Hobby",
  description = "This is a placeholder description about my hobby. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {

  return (

    <div className="hobbyContainer">
      <img height={200} width={350} src={image1} align="left" className="hobbyImg" />
      <img height={200} width={350} src={image2} align="left" className="hobbyImg" />
      <div className="hobbyVerticalContainer">
        <div className="hobbyText">
          <div className="hobbyTitleText">{name}</div>
          <p>{description}</p>
        </div>
      </div>
    </div>

  );
};

export default HobbyEntry;