import { Code } from "lucide-react";

export default function Navbar({ activeSection, onScroll, isScrolled }) {
  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <Code className="logo-icon" />
          <span>Portfolio</span>
        </div>
        <div className="nav-links">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onScroll(section)}
              className={`nav-link ${activeSection === section ? "active" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
