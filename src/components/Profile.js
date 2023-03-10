import React from 'react';
import { LinkedIcon, GithubIcon, EmailIcon, PhoneIcon } from '../Icons';
export default function Profile() {
  const skills = [
    {
      skill: 'HTML',
    },
    {
      skill: 'CSS',
    },
    {
      skill: 'JavaScript',
    },
    {
      skill: 'React',
    },
    {
      skill: 'Redux',
    },
    {
      skill: 'NPM',
    },
    {
      skill: 'Bootstrap',
    },
    {
      skill: 'MUI',
    },
    {
      skill: 'SCSS',
    },
    {
      skill: 'Agile',
    },
  ];

  const Projects = [
    {
      projectName: 'Tic-Tac-Toe',
      link: 'https://react-h1ujv6.stackblitz.io',
      info: "Built a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
    },
    {
      projectName: 'To-Do-List',
      link: 'https://react-ca1uhf.stackblitz.io',
      info: 'Built To-do-list which will offer a way to increase productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively',
    },
    {
      projectName: 'Employees Profile',
      link: 'https://6405c7087d8cac627bc028bc--super-gnome-a5824a.netlify.app/',
      info: 'Built Employees profile list, which will show information about employees with ability to switch account.Rounting for different pages',
    },
  ];
  return (
    <>
      <div className="home-wrapper">
        <div className="title-container">
          <h1 className="mb-0">Hello, I'm</h1>{' '}
          <h1 className="mt-0">Nisha More</h1>
          <h2 className="mt-0 mb-05 ">Front end react developer</h2>
          <p className="info mb-0">
            A highly skilled front end software developer with 1.5 years of
            experience in developing and designing user-friendly websites and
            web applications. Proficient in HTML, CSS, JavaScript, and
            frameworks such as React and Redux. Strong problem-solving skills
            and ability to work well in a team.
          </p>
        </div>
        <img className="Logo1" width="300" height="300" />
      </div>
      <div className="d-flex d-block">
        <div className="skill-container">
          <h1 className="mb-05">Technical skills</h1>
          <div className="skills-wrapper">
            {skills.map((item, idx) => {
              return (
                <div key={idx} className="skillCard skill-cards">
                  <h5 className="info skill-INFO">{item.skill}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-05">My projects</h1>
        <div className="skills-wrapper project-wrapper">
          {Projects.map((item, idx) => {
            return (
              <div key={idx} className="skillCard project-card">
                <a href={item.link} target="_new">
                  <h5 className="mb-0 mt-0">{item.projectName}</h5>
                  <p className="info skill-INFO mb-0">{item.info}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="mb-05">Get in touch</h1>
        <div className="icons-wrapper mt-0">
          <a href="https://www.linkedin.com/in/nishamore98/" target="_blank">
            <LinkedIcon />
          </a>
          <a href="https://github.com/nishamore98" target="_blank">
            <GithubIcon />
          </a>
          <a href="mailto:nisha.more9498@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <a href="tel:+91 7972630959" target="_blank">
            <PhoneIcon />
          </a>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
