import React, { useState } from "react";
import "./Project.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Wanderlog - Travel Diary App",
    image: image1,
    liveLink: "https://wanderlog-travel-diary.netlify.app/",
    githubLink: "https://github.com/SathishKumar-2004/Travel-Diary-App",
    description:
      "Wanderlog is a travel diary web application designed for users to log their travel experiences. It allows travelers to document their trips, add locations, and write about their journey in an organized manner.",
    techStack:
      "React.js, MongoDB, Node.js, Express.js and Firebase (for storage)",
  },
  {
    id: 2,
    title: "Realtime Chat Application",
    image: image2,
    liveLink:
      "https://67b0b9491b37a7e3817cb58c--react-chat-app-6-7-24.netlify.app/",
    githubLink: "https://github.com/SathishKumar-2004/React-Chat-App",
    description:
      "This is a real-time messaging app that enables users to communicate instantly. It utilizes Firebase for real-time database updates, ensuring smooth, instant chats.",
    techStack: "React.js, Firebase (Auth & Firestore)",
  },
  {
    id: 3,
    title: "SkySync - Weather Forecasting App",
    image: image3,
    liveLink: "https://skysync-weather-forecasting-app.netlify.app/",
    githubLink: "https://github.com/SathishKumar-2004/Weather-Forecasting-app",
    description:
      "SkySync is a weather forecasting web app that provides real-time weather updates based on user input. It fetches data from the OpenWeatherMap API to deliver accurate forecasts.",
    techStack: "React.js, OpenWeatherMap API, Chart.js, Bootstrap",
  },
  {
    id: 4,
    title: "Nostra - Ecommerce Site",
    image: image4,
    githubLink: "https://github.com/SathishKumar-2004/E-Commerce-Site",
    description:
      "Nostra is a simple eCommerce website built using PHP and MySQL. It demonstrates how an online store can be structured with product listings and a basic cart system.",
    techStack: "HTML, CSS, PHP, MySQL",
  },
];

const Project = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the clicked card only
    }));
  };

  return (
    <section id="projects">
      <h2 className="section-title ">Projects</h2>
      <motion.div
        className="project-container"
        initial={{ opacity: 0, y: 50 }} // Start position (hidden and below)
        whileInView={{ opacity: 1, y: 0 }} // End position (visible)
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
      >
        {projects.map((project) => (
          <div
            className={`project-card  ${
              flippedCards[project.id] ? "flipped" : ""
            }`}
            key={project.id}
            onClick={() => handleFlip(project.id)}
          >
            <div className="card-inner ">
              {/* Front Side */}
              <div className="card-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title font-semibold">{project.title}</h3>
              </div>

              {/* Back Side */}
              <div className="card-back">
                <p className="project-description font-semibold">
                  {project.description}
                </p>
                <p className="project-description font-semibold">
                  <span className="font-bold glow">Tech Stack : </span>
                  {project.techStack}
                </p>
                <div className="button-group">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn live-btn  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                  >
                    <svg
                      class="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
