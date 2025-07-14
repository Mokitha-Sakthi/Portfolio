import React, { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard({ title, description, details }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-card" onClick={() => setOpen(true)} style={{cursor: "pointer"}}>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>Click for details</small>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>{title}</h2>
        <p>{details}</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </>
  );
}
