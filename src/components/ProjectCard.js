import React, { useState } from "react";

export default function ProjectCard({ title, description, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card">
      <div
        className="project-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
          padding: "0.5rem 0"
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span style={{ fontSize: "1.5rem", lineHeight: "1" }}>
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <div className="project-details" style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}>
          <p><strong>{description}</strong></p>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}
