"use client";
import "./TimelineSection.css";

export default function TimelineSection() {
  return (
    <section id="timeline" className="timeline">
      <h2 className="timeline-title">Il mio percorso</h2>
      <div className="timeline-container">

        <div className="timeline-item left">
          <div className="content">
            <h3>2016</h3>
            <p>Diploma Alberghiero – Cucina</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>2019</h3>
            <p>
             Trasferimento in <strong>Toscana</strong> per nuove oppurtunità lavorative
            </p>
          </div>
        </div>
       
      <div className="timeline-item left">
          <div className="content">
            <h3>2022</h3>
            <p>
              Prima esperienza lavorativa in un ristorante <strong>Stellato Micheline</strong>.
            </p>
          </div>
        </div>

      <div className="timeline-item right">
          <div className="content">
            <h3>2024</h3>
            <p>
              Diploma Da <strong>Sommellier</strong>.
            </p>
          </div>
        </div>

         <div className="timeline-item left">
          <div className="content">
            <h3>2024 - oggi</h3>
            <p>
              Prima esperienza da <strong>Maitre-Sommelier</strong>.
              Inizio studi di <strong>Programmazione Full Stack developer</strong>
            </p>
          </div>
        </div>


     

      </div>
    </section>
  );
}
