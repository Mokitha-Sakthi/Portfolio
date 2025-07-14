import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"; // ✅ your combined About+Experience
import Academics from "./components/Academics";
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
              <About />
            </>
          }
        />
        <Route path="/academics" element={<Academics />} />
      </Routes>
      <ScrollTop />
    </Router>
  );
}
