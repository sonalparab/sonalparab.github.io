import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <ul class="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/experience">Experience</Link>
      </li>
      <li>
        <Link to="/interests">Interests</Link>
      </li>
    </ul>
  );
}

export default Navbar;