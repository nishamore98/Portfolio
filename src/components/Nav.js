import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Skills from "./Skills";
import "../style.css";

export default function () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Profile />} />

          <Route index path="/Skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
