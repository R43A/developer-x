import React from "react";
import logo from "../images/Frame 1.png";
import background from "../images/Mid Desktop.jpg";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
// import cv from "../images/Resume.jpg";

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
              <h1 className="Parent-txt text-white">About me</h1>
              <p className="parent-para text-md text-small">
                Greetings! My name is Tauseef Raza, and I am stepping into the
                world of frontend development with an insatiable curiosity and a
                drive to learn. While my professional journey in this field is
                just beginning, my enthusiasm for crafting captivating user
                experiences knows no bounds. <br /> <br />
                From the moment I stumbled upon the magic of web development, I
                was captivated by its blend of creativity and technicality.
                Despite lacking formal experience, I've spent countless hours
                immersing myself in tutorials, courses, and coding challenges,
                eager to absorb every nugget of knowledge like a sponge. <br />I
                firmly believe that great frontend development isn't just about
                lines of code; it's about empathy, understanding, and the
                ability to anticipate and meet the needs of users.
              </p>
              <div className="parent-btn-lnk">
                <Link to="/contact" className="maj-lnk">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="parent-text-over-image abt-pg">
              <h4 className="text-md">Here's My CV</h4>
              <p className="parent-para text-md">
                Welcome to my portfolio! Explore my professional journey and
                expertise by downloading my CV. Let's connect and explore
                opportunities together!
              </p>
              <Link to="/" className="maj-lnk">
                Download CV
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
