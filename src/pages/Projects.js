import React from 'react';
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div>
      <div>
        <ProjectCard name="Customizable Connect 4" projectLink="https://github.com/sonalparab/Connect4" technologies={["OCaml", "Git"]}
          description="I worked with a team of 3 to create a terminal version of Connect 4. We implemented a single player mode with an AI and multiplayer game modes with customizable settings, including
          special game pieces, changing the number of players, and changing the number of pieces needed to connect for a win." />
        <ProjectCard name="Handwritten Numbers Recognition System" technologies={["C++"]}
          description="I worked with a partner to create a machine learning system that uses a supervised learning model to classify handwritten digits as part of the ECE2400 class at Cornell. We designed a parallel thread linear search algorithm after which achieved a 96.9% accuracy with a 75 second execution time when classifying 10,000 digits." />
        <ProjectCard name="TypePacer Game" projectLink="https://github.com/sonalparab/TypePacer" technologies={["Flask", "Python", "SQLite", "HTML", "Javascript"]}
          description="I worked with a team of 4 to recreate the web game TypeRacer, which is a speed typing game." />
        <ProjectCard name="Hangman" projectLink="https://github.com/sonalparab/hangman" technologies={["C"]}
          description="I worked with a partner to create a terminal version of Hangman. We implemented solo, competitive, and cooperative game modes, with multiplayer game modes playable over a server." />
      </div>
    </div>
  );
}


export default Projects;