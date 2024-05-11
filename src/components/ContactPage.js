import React from "react";
import logo from "../images/Frame 1.png";
import background from "../images/Dark Desktop.jpg";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import raza from "../images/Raza.jpg";

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
              <h1 className="h2 abt-pg-txt text-white">
                Hey there!
                <p className="h6">Leave your message here</p>
              </h1>
              <form>
                <div>
                  <input
                    type="text"
                    id="name"
                    className="cnt-frm"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="cnt-frm"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    className="cnt-frm"
                    name="message"
                    placeholder="Message"
                    rows={6} // Set number of rows
                    cols={50} // Set number of columns
                  />
                </div>
                <button type="submit" className="sbt-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="parent-text-over-image abt-pg">
              {/* <h4 className="text-md">Here's My CV</h4> */}
              <img src={raza} alt="img" className="my-img" />
              {/* <Link to="/" className="maj-lnk">
                Download CV
              </Link> */}
              <p className="parent-para text-md">
                Tauseef Raza - <i>Frontend Developer</i> <br />
              </p>
              <p className="cnt-inf">
                Hey, I hope You doin' good, If you have any queries contact me{" "}
                <br /> Email- contact.razx@gmail.com
              </p>
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
