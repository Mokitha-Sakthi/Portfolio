import React, { useState, useEffect } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="scroll-top-btn">
      ↑ Top
    </button>
  );
}
