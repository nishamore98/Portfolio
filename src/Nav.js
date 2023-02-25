import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './Home';

export default function Nav() {
  const data = [
    'HTML',
    'CSS',
    'JavaScript',
    'DOM Manipulation',
    'JSON',
    'AJAX',
    'MySQL',
    'React',
    'Problem-Solving',
  ];
  function skillBtn() {
    data.map((item) => {
      return (
        <div className="skillCard" width="50" height="30">
          {item}
        </div>
      );
    });
  }

  return <div>{skillBtn()}</div>;
}
