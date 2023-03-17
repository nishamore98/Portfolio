import React from "react";
import { LinkedIcon, GithubIcon, EmailIcon, PhoneIcon } from "../Icons";
import HTML from "../png/HTML.png";
import css from "../png/css1.png";
import js from "../png/js-logo.webp";
import bootstrap from "../png/bootstrap.png";
import mui from "../png/mui.png";
import npm from "../png/npm.png";
import react from "../png/react.webp";
import redux from "../png/redux.png";
import sass from "../png/sasss.png";
import clsx from "clsx";
import Carousel from "./ProjectCarousel";
import ProjecctCarousel from "./ProjectCarousel";

export default function Profile() {
  const skills = [
    {
      skill: "HTML",
      png: HTML,
    },
    {
      skill: "CSS",
      png: css,
    },
    {
      skill: "JavaScript",
      png: js,
    },
    {
      skill: "React",
      png: react,
    },
    {
      skill: "Redux",
      png: redux,
    },
    {
      skill: "NPM",
      png: npm,
    },
    {
      skill: "Bootstrap",
      png: bootstrap,
    },
    {
      skill: "MUI",
      png: mui,
    },
    // {
    //   skill: "SASS",
    //   png: sass,
    // },
  ];

  const Projects = [
    {
      projectName: "Tic-Tac-Toe",
      link: "https://react-h1ujv6.stackblitz.io",
      info: "Built a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
    },
    {
      projectName: "To-Do-List",
      link: "https://react-ca1uhf.stackblitz.io",
      info: "Built To-do-list which will offer a way to increase productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively",
    },
    {
      projectName: "Employees Dashboard",
      link: "https://6405c7087d8cac627bc028bc--super-gnome-a5824a.netlify.app/",
      info: "Built Employees profile list, which will show information about employees with ability to switch account.Rounting for different pages",
    },
  ];
  const Tools = [
    {
      skill: "Github",
    },
    {
      skill: "VS Code",
    },
    {
      skill: "Docker",
    },
    {
      skill: "Jenkins",
    },
    {
      skill: "Jira",
    },
    {
      skill: "GTM",
    },
  ];
  const softSkills = [
    {
      skill: "Team player",
    },
    {
      skill: "Creative",
    },
    // {
    //   skill: 'Team building',
    // },
    {
      skill: "Communication",
    },
    {
      skill: "Collaboration",
    },
    {
      skill: "Adaptive",
    },

    {
      skill: "Problem solving",
    },
  ];
  return (
    <>
      <div id="home" className="home-wrapper m-5">
        <div className="title-container">
          <h1 className="mt-0 name">Hello, I'm Nisha More</h1>
          <p className="mt-0 mb-05 line-1 anim-typewriter">
            Front end react developer
          </p>
        </div>
        <p className="info mb-0 ">
          A highly skilled front end software developer with 1.5+ years of
          experience in developing and designing user-friendly visually
          appealing websites and web applications. Proficient in HTML, CSS,
          JavaScript, and libraries such as React and Redux. Strong
          problem-solving skills and ability to work well in a team. My
          extensive knowledge of technical standards helps me manage projects
          efficiently.
        </p>
      </div>
      <div id="skills" className="d-flex d-block m-5">
        <div className="skill-container">
          <h1 className="mb-05 skill-heading">My technical skills</h1>
          <div className="skills-wrapper">
            {skills.map((item, idx) => {
              return (
                <div key={idx} className="skill-cards ">
                  <img
                    src={item.png}
                    className={clsx("rotate", item.png == redux && "reduxSize")}
                    width="60px"
                    height="60px"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill-container">
          <h1 className="mb-05 skill-heading">Tools i know</h1>
          <div className="skills-wrapper">
            {Tools.map((item, idx) => {
              return (
                <div key={idx} className="skillCard glow-on-hover">
                  <p className="info skill-INFO ">{item.skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="projects" className="m-5">
        <h1 className="mb-05 skill-heading my-projects">My projects</h1>
        <div className="skills-wrapper project-wrapper">
          <ProjecctCarousel />
        </div>
      </div>
      <div id="Contacts" className="m-5">
        <h1 className="mb-05 skill-heading my-projects">Get in touch</h1>
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
