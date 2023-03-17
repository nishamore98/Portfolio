import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./SkillsStyle.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function ProjecctCarousel() {
  const Projects = [
    {
      projectName: "Employees Dashboard",
      link: "https://6405c7087d8cac627bc028bc--super-gnome-a5824a.netlify.app/",
      info: "Built Employees profile list, which will show information about employees with ability to switch account.Rounting for different pages",
    },
    {
      projectName: "To-Do-List",
      link: "https://react-ca1uhf.stackblitz.io",
      info: "Built To-do-list which will offer a way to increase productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively",
    },
    {
      projectName: "Tic-Tac-Toe",
      link: "https://react-h1ujv6.stackblitz.io",
      info: "Built a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
    },
  ];
  return (
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {Projects.map((item, index) => (
            <Item key={index}>
              <a className="projectlinks" href={item.link}>
                <h4 className="projectTitle">{item.projectName}</h4>
                <p>{item.info}</p>
              </a>
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
