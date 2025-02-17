import React from "react";
import "./About.css";
import codingImg from "../../assets/coding-image-1.jpg";

const About = () => {
  return (
    <section id="About" className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro">
          Hey there! 👋 I'm <span>Sathish Kumar</span> , a{" "}
          <span>Full Stack Developer</span> who loves turning ideas into
          functional and interactive applications.
        </p>
        <p className="about-text">
          My journey started with frontend development, diving deep into{" "}
          <span>React, JavaScript, and UI/UX</span>. Over time, I expanded into
          backend technologies like <span>Node.js and MongoDB</span>, crafting
          full-stack solutions.
        </p>
        <p className="about-text">
          Currently, I’m fascinated by <span>AI-driven applications</span> and
          how they can transform industries. I’m always up for learning new
          technologies and collaborating on exciting projects.
        </p>
        <p className="about-highlight">
          Let’s build something awesome together!
        </p>
      </div>
      <div className="about-image">
        <img src={codingImg} alt="Coder Image" className="coder-image" />
      </div>
    </section>
  );
};

export default About;
