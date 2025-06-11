import { useState } from "react";
import "../index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          src="../assets/redChil_nobg.jpg"
          alt="RedChil Logo"
          className="logo-img"
        />
      </div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}

export default Navbar;
