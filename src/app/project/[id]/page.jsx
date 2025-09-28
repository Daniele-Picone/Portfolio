import { projects } from "@/data/progject.js";
import './page.css'
import Link from "next/link";

export default function ProjectPage({ params }) {
  const project = projects.find(p => String(p.id) === params.id);

  if (!project) return <p style={{ padding: "2rem" }}>Progetto non trovato</p>;

  return (
    <div className="ProjectPage">
        <Link rel="stylesheet" className="back_btn"  href="/project" > Torna dietro </Link>
        <div className="projectBgCard">
          <h1>{project.title}</h1>
          <img src={project.img} alt="" />
          <p className="project-text" >{project.description}</p>
      <div className="crd_links_section"  >
        <h3>Tecnologie usate:</h3>
        <ul className="tech_links" >
          {project.tech.map((t, i) => (
           
            <li  className="skill-card" key={i}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="crd_code_links" >
        <a href={project.link} target="_blank" rel="noreferrer">🌐 Live</a>{" | "}
        <a href={project.github} target="_blank" rel="noreferrer">💻 Code</a>
      </div>
        </div>
    </div>
  );
}

// genera rotte statiche
export function generateStaticParams() {
  return projects.map(project => ({ id: String(project.id) }));
}
