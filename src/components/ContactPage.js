import React, { useState } from "react";
import logo from "../images/Frame 1.png";
import background from "../images/Dark Desktop.jpg";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import raza from "../images/Raza.jpg";

function HomePage(props) {
  const [isNameFilled, setIsNameFilled] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageFilled, setIsMessageFilled] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [message, setMessage] = useState("");

  // Function to handle name input change
  const handleNameChange = (event) => {
    const { value } = event.target;
    // Check if name input value is not empty
    if (value.trim() !== "") {
      setIsNameFilled(true); // Update state
    } else {
      setIsNameFilled(false);
    }
  };

  // Function to handle email input change
  const handleEmailChange = (event) => {
    const { value } = event.target;
    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if email is empty or not matching the regular expression
    if (value.trim() === "" || !emailRegex.test(value)) {
      setIsEmailValid(false); // Update state
    } else {
      setIsEmailValid(true);
    }
  };

  // Function to handle message input change
  const handleMessageChange = (event) => {
    const { value } = event.target;
    // Check if message input value is not empty
    if (value.trim() !== "") {
      setIsMessageFilled(true); // Update state
    } else {
      setIsMessageFilled(false);
    }

    // Update message state with input value
    setMessage(value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    // Check if name, email, and message fields are filled and email is valid
    if (isNameFilled && isEmailValid && isMessageFilled) {
      // Mail sender API endpoint
      const url = "https://mail-sender-api1.p.rapidapi.com/";
      // Mail sender API request options
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.REACT_APP_API,
          "X-RapidAPI-Host": "mail-sender-api1.p.rapidapi.com",
        },
        body: JSON.stringify({
          sendto: "Contact.razx@gmail.com",
          name: "Query from developer-X",
          replyTo: "Your Email address where users can send their reply",
          ishtml: false,
          title: "Enquiry",
          body: message,
        }),
      };

      try {
        const response = await fetch(url, options); // Send request to Mail sender API
        const result = await response.text(); // Get response text
        console.log(result); // Log the result

        // Reset form
        const form = event.target;
        form.reset();

        // Set message sent state to true
        setMessageSent(true);

        // Hide message after 3 seconds
        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      } catch (error) {
        console.error(error); // Log any errors
      }
    } else {
      // If name, email, or message fields are not filled, set their border color to red
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      nameInput.style.borderColor = isNameFilled ? "" : "red";
      emailInput.style.borderColor = isEmailValid ? "" : "red";
      messageInput.style.borderColor = isMessageFilled ? "" : "red";
    }
  };

  // Function to handle resetting input border color
  const resetBorder = (event) => {
    const { id } = event.target;
    const input = document.getElementById(id);
    input.style.borderColor = ""; // Reset border color
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
            {messageSent && <div className="message-sent">Message Sent</div>}
            <div className="parent-text-over-image">
              <h1 className="h2 abt-pg-txt text-white">
                Hey there!
                <p className="display-6">Leave your message here</p>
              </h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    className="cnt-frm"
                    placeholder="Name"
                    onChange={handleNameChange} // Add onChange event handler
                    onFocus={resetBorder} // Add onFocus event handler
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="cnt-frm"
                    name="email"
                    placeholder="Email"
                    onChange={handleEmailChange} // Add onChange event handler
                    onFocus={resetBorder} // Add onFocus event handler
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
                    onChange={handleMessageChange} // Add onChange event handler
                    onFocus={resetBorder} // Add onFocus event handler
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
