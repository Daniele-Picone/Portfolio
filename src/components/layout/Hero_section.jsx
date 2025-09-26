"use client";

import './Hero_section.css';
import { FaGamepad } from "react-icons/fa";
import {  FaFutbol } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';


export default function HeroSection() {
    return (
        <section id="home" className="hero">
        <h1 className="hero-title">Chi sono?</h1>
        <div className="hero-section">
        <div className="hero-content">
        <h2 className='hero-name' > Daniele Picone</h2>
        <div className="hero-subtitle"> <p> Junior full Stack Developer </p></div>
        <div className="hero-description">
        <p>
        Ci sono due mondi che mi appassionano profondamente, anche se a prima vista possono sembrare lontani: l’arte dell’ospitalità e la logica dell’informatica. Nel lavoro in sala ho scoperto quanto ogni dettaglio possa fare la differenza: un sorriso al momento giusto, l’abbinamento perfetto tra vino e piatto, la gestione armoniosa di uno spazio pieno di persone. 
        Sono piccole cose che, messe insieme, creano esperienze memorabili.
        La programmazione è una passione che sto coltivando come  Junior Full Stack Developer.
        Ho seguito diversi corsi e ho già messo in pratica alcune competenze, con la voglia di mettermi in gioco e accrescere le mi compenteze in questo ambito.
        </p>
        <div className="hobby-zone">
        <h3 className='hero-hobby' > I miei Hobby</h3>
        <div className="hobby-span">
        <span> <FaGamepad className='icone'/> Gaming </span>
        <span> < FaFutbol/> Calcio </span>
        <span> < FaPhotoVideo/>  Fotografia </span>
        </div>
        
        </div>
        
        </div>
        
        <div className="cta-buttons">
        <a href="#projects" className="btn btn-primary">Vedi Progetti</a>
        <a href="#contact" className="btn btn-secondary">Contattami</a>
        </div>
        
        </div>
        <div className="hero-image">
        <div className="img-container">
        <img className="img" src="/Profilo.JPG" alt="Foto profilo" />
        </div>
        </div>
        </div>
        
        </section>
    )
}