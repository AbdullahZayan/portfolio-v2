export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 90, color: "#F7DF1E" },
    { name: "React", level: 85, color: "#61DAFB" },
    { name: "Python", level: 40, color: "#3776AB" },
    { name: "Node.js", level: 85, color: "#339933" },
    { name: "MongoDB", level: 90, color: "#336791" },
    { name: "Git & Github", level: 100, color: "#F05032" },
    { name: "Express.js", level: 60, color: "#68A063" },
    { name: "TypeScript", level: 20, color: "#3178C6" },
    { name: "HTML & CSS", level: 99, color: "#61DAFB" },

  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    animationDelay: `${index * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
