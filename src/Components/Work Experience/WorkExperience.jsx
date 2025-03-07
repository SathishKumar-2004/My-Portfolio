import React from "react";
import "./WorkExperience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Google Apps Script Developer (Freelance)",
    company: "Self-Employed",
    duration: "Nov 2023",
    description: [
      "Built a custom Google Apps Script to automate data tasks, reducing manual effort by 50% and enhancing workflow efficiency.",
      "Delivered a tailored solution through close collaboration and received positive client feedback.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Squash Apps Private Limited, Coimbatore",
    duration: "Jan 2024 – Feb 2024",
    description: [
      "Developed web applications using HTML, CSS, PHP, and MySQL, improving UI/UX and functionality.",
      "Gained practical skills in coding, debugging, and interface design.",
    ],
  },
  {
    title: "Google Cloud Intern",
    company: "DC Innivision Private Limited, Namakkal",
    duration: "Jul 2024 – Aug 2024",
    description: [
      "Researched and implemented features of the Google Vision API, including FACE_DETECTION and OBJECT_LOCALIZATION.",
      "Worked on back-end solutions for file storage and image uploads using Google Cloud APIs.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 section-title-work">
          Work Experience
        </h2>

        <div className="relative border-l-4 border-blue-500 ">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 ml-6"
              initial={{ opacity: 0, y: 50 }} // Start position (hidden and below)
              whileInView={{ opacity: 1, y: 0 }} // End position (visible)
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
            >
              <div className="absolute -left-3.5 w-6 h-6 timeline rounded-full border-4 border-white"></div>
              <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400 mt-1">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
