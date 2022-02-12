import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Intro from "./components/intro/Intro";
import Experts from "./components/experts/Experts";
import About from "./components/aboutMe/Aboutme";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Experts />
    </div>
  );
}

export default App;
