import React from "react";
import "./Skills.css";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        img: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000",
      },
      {
        name: "React.js",
        img: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
      },
      {
        name: "Bootstrap",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Tailwind CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "SASS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=ffffff",
      },
      {
        name: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      {
        name: "Python",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      {
        name: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Postman",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "DaVinci Resolve",
        img: "https://img.icons8.com/?size=100&id=40604&format=png&color=000000",
      },
      {
        name: "Figma",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Linux",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className=" font-bold text-white mb-8  section-title-skills">
          Skills
        </h2>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-800 p-4 rounded-md shadow-md hover:scale-105 transition"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 mb-2"
                    />
                    <p className="text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
