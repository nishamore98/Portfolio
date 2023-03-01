import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-black">
      <Link to="/">Home</Link>
      {/* <a href="/">Projects</a> */}
      <Link to="/Skills">Skills</Link>
    </nav>
  );
}
