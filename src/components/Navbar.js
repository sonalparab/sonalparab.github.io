import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

// {/* <script> */ }
// const current = 0;
// for (var i = 0; i < document.links.length; i++) {
//   if (document.links[i].href === document.URL) {
//     current = i;
//   }
// }
// console.log(current);
// document.links[current].className = 'current';
//     </script >
//     </>

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

  //   <ul className="nav">
  //   <li>
  //     <Link to="/">Home</Link>
  //   </li>
  //   <li>
  //     <Link to="/projects">Projects</Link>
  //   </li>
  //   <li>
  //     <Link to="/experience">Experience</Link>
  //   </li>
  //   <li>
  //     <Link to="/interests">Interests</Link>
  //   </li>
  // </ul>
}

export default Navbar;