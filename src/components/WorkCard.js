import React from "react";
import "./WorkCard.css"
import PlaceholdImage from "../images/CompanyLogo.png";
// import GithubLogo from "../images/github.png"

const WorkCard = ({
  companyImage = PlaceholdImage,
  companyName = "Company",
  position = "My Position",
  location = "Location",
  description = "This is a placeholder description about my work experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  technologies = ["Python", "Flask", "HTML", "Javascript"]
}) => {

  const technologyButtons = () =>
    technologies.map((tech) => {
      return <button className="button" key={tech}>
        {tech}
      </button>
    });


  return (

    <div className="workContainer">
      <img height={250} width={250} src={companyImage} align="left" className="img" />
      <div className="workVerticalContainer">
        <div className="workText">
          <div className="workTitleText">{companyName}</div>
          <div className="workPositionText">{position}</div>
          <div className="workLocationText">{location}</div>
          <p>{description}</p>
        </div>
        {technologyButtons()}
      </div>
    </div>
  );
};

export default WorkCard;