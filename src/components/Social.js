import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style.css";

export default function Social() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/Mokitha-Sakthi" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mokitha-sakthi-rajapandiyan-42b550308" },
    { label: "Instagram", url: "https://instagram.com/mokithasakthi" },
    { label: "Resume", url: "/Mokitha Resume.pdf" },
  ];

  return (
    <motion.div
      className="social-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>Connect With Me</h2>

      <div className="social-links">
        {socialLinks.map(({ label, url }, i) => (
          <motion.a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * i, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.a>
        ))}
      </div>

      <div className="message-form">
        <h3>Send Me a Message</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.p
              className="confirmation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
            >
              Thanks for your message!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
