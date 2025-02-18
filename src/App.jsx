import React from "react";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <div className="bg-gray-900">
      <TopNavbar />
      <Intro />
      <About />
      <Project />
      <Skills />
    </div>
  );
};

export default App;
