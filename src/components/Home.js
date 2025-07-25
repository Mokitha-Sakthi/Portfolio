import React, { useState, useEffect } from "react";
import "../style.css"; // Adjust path if needed

export default function Home() {
  const [typedName, setTypedName] = useState("");
  const [typedPortfolio, setTypedPortfolio] = useState("");
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  
  const fullName = "Mokitha Sakthi";
  const portfolioText = "Portfolio";
  const image = process.env.PUBLIC_URL + "/images/blue.png";

  // Fun facts content
  const funFacts = {
    hobbies: "I love reading, origami and any crafts, crocheting, and exploring new coding frameworks in my free time.",
    talent: "I know 5-6 juggling tricks and I have a knack for remembering random historical facts!",
    subjects: "Besides Computer Science, I'm fascinated by Archaeology, Ancient History, and Digital Art. I also enjoy studying different cultures and languages."
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  useEffect(() => {
    let nameIndex = 0;
    
    // First typing effect for name
    const nameTypingInterval = setInterval(() => {
      if (nameIndex < fullName.length) {
        setTypedName(fullName.substring(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameTypingInterval);
        // Start portfolio typing after name is complete
        setShowPortfolio(true);
        
        let portfolioIndex = 0;
        const portfolioTypingInterval = setInterval(() => {
          if (portfolioIndex < portfolioText.length) {
            setTypedPortfolio(portfolioText.substring(0, portfolioIndex + 1));
            portfolioIndex++;
          } else {
            clearInterval(portfolioTypingInterval);
          }
        }, 150);
      }
    }, 150);

    return () => clearInterval(nameTypingInterval);
  }, []);

  return (
    <div className="home-container">
      {/* Left side: Heading + Image */}
      <div className="intro-container">
        {/* Heading positioned above image */}
        <div className="heading-box">
          <h1 className="typing-name">{typedName || "\u00A0"}</h1>
          <h2 className="typing-portfolio">{showPortfolio ? typedPortfolio : "\u00A0"}</h2>
        </div>

        {/* Image below heading */}
        <div className="image-gallery">
          <img src={image} alt="Mokitha Sakthi Profile" />
        </div>
      </div>

      {/* Right side: About Me */}
      <div className="about-me-box">
        <h2>About Me</h2>
        <p>Hello everyone, I am Mokitha Sakthi. I am currently pursuing B.Tech Computer Science Engineering.</p>
        <p>I chose CS because I thought it's a fun and creative subject where you can explore so much. The sky's the limit.</p>
        <p>My dream is to combine archaeology and computer science.</p>
        <p><b>Interests: </b>Cloud, Full Stack, Mobile App Development, and UI/UX.</p>
        <p><b>Languages: </b>English, Tamil, Hindi, German(learning)</p>
        <p><strong>Gmail:</strong> mokithasakthi@gmail.com</p>

        <h3>Fun Facts About Me</h3>
        <div className="fun-facts-buttons">
          <button 
            onClick={() => toggleSection('hobbies')}
            className={expandedSection === 'hobbies' ? 'active' : ''}
          >
            Hobbies {expandedSection === 'hobbies' ? '-' : '+'}
          </button>
          {expandedSection === 'hobbies' && (
            <div className="fun-fact-content">
              {funFacts.hobbies}
            </div>
          )}
          
          <button 
            onClick={() => toggleSection('talent')}
            className={expandedSection === 'talent' ? 'active' : ''}
          >
            Hidden Talent {expandedSection === 'talent' ? '-' : '+'}
          </button>
          {expandedSection === 'talent' && (
            <div className="fun-fact-content">
              {funFacts.talent}
            </div>
          )}
          
          <button 
            onClick={() => toggleSection('subjects')}
            className={expandedSection === 'subjects' ? 'active' : ''}
          >
            Favorite subjects {expandedSection === 'subjects' ? '-' : '+'}
          </button>
          {expandedSection === 'subjects' && (
            <div className="fun-fact-content">
              {funFacts.subjects}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}