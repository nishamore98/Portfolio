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
          {/* <h2 className="mb-0"></h2>{" "} */}
          <h1 className="mt-0 name">Hello, I'm Nisha More</h1>
          <h1 className="mt-0 mb-05 skil">Front end react developer</h1>
        </div>
        <img className="Logo1 fade-in-image" width="300" height="300" />
      </div>
      <p className="info mb-0 ">
        A highly skilled front end software developer with 1.5+ years of
        experience in developing and designing user-friendly websites and web
        applications. Proficient in HTML, CSS, JavaScript, and libraries such as
        React and Redux. Strong problem-solving skills and ability to work well
        in a team. I’ve worked in large development teams that have sharpened my
        technical skills, improved my communication, and made me understand what
        it takes to meet tight deadlines.My keen interest in programming and
        design helps me find creative solutions to technical challenges and
        develop visually appealing websites. My extensive knowledge of technical
        standards helps me manage projects efficiently.
      </p>
      <div id="skills" className="d-flex d-block m-5">
        <div className="skill-container">
          <div class="containerAnim">
            <h2 class="title">
              <span class="title-word title-word-1">Tech</span>
              <span class="title-word title-word-2">nica</span>
              <span class="title-word title-word-3">lski</span>
              <span class="title-word title-word-4">lls</span>
            </h2>
          </div>
          {/* <h1 className="mb-05">Technical skills</h1> */}
          <div className="skills-wrapper">
            {skills.map((item, idx) => {
              return (
                <div key={idx} className="skill-cards ">
                  {/* <h5 className="info skill-INFO">{item.skill}</h5> */}
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
        <div className="tools-softSkills-wrapper">
          <div className="skill">
            <div className="skill-container">
              <div class="containerAnim">
                <h2 class="title">
                  <span class="title-word title-word-1">T</span>
                  <span class="title-word title-word-2">O</span>
                  <span class="title-word title-word-3">O</span>
                  <span class="title-word title-word-4">ls</span>
                </h2>
              </div>
              <div className="skills-wrapper">
                {Tools.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="skillCard skill-cards glow-on-hover"
                    >
                      <p className="info skill-INFO ">{item.skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="d-flex d-block">
              <div className="skill-container">
                <div class="containerAnim">
                  <h2 class="title">
                    <span class="title-word title-word-1">so</span>
                    <span class="title-word title-word-2">fts</span>
                    <span class="title-word title-word-3">ki</span>
                    <span class="title-word title-word-4">lls</span>
                  </h2>
                </div>
                <div className="skills-wrapper">
                  {softSkills.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className="skillCard skill-cards glow-on-hover width-fit-contnt"
                      >
                        <p className="info skill-INFO ">{item.skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="m-5">
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
      <div id="Contacts" className="m-5">
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
