import React from "react";
import logo from "../images/Frame 1.png";
import background from "../images/weather-bg.jpg";
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
                <Link className="nav-link" to="/project">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
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
              <h1 className="Parent-txt text-white">Description</h1>
              <p className="parent-para text-md text-small">
                Developed a responsive weather application using React framework
                to provide users with real-time weather updates based on their
                current location. Leveraged modern web technologies including
                HTML5, CSS3, and JavaScript to create an intuitive user
                interface.
              </p>
              <ul>
                <li className="pro-desc">
                  Implemented geolocation functionality to automatically detect
                  user's current location and fetch corresponding weather data
                  using the RapidAPI.
                </li>
                <li className="pro-desc">
                  Designed and styled the application interface using CSS
                  Flexbox and responsive design principles, ensuring optimal
                  user experience across various devices.
                </li>
                <li className="pro-desc">
                  Utilized React hooks and state management to efficiently
                  manage component state and update weather information
                  dynamically without page refresh.
                </li>
                <li className="pro-desc">
                  Integrated error handling and loading indicators to enhance
                  user experience during data retrieval processes.
                </li>
                <li className="pro-desc">
                  Conducted rigorous testing across multiple browsers and
                  devices to ensure cross-compatibility and consistent
                  functionality.
                </li>
              </ul>
              <div className="parent-btn-lnk">
                <a href="/" className="maj-lnk">
                  Visit website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="parent-text-over-image abt-pg">
              <h4 className="text-md">Explore</h4>
              <p className="parent-para text-md">
                Fueled by a relentless pursuit of innovation, always seeking
                fresh challenges to elevate frontend craftsmanship.
              </p>
              {/* <Link to="/" className="maj-lnk">
                Download CV
              </Link> */}
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
