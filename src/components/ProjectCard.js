import React from "react";
import "./ProjectCard.css"
import PlaceholdImage from "../images/ProjectPlaceholder.png";
import GithubLogo from "../images/github.png"

const ProjectCard = ({
  projectImage = PlaceholdImage,
  projectVideo = "",
  projectLink = "",
  name = "Project Name",
  description = "This is a placeholder project description about the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  technologies = ["Python", "Flask", "HTML", "Javascript"]
}) => {

  const technologyButtons = () =>
    technologies.map((tech) => {
      return <button className="button" key={tech}>
        {tech}
      </button>
    });


  return (
    <div className="projectContainer">
      <div>
        {projectVideo != "" ?
          (
            <video width={450} height={200} autoPlay loop muted>
              <source src={projectVideo} type="video/mp4" />
            </video>
          )
          :
          (
            <img height={200} width={400} src={projectImage} align="left" />
          )
        }
      </div>
      <div className="verticalContainer">
        <div className="projectText">
          <div className="projectTitleContainer">
            <div className="projectTitleText">{name}</div>
            {projectLink != "" ?
              <a href={projectLink} target="_blank">
                <img src={GithubLogo}
                  width={30} height={30} />
              </a> : <> </>
            }
          </div>
          <p>{description}</p>
        </div>
        {technologyButtons()}
      </div>
    </div>
  );
};

export default ProjectCard;