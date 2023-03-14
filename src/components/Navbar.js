import React from "react";
// import { Link } from "react-router-dom";
import Resume from "../latestNisha.pdf";
import logo from "../png/logo.svg";
export default function Navbar() {
  return (
    <nav className="bg-black">
      <img src={logo} width="100px" />
      <div>
        <a href="/#home" className={window.href}>
          Home
        </a>
        {/* <a href="/">Projects</a> */}
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#Contacts">Contact</a>
      </div>
      <a href={Resume} download className="cv-btn ">
        Download CV
      </a>
    </nav>
  );
}
