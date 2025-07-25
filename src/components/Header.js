import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const handleExperienceClick = (e) => {
    if (location.pathname !== "/") {
      // Let the link behave normally (go to /#about-experience)
    } else {
      e.preventDefault();
      const experienceSection = document.getElementById("about-experience");
      if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} end>
          Home
        </NavLink>

        <a
          href="/#about-experience"
          onClick={handleExperienceClick}
          className={location.hash === "#about-experience" ? "active-link" : ""}
          style={{ marginLeft: "1rem" }}
        >
          Experience
        </a>

        <NavLink to="/academics" className={({ isActive }) => (isActive ? "active-link" : "")} style={{ marginLeft: "1rem" }}>
          Academics
        </NavLink>

        <NavLink to="/socials" className={({ isActive }) => (isActive ? "active-link" : "")} style={{ marginLeft: "1rem" }}>
          Socials
        </NavLink>
      </nav>
    </header>
  );
}
