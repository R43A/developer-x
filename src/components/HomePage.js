import React from "react";
import logo from "../images/Frame 1.png";
import background from "../images/Light Desktop.jpg";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function HomePage(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <div className="container m-0">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="img-fluid child-logo" />
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="parent-bg">
        <img
          src={background}
          alt="background_img"
          className="img-fluid child-bg"
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="parent-text-over-image">
              <h1 className="display-3 text-md-left gradient-text">
                Frontend Developer
              </h1>
              <p className="parent-para text-md">
                Passionate fresher Frontend Developer with a keen eye for design
                and a drive to create engaging user experiences. Eager to
                contribute innovative solutions and learn from experienced peers
                in the field.
              </p>
              <div className="parent-btn-lnk">
                <a href="/" className="maj-btn">
                  Download CV
                </a>
                <Link to="/" className="maj-lnk">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="parent-text-over-image">
              <h4 className="text-md">My Projects</h4>
              <p className="parent-para text-md">
                Crafting dynamic frontend projects with HTML, CSS, and
                JavaScript for engaging user experiences, always seeking new
                challenges to innovate and grow.
              </p>
              <Link to="/" className="maj-lnk">
                Browse Projects
              </Link>
            </div>
            <div className="social-links">
              <h6 className="text-white">Follow me</h6>
              <a
                href="https://www.linkedin.com/in/tauseef-raza-9533b0253/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="lnk-log" />
              </a>
              <a
                href="https://www.instagram.com/__iamraza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="lnk-log" />
              </a>
              <a
                href="https://github.com/R43A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" className="lnk-log" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
