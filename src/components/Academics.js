import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Event Organization Website",
    description: "HTML, CSS, JavaScript",
    details: "Built a website for managing and organizing events with user authentication and admin dashboard."
  },
  {
    title: "Smart Vending Machine",
    description: "DSA concepts for stock management",
    details: "Implemented algorithms for managing stock and automatic restocking notifications."
  },
];

const skills = [
  "Python", "Java", "C", "C++", "Haskell",
  "HTML", "CSS", "JavaScript", "React.js",
  "Database Management",
  "Cloud (AWS, Firebase)"
];

export default function Academics() {
  return (
    <section id="education">
      <h1>Academics</h1>
      <div className="container">
        <div className="box">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Amrita Vishwa Vidyapeetham, Coimbatore</strong> (2023–2027)
              <br />
              B.Tech Computer Science Engineering
            </li>
            <br />
            <li>
              <strong>DPS-Modern Indian School, Doha, Qatar</strong>
              <br />
              Higher Secondary: 85.6%, Secondary: 95%
            </li>
          </ul>
        </div>

        <div className="box">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="projects">
        <h3>Projects</h3>
        {projects.map(({ title, description, details }) => (
          <ProjectCard key={title} title={title} description={description} details={details} />
        ))}
      </div>

      <div className="cert">
        <h3>Certifications</h3>
        <ul>
          <li>Google Cloud Courses: Digital Transformation, AI Innovation</li>
          <li>AWS Cloud Engineer</li>
          <li>Datacom Software Development Job Simulation(Forage)</li>
        </ul>
        <h3>Ongoing Certifications</h3>
        <ul>
          <li>Oracle AI Foundations</li>
        </ul>
      </div>

      <div className="cert">
        <h3>Highlights</h3>
        <ul>
          <li>3rd in CodeBreaker, Pragati'24</li>
          <li>Silver Medal - IOM</li>
          <li>Bronze Medal - IOEL</li>
          <li>Proficiency Award for CBSE 10th Board</li>
        </ul>
      </div>
    </section>
  );
}
