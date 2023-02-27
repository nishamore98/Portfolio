import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';
import '../style.css';

export default function () {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
