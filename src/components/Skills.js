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
      skill: 'Jira',
    },
    {
      skill: 'GTM',
    },
  ];
  const softSkills = [
    {
      skill: 'Team player',
    },
    {
      skill: 'Creative',
    },
    // {
    //   skill: 'Team building',
    // },
    {
      skill: 'Communication',
    },
    {
      skill: 'Collaboration',
    },
    {
      skill: 'Adaptive',
    },

    {
      skill: 'Problem solving',
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
                <div key={idx} className="skill-wrapper">
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
        <div className="d-flex d-block skill">
          <div className="skill-container">
            <h1 className="mb-05">Tools</h1>
            <div className="skills-wrapper">
              {Tools.map((item, idx) => {
                return (
                  <div key={idx} className="skillCard skill-cards">
                    <h5 className="info skill-INFO">{item.skill}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex d-block">
            <div className="skill-container">
              <h1 className="mb-05">Soft skills</h1>
              <div className="skills-wrapper">
                {softSkills.map((item, idx) => {
                  return (
                    <div key={idx} className="skillCard skill-cards">
                      <h5 className="info skill-INFO">{item.skill}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
