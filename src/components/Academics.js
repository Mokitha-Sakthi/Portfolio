import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Smart Vending Machine",
    description: "Implemented algorithms for managing stock and automatic restocking notifications.",
    details: "DSA concepts for stock management."
  },
  {
    title: "Portfolio Website",
    description: "Created a personal portfolio website to showcase projects and skills, featuring responsive design and interactive elements.",
    details: "Developed using React.js framework."
  },
  {
    title: "DAA - Virus Spread Simulation",
    description: "Developed a web-based simulation to model the spread of an epidemic in a population using proximity-based infection probability and daily vaccination strategies.",
    details: "Used Java - Visualization shows infection, recovery, and vaccination trends over time."
  },
  {
    title: "Event Organization Website",
    description: "Built a website for managing and organizing events with user authentication and admin dashboard.",
    details: "HTML, CSS, JavaScript."
  },
  {
    title: "StudyHive (ONGOING)",
    description: "Building a website that has academic organizer for students and to find study partners.",
    details: "Uses Reactjs."
  },
  {
    title: "Mobile App (ONGOING)",
    description: "Building an app that consists of mini games.",
    details: "Uses Flutter."
  },
];

const skills = [
  "Python", "Java", "C",
  "HTML", "CSS", "JavaScript", "React.js",
  "Database Management",
  "Google Cloud", "Firebase",
];

// Slide variants
const slideVariants = {
  left: {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  right: {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

export default function Academics() {
  const sections = [
    {
      title: "Education",
      content: (
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
      ),
    },
    {
      title: "Skills",
      content: (
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-item" key={i}>
              {skill}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <>
          {projects.map(({ title, description, details }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              details={details}
            />
          ))}
        </>
      ),
    },
  ];

  return (
    <section id="education">
      <h1>Academics</h1>

      {/* Alternate slide for section-boxes */}
      {sections.map((section, index) => (
        <motion.div
          className="section-box"
          key={section.title}
          variants={index % 2 === 0 ? slideVariants.left : slideVariants.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>{section.title}</h3>
          {section.content}
        </motion.div>
      ))}

      {/* Certifications and Highlights */}
      <motion.div
        className="cert-highlights"
        variants={slideVariants.left}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="cert section-box">
          <h3>Certifications</h3>
          <ul>
            <li>Google Cloud Computing Foundations Certificate</li>
            <li>AWS Cloud Engineer (AWS Academy collaboration with Amrita University)</li>
            <li>Udemy - The Complete Data Structures & Algorithms Course in Python (46+ H)</li>
            <li>Datacom Software Development Job Simulation (Forage)</li>
          </ul>
          <h3>Ongoing Certifications</h3>
          <ul>
            <li>Oracle AI Foundations</li>
            <li>AWS Academy Cloud Foundations</li>
          </ul>
        </div>

        <div className="cert section-box">
          <h3>Highlights</h3>
          <ul>
            <li>3rd in CodeBreaker, Pragati'24</li>
            <li>Silver Medal - IOM</li>
            <li>Bronze Medal - IOEL</li>
            <li>Proficiency Award for CBSE 10th Board</li>
            <li>1st Position in School Sports Rendezvous Competition (Feb 2021)</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
