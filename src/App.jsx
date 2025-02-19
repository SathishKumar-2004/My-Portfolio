import React from "react";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="bg-gray-900 ">
      <TopNavbar />
      <Intro />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
