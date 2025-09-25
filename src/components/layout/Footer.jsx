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
          <li><Link href="#home" className="footer-link">Home</Link></li>
          <li><Link href="#about" className="footer-link">About</Link></li>
          <li><Link href="#projects" className="footer-link">Projects</Link></li>
          <li><Link href="#contact" className="footer-link">Contact</Link></li>
        </ul>
        <ul className="footer-links  footer-icone">
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
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
