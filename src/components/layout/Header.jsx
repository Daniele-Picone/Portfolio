import Link from "next/link"

import './Header.css'

export default function Header() {
    return(
        <header className="header">
        <nav className="nav">
            <div className="logo"><h1>IL MIO PORTFOLIO</h1></div>
            <ul className="nav-links">
                <li><Link href="/" className="nav-link">Home</Link></li>
                <li><Link href="#timeline" className="nav-link">Carrer</Link></li>
                <li><Link href="#skills" className="nav-link">Skills</Link></li>
                <li><Link href="/project" className="nav-link">Projects</Link></li>
            </ul>
        </nav>
    </header>
    )
}