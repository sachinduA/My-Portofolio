import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Intro from "./components/intro/Intro";
import Experts from "./components/experts/Experts";
import About from "./components/aboutMe/Aboutme";
import Projects from "./components/sampleProjects/Projects";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Experts />
      <Projects />
    </div>
  );
}

export default App;
