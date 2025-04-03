import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h2 className="text-xl font-bold">My Website</h2>
      <div>
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        <Link to="/about" className="mx-2 hover:underline">About</Link>
        <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
// this is the change to check development2
export default Navbar;
