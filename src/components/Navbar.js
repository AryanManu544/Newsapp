import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark bg-body-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">नव News</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
