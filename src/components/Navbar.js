import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#007bff", padding: "10px", color: "white" }}>
      <h2>My Website</h2>
      <div>
        <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "10px" }}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
