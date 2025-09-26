"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Portfolio</div>
        <div className="footer-links-section">
            <ul className="footer-links">
                <li><Link href="#home" className="nav-link">Home</Link></li>
                <li><Link href="#timeline" className="nav-link">Carrer</Link></li>
                <li><Link href="#skills" className="nav-link">Skills</Link></li>
                <li><Link href="#projects" className="nav-link">Projects</Link></li>
        </ul>
        <ul id="footIcone" className="footer-links  footer-icone">
          <li>
            <a href="https://www.instagram.com/daniele_piconee/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daniele-picone-9218122b2/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/daniele.picone.140/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com/Daniele-Picone" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
        </div>
       

        <p className="footer-copy">
          © {new Date().getFullYear()} Portfolio. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
