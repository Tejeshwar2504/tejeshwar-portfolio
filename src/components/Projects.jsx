import { useEffect, useRef } from "react";
import portfolioData from "../data/portfolioData";
import "./Projects.css";

const projectMeta = [
  {
    category: "FULL-STACK",
    indexLabel: "01",
    icon: "bi-cart3",
    accent: "cyan",
  },
  {
    category: "WEB APPLICATION",
    indexLabel: "02",
    icon: "bi-film",
    accent: "purple",
  },
  {
    category: "AI / COMPUTER VISION",
    indexLabel: "03",
    icon: "bi-eye",
    accent: "green",
  },
  {
    category: "NLP / AI",
    indexLabel: "04",
    icon: "bi-chat-heart",
    accent: "pink",
  },
  {
    category: "COMPUTER VISION",
    indexLabel: "05",
    icon: "bi-person-bounding-box",
    accent: "blue",
  },
];

function ProjectPreview({ project, index }) {
  const meta = projectMeta[index] || projectMeta[0];

  return (
    <div className={`project-preview project-preview-${meta.accent}`}>
      <div className="project-preview-grid"></div>

      <div className="project-preview-top">
        <div className="project-preview-window">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="project-preview-type">
          {meta.category}
        </span>

        <span className="project-preview-number">
          {meta.indexLabel}
        </span>
      </div>

      <div className="project-preview-main">
        <div className="project-preview-icon">
          <i className={`bi ${meta.icon}`}></i>
        </div>

        <div className="project-preview-title">
          {project.title}
        </div>

        <div className="project-preview-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="project-preview-bottom">
        <span>PROJECT_{meta.indexLabel}</span>

        <span>
          <i className="bi bi-arrow-up-right"></i>
        </span>
      </div>

      <div className="project-preview-code project-preview-code-one">
        {"</>"}
      </div>

      <div className="project-preview-code project-preview-code-two">
        {"{}"}
      </div>
    </div>
  );
}

function ProjectItem({ project, index }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;

    if (!item) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      if (
        window.innerWidth < 992 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const rect = item.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      item.style.setProperty(
        "--project-x",
        `${x * 4}deg`
      );

      item.style.setProperty(
        "--project-y",
        `${y * -3}deg`
      );
    };

    const handleMouseLeave = () => {
      item.style.setProperty("--project-x", "0deg");
      item.style.setProperty("--project-y", "0deg");
    };

    item.addEventListener("mousemove", handleMouseMove);
    item.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      item.removeEventListener("mousemove", handleMouseMove);
      item.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <article
      ref={itemRef}
      className={`project-item project-animation-wrapper project-animation-${index}`}
    >
      <div className="project-item-number">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="project-item-content">
        <div className="project-item-info">
          <span className="project-item-category">
            {projectMeta[index]?.category || "PROJECT"}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-tech-list">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="project-item-footer">
            <span className="project-built">
              <span className="project-built-dot"></span>
              Built & tested
            </span>

            <div className="project-links">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              ) : null}

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-link-primary"
                  aria-label={`${project.title} live demo`}
                >
                  <span>Live Demo</span>
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <ProjectPreview
          project={project}
          index={index}
        />
      </div>
    </article>
  );
}

function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="portfolio-section projects-section"
    >
      <div className="projects-background-word">
        PROJECTS
      </div>

      <div className="container">
        <div className="section-heading projects-heading">
          <span className="section-label">
            04 / Selected Work
          </span>

          <div className="projects-heading-layout">
            <h2 className="section-title">
              Things I've <span>built.</span>
            </h2>

            <p className="section-description">
              Full-stack applications, AI systems and
              computer vision projects built across
              frontend, backend, APIs, databases and
              machine learning.
            </p>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="projects-bottom">
          <div className="projects-bottom-line"></div>

          <div className="projects-bottom-content">
            <span>
              <span className="projects-bottom-dot"></span>
              More projects coming soon
            </span>

            <span className="projects-bottom-stack">
              React.js
              <i className="bi bi-dot"></i>
              Django
              <i className="bi bi-dot"></i>
              FastAPI
              <i className="bi bi-dot"></i>
              MySQL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;