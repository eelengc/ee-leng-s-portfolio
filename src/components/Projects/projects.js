import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";
import ttt1 from "../../assets/tictactoe1.png";
import ttt2 from "../../assets/tictactoe2.png";
import ajak1 from "../../assets/ajak1.png";
import ajak2 from "../../assets/ajak2.png";
import wl1 from "../../assets/wl1.png";
import wl2 from "../../assets/wl2.png";
import pro4 from "../../assets/pro-4.png";
import "./projects.css";
import { useState, useEffect } from "react";

function Projects() {
  return (
    <section id="projects" className="container">
      <div className="project-header">
        <span>projects</span>
      </div>
      <div className="project">
        <div className="project-container">
          <div className="card">
            <div className="imgBx">
              <img src={ttt1} alt="tictactoe" className="hover-img"></img>
              <img src={ttt2} alt="tictactoe"></img>
            </div>
            <div className="content">
              <h3>Tictactoe</h3>
              <p>
                First fun project of a game after learning Javascript,
                especially on DOM manipulation and to refine basic skills like
                HTML and CSS, and to make elements interactive with Javascript.
              </p>
              <div className="content-tech">
                <strong>Front-End</strong> /{" "}
                <span className="content-skills">CSS HTML JAVASCRIPT</span>
              </div>

              <div className="portfolio-links">
                <a href="https://github.com/eelengc/tictactoe" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://eelengc.github.io/tictactoe/" target="_blank">
                  <IoIosOpen />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="card">
            <div className="imgBx">
              <img src={ajak1} alt="tictactoe" className="hover-img"></img>
              <img src={ajak2} alt="tictactoe"></img>
            </div>
            <div className="content">
              <h3>ajak</h3>
              <p>
                A platform where sport players get to find missing team member
                to start a game. Users get to organize and connect with sport
                players who are of similar interest. Includes sign up and log in
                functionality, with encrypted passwords and an authorization
                flow.
              </p>
              <div className="content-tech">
                <strong>Full-Stack</strong> /{" "}
                <span className="content-skills">
                  CRUD RESTFUL MVC EJS NODE.JS BCRYPT MONGOOSE BOOTSTRAP
                </span>
              </div>
              <div className="portfolio-links">
                <a href="https://github.com/eelengc/ajak" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://ajak-sei.herokuapp.com/game" target="_blank">
                  <IoIosOpen />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="card">
            <div className="imgBx">
              <img src={wl1} alt="tictactoe" className="hover-img"></img>
              <img src={wl2} alt="tictactoe"></img>
            </div>
            <div className="content">
              <h3>with love</h3>
              <p>
                This is a group project done with my coursemates, focusing on
                building an e-commerce web page and displaying Google Maps API.
              </p>
              <div className="content-tech">
                <strong>Full-Stack</strong> /{" "}
                <span className="content-skills">
                  CRUD MVC MOONGOSE EJS NODE.JS API REACT
                </span>
              </div>
              <div className="portfolio-links">
                <a href="https://github.com/eelengc/with-love" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://w-love.onrender.com/" target="_blank">
                  <IoIosOpen />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
