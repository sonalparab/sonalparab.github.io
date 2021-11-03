import React from "react";
import "./HobbyEntry.css"
import HobbyPic from "../images/HobbyPic.png";

const HobbyEntry = ({
  image1 = HobbyPic,
  image2 = HobbyPic,
  name = "Hobby",
  description = "This is a brief placeholder description about my hobby.",
}) => {

  return (

    <div className="hobbyContainer">
      <div className="imageContainer">
        <img height={300} width={250} src={image1} align="left" className="hobbyImg" />
        <img height={300} width={350} src={image2} align="left" className="hobbyImg" />
      </div>
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