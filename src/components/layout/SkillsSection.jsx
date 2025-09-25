"use client";
import './SkillsSection.css';

export default function SkillsSection() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js",
    "Laravel", "Bootstrap", "PHP", "MySQL"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Competenze</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}