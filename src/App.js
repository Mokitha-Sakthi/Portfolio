import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Academics from "./components/Academics";
import Social from "./components/Social"; // 👈 ADDED
import ScrollTop from "./components/ScrollTop";

import "./style.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Experience/>
            </>
          }
        />
        <Route path="/experience" element={<Experience />} />
      
        <Route path="/academics" element={<Academics />} />
        <Route path="/socials" element={<Social />} /> {/* 👈 ADDED */}
      </Routes>
      <ScrollTop />
    </Router>
  );
}
