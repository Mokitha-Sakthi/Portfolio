import React from "react";

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map(({ year, description }, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-content">
            <h3>{year}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
