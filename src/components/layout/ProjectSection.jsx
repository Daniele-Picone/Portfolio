"use client";

import Link from "next/link";
import { projects } from "@/data/progject.js"; 
import "./ProjectSection.css";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">I Miei Progetti</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Link key={project.id}  href={`/project/${project.id}`} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, index) => (
                <span key={index} className="tech">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
