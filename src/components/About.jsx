import { User, BookOpen, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a dedicated Software Engineering student with a passion for
              technology and innovation. My journey in programming started
              during high school, and since then, I've been constantly learning
              and exploring new technologies.
            </p>
            <p>
              I enjoy solving complex problems and turning ideas into reality
              through code. My goal is to become a full-stack developer and
              contribute to meaningful projects that make a positive impact.
            </p>
            <div className="about-stats">
              <div className="stat">
                <User size={24} />
                <div>
                  <h3>2+</h3>
                  <p>Years Coding</p>
                </div>
              </div>
              <div className="stat">
                <BookOpen size={24} />
                <div>
                  <h3>10+</h3>
                  <p>Projects</p>
                </div>
              </div>
              <div className="stat">
                <Award size={24} />
                <div>
                  <h3>3.3</h3>
                  <p>GPA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/Profile.jpg" alt="Abdullah Zayan" />
          </div>
        </div>
      </div>
    </section>
  );
}
