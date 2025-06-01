// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./css/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Početna
          </Link>
        </li>
        <li>
          <Link to="/biography" className="nav-link">
            O meni
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
