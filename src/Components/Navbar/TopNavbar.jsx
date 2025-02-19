import React, { useEffect, useRef, useState } from "react";
import "./TopNavbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when resizing above md (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="navbar bg-gray-900">
      <img src={logo} alt="logo" className="logo hidden md:block" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar bg-gray-900  ${isOpen ? "open" : ""}`}
      >
        <nav className="sidebar-menu md:hidden ">
          <Link
            className="menuListItem"
            to="Intro"
            smooth={true}
            offset={-70}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="menuListItem"
            to="About"
            smooth={true}
            offset={-150}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="menuListItem"
            to="projects"
            smooth={true}
            offset={-20}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="menuListItem"
            to="skills"
            smooth={true}
            offset={-50}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            className="menuListItem"
            to="contact"
            smooth={true}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Desktop Menu (Hidden in Mobile View) */}
      <div className="menu">
        <Link
          className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group"
          to="Intro"
          smooth={true}
          offset={-70}
        >
          Home
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group"
          to="About"
          smooth={true}
          offset={-80}
        >
          About
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group"
          to="projects"
          smooth={true}
          offset={-20}
        >
          Projects
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group"
          to="skills"
          smooth={true}
          offset={-50}
        >
          Skills
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group"
          to="contact"
          smooth={true}
        >
          Contact
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      <a
        type="button"
        href="mailto:sathishkumarofficial2004@gmail.com"
        className=" menuContactBtn  md:flex items-center bg-white hover:bg-gray-100 px-3 py-2 text-black font-semibold rounded-full shadow"
      >
        <img
          src={contactImg}
          alt="contactImg"
          className="contactImg hidden md:block mx-2"
        />{" "}
        Contact Me
      </a>
    </div>
  );
};

export default TopNavbar;
