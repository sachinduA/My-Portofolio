import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-scroll-to-top";

import Intro from "./components/intro/Intro";
import Experts from "./components/experts/Experts";
import About from "./components/aboutMe/Aboutme";
import Projects from "./components/sampleProjects/Projects";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth top="20" />
      <Intro />
      <About />
      <Experts />
      <Projects />
    </div>
  );
}

export default App;
