import React from "react";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Intro />
      <About />
      <Project />
    </div>
  );
};

export default App;
