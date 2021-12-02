import React from 'react';
import ProjectCard from '../components/ProjectCard'
import Connect4 from '../videos/Connect4.mp4'
import TypePacer from '../videos/TypePacer.mp4'
import Hangman from '../videos/Hangman.mp4'
import CrimeRates from '../videos/CrimeRates.mp4'

const Projects = () => {
  return (
    <div>
      <div>
        <ProjectCard name="Customizable Connect 4" projectLink="https://github.com/sonalparab/Connect4" technologies={["OCaml", "Git"]}
          description="I worked with a team of 3 to create a terminal version of Connect 4. We implemented a single player mode with an AI and multiplayer game modes with customizable settings, including
          special game pieces, changing the number of players, and changing the number of pieces needed to connect for a win."
          projectVideo={Connect4} />
        <ProjectCard name="TypePacer Game" projectLink="https://github.com/sonalparab/TypePacer" technologies={["Flask", "Python", "SQLite", "HTML", "Javascript", "Git"]}
          description="I worked with a team of 4 to recreate the web game TypeRacer, which is a speed typing game. Players can see how they rank against other players on the leaderboard."
          projectVideo={TypePacer} />
        <ProjectCard name="Hangman" projectLink="https://github.com/sonalparab/hangman" technologies={["C", "Git"]}
          description="I worked with a partner to create a terminal version of Hangman. We implemented solo, competitive, and cooperative game modes, with multiplayer game modes playable over a server with a client."
          projectVideo={Hangman} />
        <ProjectCard name="Crime Rate Visualization" technologies={["Javascript", "d3", "HTML", "Python", "Git"]}
          description="I worked with a team of 4 to create a visualization of crime rates in the United States. Users can select a different crime type that they wish to view and then hover over the states to see the city with the top rates of those crimes in each state and click the state to see the a pie chart of the breakdown of each crime type in that state and a line chart of how that rate of that crime type has changed."
          projectVideo={CrimeRates} />
      </div>
    </div>
  );
}


export default Projects;