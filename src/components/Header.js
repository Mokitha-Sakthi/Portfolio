import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // If we are on home page, About link will scroll to #about.
  // If on other page, About link should navigate back to home first.
  const handleAboutClick = (e) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first, then scroll after page loads
      // We'll do this by normal link behavior to home with #about anchor
    } else {
      // On home page: smooth scroll to About section, prevent page reload
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} end>
          Home
        </NavLink>

        {/* About link: anchor to #about on home page */}
        <a
          href="/#about"
          onClick={handleAboutClick}
          className={location.hash === "#about" ? "active-link" : ""}
          style={{ marginLeft: "1rem" }}
        >
          About
        </a>

        <NavLink to="/academics" className={({ isActive }) => (isActive ? "active-link" : "")} style={{ marginLeft: "1rem" }}>
          Academics
        </NavLink>
      </nav>
    </header>
  );
}
