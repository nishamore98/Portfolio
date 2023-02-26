import React from 'react';
import './style.css';
import { LinkedIcon, GithubIcon, EmailIcon } from './Icons';

export default function Home() {
  const data = [
    {
      skill: 'HTML',
      info: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      skill: 'CSS',
      info: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      skill: 'JavaScript',
      info: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. ',
    },
    {
      skill: 'DOM Manipulation',
      info: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. ',
    },
    {
      skill: 'React',
      info: 'React is a JavaScript library for building user interfaces.React is used to build single-page applications.React allows us to create reusable UI components.',
    },
    {
      skill: 'Redux',
      info: 'Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React.',
    },
    {
      skill: 'NPM',
      info: 'npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.',
    },
  ];
  return (
    <div className="text_align-left">
      <div className="home-wrapper">
        <div className="title-container">
          <h1 className="mb-0">Hello, I'm Nisha More</h1>
          <h2 className="mt-0 mb-05 ">Front end React developer</h2>
          <p className="info mb-0">
            A highly skilled front end software developer with 1.5 years of
            experience in developing and designing user-friendly websites and
            web applications. Proficient in HTML, CSS, JavaScript, and
            frameworks such as React and Redux. Strong problem-solving skills
            and ability to work well in a team.
          </p>
          <h2 className="mb-05 ">find me on</h2>
          <div className="icons-wrapper mt-0">
            <a href="https://www.linkedin.com/in/nisha-more-a58b72146/">
              <LinkedIcon />
            </a>
            <a href="https://github.com/nishamore98">
              <GithubIcon />
            </a>
            <a href="mailto:nisha.more9498@gmail.com" target="_blank">
              <EmailIcon />
            </a>
            <br />
            <br />
            <h2 className="mb-05 ">Educational background</h2>
            <div>
              <h4 className="mb-05">
                Matoshri College Of Engineering and Research center, Nashik -
                B.E. Electrical{' '}
              </h4>
              <p className="mt-0">JUNE 2018 - AUG 2021 CGPA - 7.46</p>
              <h4 className="mb-05">
                K.K Wagh Women's Polytechnic, Nashik- Diploma in Electronics and
                Telecommunication
              </h4>
              <p className="mt-0"> JULY 2014 - JUNE 2018 CGPA - 7</p>{' '}
              <h4 className="mb-05">Projects</h4>{' '}
              <p className="mt-0">
                Smart mask vending machine and thermal body temperature
                monitoring, alert system with automatic sanitiser{' '}
              </p>
              <p className="mt-0">Dual input inverter (Solar & AC)</p>
            </div>
          </div>
        </div>
        <img className="Logo" width="150" height="150" />
      </div>

      <div>
        <h1 className="mb-05">My technical skills</h1>
        <div className="skills-wrapper">
          {data.map((item, idx) => {
            return (
              <div key={idx} className="skillCard">
                {item.skill}
                <p className="info skill-INFO">{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <h1 className="mb-0">My work experience</h1>
      <div className="home-wrapper">
        <h3 className="job-title">Frontend Engineer at ITILITE</h3>
      </div> */}
    </div>
  );
}
