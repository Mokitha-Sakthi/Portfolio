import React, { useState } from "react";
import Timeline from "./Timeline";

export default function AboutExperience() {
  const [visibleFact, setVisibleFact] = useState(null);

  const funFacts = [
    { id: 1, title: "Hobbies", text: "Crocheting, skateboarding, skating and other creative arts." },
    { id: 2, title: "Hidden Talent", text: "I can juggle balls in 5-6 different ways." },
    { id: 3, title: "Favorite subjects", text: "Excluding CS I love English, History, and Archeology." },
  ];

  const experienceData = [
    { year: "July 2025", description: "Idea Club - Core Team" },
    { year: "April 2025 - June 2025", description: "Intern at TSQATAR" },
    { year: "March 2025", description: "Genesis IIC event - Cohead (logistics)" },
    { year: "February 2025", description: "Volunteer at SaaS Connect Summit, assisted in event coordination and logistics." },
    { year: "October 2024", description: "Anokha Tech Fest - Logistics team member" },
  ];

  return (
    <section id="about-experience" className="about-experience">
      <div className="me glass">
        <h1>About Me</h1>
        <p>Hello everyone, I am Mokitha Sakthi. I am currently pursuing B.Tech Computer Science Engineering.</p>
        <p>I chose CS because I thought it’s a fun and creative subject where you can explore so much. The sky’s the limit.</p>
        <p>My interested fields are Cloud, Full Stack, Mobile App Development, and UI/UX.</p>
        <p>My dream is to combine archeology and computer science.</p>
        <p><strong>Gmail:</strong> mokithasakthi@gmail.com</p>

        <h2>Fun Facts About Me</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {funFacts.map((fact) => (
            <li key={fact.id} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => setVisibleFact((prev) => (prev === fact.id ? null : fact.id))}
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "10px",
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {fact.title}
              </button>
              {visibleFact === fact.id && (
                <div
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "8px 12px",
                    border: "1px solid #00acc1",
                    marginTop: "5px",
                    borderRadius: "6px",
                  }}
                >
                  {fact.text}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="experience glass">
        <h1>Experience</h1>
        <Timeline items={experienceData} />
      </div>
    </section>
  );
}
