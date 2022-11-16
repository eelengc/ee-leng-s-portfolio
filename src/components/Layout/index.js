import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./index.css";

const layoutStyle = {
    background: "black",
    width: "100%",
    display: "grid",
    placeItems: "center",
    alignContent: "center",
    lineHeight: "1.3",
    height: "100vh",
}

function Layout() {
  return (
    <div style={layoutStyle}>
      <div className="container">
        <div className="layout-container">
          <h4>Hello, I'm</h4>
          <Link to="/home" as={NavLink}>
            <h1>Ee Leng C.</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Layout;
