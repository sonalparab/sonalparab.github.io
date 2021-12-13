import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact={true} to="/" activeStyle={{
          fontWeight: "bold",
          color: "#CD91FF"
        }}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeStyle={{
          fontWeight: "bold",
          color: "#CD91FF"
        }}>Projects</NavLink>
      </li>
      <li>
        <NavLink to="/experience" activeStyle={{
          fontWeight: "bold",
          color: "#CD91FF"
        }}>Experience</NavLink>
      </li>
      <li>
        <NavLink to="/interests" activeStyle={{
          fontWeight: "bold",
          color: "#CD91FF"
        }}>Interests</NavLink>
      </li>
    </ul>
  );

}

export default Navbar;