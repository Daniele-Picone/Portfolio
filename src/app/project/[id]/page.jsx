import { projects } from "@/data/progject.js";
import './page.css'

export default function ProjectPage({ params }) {
  const project = projects.find(p => String(p.id) === params.id);

  if (!project) return <p style={{ padding: "2rem" }}>Progetto non trovato</p>;

  return (
    <div className="ProjectPage">
        <div className="projectBgCard">
          <h1>{project.title}</h1>
          <img src={project.img} alt="" />
          <p>{project.description}</p>
      <div>
        <h3>Tecnologie:</h3>
        <ul>
          {project.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
      <div>
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
