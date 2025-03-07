import React from "react";
import "./About.css";
import codingImg from "../../assets/coding-image-1.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About" className="about-container ">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }} // Start position (hidden and below)
        whileInView={{ opacity: 1, y: 0 }} // End position (visible)
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
      >
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
        <p className="about-highlight inline-block">
          Let’s build something awesome together!
        </p>{" "}
        <span className="text-3xl">🎯</span>
      </motion.div>
      <motion.div
        className="about-image"
        initial={{ opacity: 0, y: 50 }} // Start position (hidden and below)
        whileInView={{ opacity: 1, y: 0 }} // End position (visible)
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
      >
        <img src={codingImg} alt="Coder Image" className="coder-image" />
      </motion.div>
    </section>
  );
};

export default About;
