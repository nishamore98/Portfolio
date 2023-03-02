import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-black">
      <div>
        <Link to="/">Home</Link>
        {/* <a href="/">Projects</a> */}
        <Link to="/Skills">Skills</Link>
      </div>
      <a href="../NishaResume.pdf" download className="cv-btn">
        Download CV
      </a>
    </nav>
  );
}
