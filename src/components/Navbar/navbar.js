import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="header">
          <h1 id="header-portfolio">Portfolio</h1>
        <div className="nav-menu">
          <ul className="nav-menu">
            <li>
              <a href="#about"></a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
