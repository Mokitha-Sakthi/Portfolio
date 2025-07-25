// src/components/TechStack.js
import { FaHtml5, FaJs, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si'; // For Firebase, you might find it in `si` (Simple Icons)

const TechStack = () => {
  const skills = [
    { name: 'HTML5', component: FaHtml5, color: '#E34F26' },
    { name: 'JavaScript', component: FaJs, color: '#F7DF1E' },
    { name: 'CSS', component: FaCss3Alt, color: '#1572B6' },
    { name: 'Firebase', component: SiFirebase, color: '#FFCA28' },
    { name: 'React', component: FaReact, color: '#61DAFB' },
  ];

  return (
    <div className="tech-stack-container">
      <h2 className="tech-stack-heading">TECHSTACK</h2>
      <div className="skills-row">
        {skills.map((skill, index) => {
          const IconComponent = skill.component;
          return (
            <div key={index} className="skill-badge" style={{ backgroundColor: skill.color }}>
              {IconComponent && <IconComponent className="skill-icon" />}
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};