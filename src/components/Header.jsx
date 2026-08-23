import { useState } from "react";
import { NAV_ITEMS } from "../data/content.js";
import useScrolled from "../hooks/useScrolled.js";

export default function Header({ activeId }) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="container header-inner">
        <a href="#hero" className="logo">
          Disha<span className="dot">.</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${activeId === item.id ? " active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary nav-cta">
          Contact
        </a>

        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobileNav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`nav-mobile${menuOpen ? " open" : ""}`} id="mobileNav" aria-label="Mobile">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="nav-link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
