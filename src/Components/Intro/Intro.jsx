import React from "react";
import "./Intro.css";
import profile from "../../assets/Sathish_kumar_professional_1-removebg-preview.png";
import resume from "../../assets/Sathish_Resume.pdf";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section id="Intro" className="">
      <motion.div
        className="introContent"
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true, amount: 1 }} // Ensures it triggers fully only once
      >
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="name ">Sathish Kumar</span>
        </span>

        <TypeAnimation
          className="animated-text"
          sequence={[
            "Software Engineer",
            1000,
            "Full Stack Developer",
            1000,
            "Problem Solver",
            1000,
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
        {/* <Link> */}
        <div>
          <a
            type="button"
            href="https://drive.google.com/file/d/19W6XLtcpaR2VpjzH17DSmdT9heC8I-zf/view?usp=drive_link"
            download="Sathish_Resume.pdf"
            className="py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            Download Resume
          </a>
        </div>
        {/* </Link> */}
      </motion.div>
      <div>
        <img src={profile} alt="profile" className="profileImg " />
      </div>
    </section>
  );
};

export default Intro;
