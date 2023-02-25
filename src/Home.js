import React from 'react';
import './style.css';
import Button from '@mui/material/Button';

export default function Home() {
  const contactInfo = () => {
    window.location.href = 'https://www.linkedin.com/in/nisha-more-a58b72146/';
  };
  return (
    <>
      <div className="home-wrapper">
        <div className="title-container">
          <h1 className="mb-0">Hello, I'm Nisha</h1>
          <h2 className="mt-0">React developer</h2>
          <Button variant="contained" color="secondary" onClick={contactInfo}>
            Get in touch
          </Button>
        </div>
        <img className="Logo" width="150" height="150" />
      </div>
    </>
  );
}
