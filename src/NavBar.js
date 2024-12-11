import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/Home">Home</Link>
      <Link to="/Chips">Chips</Link>
      <Link to="/Soda">Soda</Link>
      <Link to="/Cookie">Cookie</Link>
    </nav>
  );
}

export default NavBar;
