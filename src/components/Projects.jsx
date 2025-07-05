import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React frontend and Node.js backend",
      tech: ["React.js", "Next.js", "MongoDB", "Express.js", "Node.js"],
      image: "/Ecommerce.jpg",
      github: "https://github.com/AbdullahZayan/E-Commerce_Next.js",
      live: "https://e-commerce-next-js-sigma.vercel.app/",
    },
    {
      title: "ToDoList System",
      description: "Website System help you to manage your task ",
      tech: ["React.js", "Next.js",],
      image: "/TodoList.jpg",
      github: "https://github.com/AbdullahZayan/TodoList_NextJs",
      live: "https://todo-list-next-js-gamma.vercel.app/",
    },
    {
      title: "HealthCare Storage System",
      description: "This is my FYP system that help you to manage your medical report with secure system and privacy.",
      tech: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      image: "/HealthCare.jpg", 
      github: "https://github.com/AbdullahZayan/HealthCare-Storage-System",
      live: "https://health-care-storage-system.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} className="project-link">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="project-link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
