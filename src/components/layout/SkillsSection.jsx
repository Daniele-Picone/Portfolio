"use client";
import './SkillsSection.css';
import Link from 'next/link';
import { skills } from '@/data/skills';

export default function SkillsSection() {
 

  return (
    <section id="skills" className="skills-section">
      <h2>Competenze</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <Link href={skill.link} key={skill.name} className="skill-card">{skill.name}</Link>
        ))}
      </div>
    </section>
  );
}