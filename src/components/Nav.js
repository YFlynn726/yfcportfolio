import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="bounce-in-top">
        <nav className="nav-container">
          <Link to="/">
            <h2 className="logo">YFC</h2>
          </Link>
          <ul className="nav-links">
            <Link to="/AboutMe">
              <li className="dash">About</li>
            </Link>
            <Link to="/MyProjects">
              <li className="dash">Projects</li>
            </Link>
            <Link to="/ContactMe">
              <li className="dash">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
