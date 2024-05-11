import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Frame 1.png";
import BackgroundImage from "../Images/Mid Desktop.jpg";
import Instagram from "../Images/instagram.png";
import Github from "../Images/github.png";
import LinkedIn from "../Images/linkedin.png";
import MyImage from "../Images/Raza.jpg";
import { useState, useEffect } from "react";

function AboutPage(props) {
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
    <div>
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" className="navLogo" />
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid p-0 m-0 position-relative">
        <div className="row m-0">
          <div className="col-md-8 p-0">
            <img src={BackgroundImage} alt="Full Screen" className="bg-img" />
            <div className="parent-cnt-pg">
              <h1 className="abt-pg-txt">Hey there!</h1>
              <p className="h6">Leave your message here!</p>
              {successMessage && (
                <p className="success-message">Message sent successfully!</p>
              )}
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    className={
                      formData.nameError ? "cnt-frm input-error" : "cnt-frm"
                    }
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
                    className={
                      formData.emailError ? "cnt-frm input-error" : "cnt-frm"
                    }
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    className={
                      formData.messageError ? "cnt-frm input-error" : "cnt-frm"
                    }
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
          <div className="col-md-4 p-0">
            <div className="rgt-txt-cnt">
              <div className="my-id">
                <img src={MyImage} alt="my-img" className="my-img" />
                <h5 className="id-txt m-0">Tauseef Raza</h5>
                <p className="id-txt">Frontend Developer - India</p>
              </div>
              <p className="h6">
                Hey, I hope you doin' good, if you have any queries <br /> Feel
                free to ask me <br /> <br /> Email: contact.razx@gmail.com
                <br /> Phone: +91 9519622335
              </p>
            </div>
            <div className="socials-log">
              <h6 className="social-lnk">Follow Me</h6>
              <a
                href="https://www.instagram.com/__iamraza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="Instagram" className="socials-img" />
              </a>
              <a
                href="https://github.com/R43A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="Github" className="socials-img" />
              </a>
              <a
                href="https://www.linkedin.com/in/tauseef-raza-9533b0253/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" className="socials-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
