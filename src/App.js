import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProjectPage from "./components/ProjectPage";
import ProjectDesc from "./components/ProjectDesc";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage title="developer-X" />} />
          <Route path="/about" element={<AboutPage title="developer-X" />} />
          <Route
            path="/contact"
            element={<ContactPage title="developer-X" />}
          />
          <Route
            path="/project"
            element={<ProjectPage title="developer-X" />}
          />
          <Route
            path="/description"
            element={<ProjectDesc title="developer-X" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
