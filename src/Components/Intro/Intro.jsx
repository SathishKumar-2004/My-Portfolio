import React from "react";
import "./Intro.css";
import profile from "../../assets/Sathish_kumar_professional_1-removebg-preview.png";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section id="Intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="name ">Sathish Kumar</span>
        </span>

        <TypeAnimation
          className="animated-text"
          sequence={[
            "Software Engineer",
            1000, // Shows for 2s
            "Full Stack Developer",
            1000, // Shows for 2s
          ]}
          wrapper="span"
          speed={50} // Typing speed
          deletionSpeed={40} // Erase speed
          repeat={Infinity} // Loops infinitely
        />

        <p className="introPara">
          Passionate software developer exploring AI and innovative solutions.
          <br></br>
          Turning ideas into impactful digital experiences!
        </p>
        <Link>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            Download Resume
          </button>
        </Link>
      </div>
      <div>
        <img src={profile} alt="profile" className="profileImg " />
      </div>
    </section>
  );
};

export default Intro;
