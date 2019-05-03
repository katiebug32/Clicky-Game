import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul>
        <li className="topScore">Top Score: {props.topScore}</li>
        <li className="comment">{props.comment}</li>
        <li className="currentScore">Current Score: {props.currentScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;