import React from 'react';
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div>
      <div>
        <ProjectCard name="Customizable Connect 4" projectLink="https://github.com/sonalparab/Connect4" technologies={["OCaml", "Git"]} />
        <ProjectCard name="Handwritten Numbers Recognition System" technologies={["C++"]} />
        <ProjectCard name="TypePacer Game" projectLink="https://github.com/sonalparab/TypePacer" technologies={["Flask", "Python", "SQLite", "HTML", "Javascript"]} />
      </div>
    </div>
  );
}


export default Projects;