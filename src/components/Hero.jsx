import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Globe,
  Smartphone,
  ChevronDown,
} from "lucide-react";

export default function Hero({ onScroll }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Abdullah Zayan</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineering</h2>
          <p className="hero-description">
            Passionate about creating innovative solutions and building amazing
            web experiences. Currently pursuing my degree in Software
            Engineering with a focus on full-stack development.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => onScroll("projects")}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => onScroll("contact")}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/AbdullahZayan"
              target="_blank"
              className="social-link"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-zayan-/"
              target="_blank"
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:abdullahzayan.my@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <Code size={40} />
            <span>Full Stack</span>
          </div>
          <div className="floating-card delay-1">
            <Database size={40} />
            <span>Database</span>
          </div>
          <div className="floating-card delay-2">
            <Globe size={40} />
            <span>Web Dev</span>
          </div>
          <div className="floating-card delay-3">
            <Smartphone size={40} />
            <span>Mobile</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => onScroll("about")}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
