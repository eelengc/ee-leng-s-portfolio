import React, { useState, useEffect } from "react";
import "./about.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import CV from "../../assets/CV.pdf";

function About() {
  const [isActive, setIsActive] = useState(false);

  const onScroll = () => {
    setIsActive(true);
  };

  useEffect(() => {
    onScroll();
  });

  return (
    <section id="about" className="container">
      <div className="back-text">
        <span className={isActive === true ? "active" : ""}>about me</span>
      </div>
      <br />
      <br />
      <br />
      <p className="about-me">
        Hi! My name is <strong>Ee Leng</strong> and I am a{" "}
        <strong>full-stack software engineer.</strong> I particularly like
        designing and creating things. I am just getting started on this journey
        of building things that stays on the internet. Hopefully this path will
        allow me to share more of my creativity digitally through building webs.
        I am excited to take the leap and refine my skills. <br />
        <br />
        Here are a few skillsets that I've dabbled into recently with the
        help of a software engineer immersive course:
      </p>
      <div className="tech">
        <div className="skills">
          <h3>Front-end:</h3>
          <ul>
            <li>» HTML</li>
            <li>» CSS</li>
            <li>» Javascript</li>
            <li>» React</li>
            <li>» Bootstrap</li>
          </ul>
        </div>
        <div className="skills">
          <h3>Back-end:</h3>
          <ul>
            <li>» Express.js</li>
            <li>» Node.js</li>
            <li>» MongoDB</li>
            <li>» PostgreSQL</li>
          </ul>
        </div>
        <div className="skills">
          <h3>Tools:</h3>
          <ul>
            <li>» VS Code</li>
            <li>» Git</li>
            <li>» Node Package Manager</li>
            <li>» iTerm</li>
          </ul>
        </div>
      </div>
      <div className="cv">
        <a href={CV} target="_blank">
          <button className="btn-view">Open CV</button>
        </a>
        <a href={CV} download>
          <button className="btn-resume">Download CV</button>
        </a>
      </div>
      <div className="socials">
        <a href="https://github.com/eelengc" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ee-leng-chung-43704623b"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/lvngc" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/lvngc" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

export default About;
