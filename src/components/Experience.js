import React from "react";
import Timeline from "./Timeline";

const experienceData = [
  { year: "July 2025", description: "Idea Club - Core Team" },
  { year: "April 2025 - June 2025", description: "Intern at TSQATAR" },
  { year: "March 2025", description: "Genesis IIC event - Cohead(logistic)" },
  { year: "February 2025", description: "Volunteer at SaaS Connect Summit, assisted in event coordination and logistics." },
  { year: "October 2024", description: "Anokha Tech Fest - Logistics team member" }
];

export default function Experience() {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <Timeline items={experienceData} />
    </section>
  );
}
