import React from 'react';
export default function Profile() {
  return (
    <div className="home-wrapper">
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
  );
}
