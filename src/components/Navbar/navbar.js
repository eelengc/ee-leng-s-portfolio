import React from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import {useState} from 'react';
import "./navbar.css";

function Navbar() {
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);

  return (
    <div className="container">
      <div className="header">
          <h1 id="header-portfolio">Portfolio</h1>
        <div>
          <ul className="nav-menu">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes size={20} style={{color: "black"}}/> : <FaBars size={20} style={{color: "black"}}/>}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
