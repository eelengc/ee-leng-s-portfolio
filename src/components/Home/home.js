import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./home.css";
import Navbar from "../../components/Navbar/navbar";
import About from "../../components/About/about";
import Projects from "../../components/Projects/projects";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
    <section id="home">
      <Navbar />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </section>
  );
}

export default Home;
