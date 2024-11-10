import React from "react";
import "../styles/components-styles.css";
import "../styles/main.css";
import portfolioImage from "../assets/projects/portfolio-photo.png";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React showcasing my work and skills.",
    githubLink: "https://omarmonib.github.io/Portfolio-Website/",
    image: portfolioImage,
  },
  {
    title: "Todo List App",
    description:
      "A simple Todo List app created with React for managing daily tasks.",
    githubLink: "https://github.com/yourusername/todo-list",
    image: "/path/to/todo-image.jpg",
  },
  {
    title: "Weather App",
    description:
      "An application to check weather conditions using OpenWeather API.",
    githubLink: "https://github.com/yourusername/weather-app",
    image: "/path/to/weather-image.jpg",
  },
  {
    title: "Calculator App",
    description:
      "A simple calculator built with React for basic mathematical operations.",
    githubLink: "https://github.com/yourusername/calculator",
    image: "/path/to/calculator-image.jpg",
  },
  {
    title: "React Portfolio",
    description:
      "A portfolio website built with React showcasing my work and skills.",
    githubLink: "https://github.com/yourusername/react-portfolio",
    image: "/path/to/react-portfolio-image.jpg",
  },
  {
    title: "React Portfolio",
    description:
      "A portfolio website built with React showcasing my work and skills.",
    githubLink: "https://github.com/yourusername/react-portfolio",
    image: "/path/to/react-portfolio-image.jpg",
  },
  {
    title: "React Portfolio",
    description:
      "A portfolio website built with React showcasing my work and skills.",
    githubLink: "https://github.com/yourusername/react-portfolio",
    image: "/path/to/react-portfolio-image.jpg",
  },
  {
    title: "React Portfolio",
    description:
      "A portfolio website built with React showcasing my work and skills.",
    githubLink: "https://github.com/yourusername/react-portfolio",
    image: "/path/to/react-portfolio-image.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="heading projects-heading">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
