import React, { useEffect, useState } from "react";
import logo from "../images/Frame 1.png";
import background from "../images/Dark Desktop.jpg";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import raza from "../images/Raza.jpg";

function HomePage(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage(false);
      }, 3000); // Display success message for 3 seconds
    }
    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if name field is empty
    if (formData.name.trim() === "") {
      // Update state to indicate error
      setFormData({
        ...formData,
        nameError: true, // Set nameError to true to indicate error
      });
      return; // Exit function if name is empty
    }

    // Check if email field is empty or does not contain "@"
    if (formData.email.trim() === "") {
      // Update state to indicate error for email field
      setFormData({
        ...formData,
        emailError: true,
      });
      return; // Exit function if email is empty or invalid
    }

    // Check if message field is empty
    if (formData.message.trim() === "") {
      // Update state to indicate error for message field
      setFormData({
        ...formData,
        messageError: true,
      });
      return; // Exit function if message is empty
    }

    const url = "https://mail-sender-api1.p.rapidapi.com/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "mail-sender-api1.p.rapidapi.com",
      },
      body: JSON.stringify({
        sendto: "contact.razx@gmail.com",
        name: formData.name,
        replyTo: formData.email,
        ishtml: "false",
        title: "Message from Contact Form",
        body: formData.message,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result); // Check API response

      // Reset the form fields
      setFormData({
        name: "",
        email: "",
        message: "",
        nameError: false, // Reset nameError to false
        emailError: false, // Reset emailError to false
        messageError: false, // Reset messageError to false
      });
      // Show success message
      setSuccessMessage(true);
    } catch (error) {
      console.error("Error sending email:", error);
      // Display error message or handle error as needed
    }
  };

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
            <div className="parent-cnt-pg">
              <h1 className="h2 abt-pg-txt text-white">Hey there!</h1>
              <p className="h6 text-white">Leave your message here!</p>
              {successMessage && (
                <p className="success-message">Message sent successfully!</p>
              )}
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    className={"cnt-frm"}
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className={"cnt-frm"}
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    className={"cnt-frm"}
                    value={formData.message}
                    onChange={handleChange}
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
