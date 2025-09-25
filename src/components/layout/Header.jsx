import Link from "next/link"

import './Header.css'

export default function Header() {
    return(
        <header className="header">
        <nav className="nav">
            <div className="logo"><h1> PORTFOLIO</h1></div>
            <ul className="nav-links">
                <li><Link href="#" className="nav-link">Home</Link></li>
                <li><Link href="#" className="nav-link">About</Link></li>
                <li><Link href="#" className="nav-link">Projects</Link></li>
                <li><Link href="#" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    </header>
    )
}