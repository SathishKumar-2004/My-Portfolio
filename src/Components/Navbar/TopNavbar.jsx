import React from "react";
import "./TopNavbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

const TopNavbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu">
        <Link className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group">
          Home
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group">
          About
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group">
          Projects
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group">
          Skills
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link className="menuListItem font-bold hover: bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent relative group">
          Contact
          <span className="absolute left-0 bottom-[-0.5rem] w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
      <button className="menuContactBtn flex justify-center items-center  bg-white hover:bg-gray-100 px-3 py-2 text-black font-semibold rounded-full shadow">
        <img src={contactImg} alt="contactImg" className="contactImg mx-2" />{" "}
        Contact Me
      </button>
    </div>
  );
};

export default TopNavbar;
