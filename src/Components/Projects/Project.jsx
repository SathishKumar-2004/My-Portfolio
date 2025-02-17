import React, { useState } from "react";
import "./Project.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const projects = [
  {
    id: 1,
    title: "Wanderlog - Travel Diary App",
    image: image1,
    liveLink: "https://wanderlog-travel-diary.netlify.app/",
    githubLink: "https://github.com/SathishKumar-2004/Travel-Diary-App",
  },
  {
    id: 2,
    title: "Realtime Chat Application",
    image: image2,
    liveLink:
      "https://67b0b9491b37a7e3817cb58c--react-chat-app-6-7-24.netlify.app/",
    githubLink: "https://github.com/SathishKumar-2004/React-Chat-App",
  },
  {
    id: 3,
    title: "SkySync - Weather Forecasting App",
    image: image3,
    liveLink: "https://skysync-weather-forecasting-app.netlify.app/",
    githubLink: "https://github.com/SathishKumar-2004/Weather-Forecasting-app",
  },
  {
    id: 4,
    title: "Nostra - Ecommerce Site",
    image: image4,
    githubLink: "https://github.com/SathishKumar-2004/E-Commerce-Site",
  },
];

const Project = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id} onClick={handleFlip}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
