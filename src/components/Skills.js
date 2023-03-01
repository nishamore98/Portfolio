import React from 'react';
import './SkillsStyle.css';
import clsx from 'clsx';

export default function Skills() {
  const skills = [
    {
      skill: 'HTML',
      percent: '80%',
    },
    {
      skill: 'CSS',
      percent: '70%',
    },
    {
      skill: 'JavaScript',
      percent: '70%',
    },
    {
      skill: 'React',
      percent: '60%',
    },
    {
      skill: 'Redux',
      percent: '80%',
    },
    {
      skill: 'NPM',
      percent: '50%',
    },
    {
      skill: 'Bootstrap',
      percent: '60%',
    },
    {
      skill: 'MUI',
      percent: '70%',
    },
    {
      skill: 'SCSS',
      percent: '70%',
    },
    {
      skill: 'Agile',
      percent: '50%',
    },
  ];
  const Tools = [
    {
      skill: 'Github',
    },
    {
      skill: 'VS Code',
    },
    {
      skill: 'Docker',
    },
    {
      skill: 'Jenkins',
    },
    {
      skill: 'Postman',
    },
    {
      skill: 'phpadminer',
    },
    {
      skill: 'Workbench',
    },
  ];
  return (
    <>
      <div className="d-flex wrapper-skills">
        <div className="skills-heading">
          <h1 className="">Technical skills</h1>
          {skills.map((item, idx) => {
            return (
              <>
                <div className="skill-wrapper">
                  <h3>{item.skill}</h3>
                  <div className="container">
                    <div
                      className={clsx(item.skill, 'skill-box')}
                      width={item.percent}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="skills-heading">
          <h1 className="">Tools</h1>
          {Tools.map((item, idx) => {
            return (
              <>
                <div className="skill-wrapper">
                  <h3>{item.skill}</h3>
                  <div className="container">
                    <div
                      className={clsx(item.skill, 'skill-box')}
                      width={item.percent}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
