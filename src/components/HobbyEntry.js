import React from "react";
import "./HobbyEntry.css"
import HobbyPic from "../images/HobbyPic.png";

const HobbyEntry = ({
  image1 = HobbyPic,
  image2 = HobbyPic,
  video = "",
  name = "Hobby",
  description = "This is a brief placeholder description about my hobby.",
  dimensions = [310, 250, 310, 300]
}) => {

  return (

    <div className="hobbyContainer">
      {video != "" ?
        (
          <div className="imageContainer">
            <video width={575} height={325} controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )
        :
        (
          <div className="imageContainer">
            <img height={dimensions[0]} width={dimensions[1]} src={image1} align="left" className="hobbyImg" />
            <img height={dimensions[2]} width={dimensions[3]} src={image2} align="left" className="hobbyImg" />
          </div>
        )
      }
      <div className="hobbyVerticalContainer">
        <div className="hobbyTextContainer">
          <div className="hobbyTitleText">{name}</div>
          <p>{description}</p>
        </div>
      </div>
    </div>

  );
};

export default HobbyEntry;