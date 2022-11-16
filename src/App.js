import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Layout from "./components/Layout";
import Home from "./components/Home/home.js";
import About from "./components/About/about.js";
import Projects from "./components/Projects/projects.js";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
