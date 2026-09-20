import { useEffect, useRef } from "react";
import "./Skills.css";

const coreSkills = [
  {
    name: "HTML",
    category: "Frontend",
    icon: "bi-filetype-html",
    number: "01",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: "bi-filetype-css",
    number: "02",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "bi-filetype-js",
    number: "03",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: "bi-code-slash",
    number: "04",
  },
  {
    name: "Python",
    category: "Backend",
    icon: "bi-terminal",
    number: "05",
  },
  {
    name: "Django",
    category: "Backend",
    icon: "bi-server",
    number: "06",
  },
  {
    name: "REST API",
    category: "API",
    icon: "bi-braces",
    number: "07",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "bi-database",
    number: "08",
  },
];

function SkillItem({ skill }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;

    if (!item) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      if (window.innerWidth < 992) {
        return;
      }

      const rect = item.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      item.style.setProperty(
        "--skill-x",
        `${event.clientX - rect.left}px`
      );

      item.style.setProperty(
        "--skill-y",
        `${event.clientY - rect.top}px`
      );

      item.style.setProperty(
        "--skill-rotate-x",
        `${y * -2.5}deg`
      );

      item.style.setProperty(
        "--skill-rotate-y",
        `${x * 3.5}deg`
      );
    };

    const handleMouseLeave = () => {
      item.style.setProperty(
        "--skill-rotate-x",
        "0deg"
      );

      item.style.setProperty(
        "--skill-rotate-y",
        "0deg"
      );
    };

    item.addEventListener("mousemove", handleMouseMove);
    item.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      item.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      item.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <article
      ref={itemRef}
      className="skill-card skill-item"
    >
      <div className="skill-item-glow"></div>

      <div className="skill-item-number">
        {skill.number}
      </div>

      <div className="skill-item-main">
        <div className="skill-item-icon">
          <i className={`bi ${skill.icon}`}></i>
        </div>

        <div>
          <span className="skill-item-category">
            {skill.category}
          </span>

          <h3>{skill.name}</h3>
        </div>
      </div>

      <div className="skill-item-arrow">
        <i className="bi bi-arrow-up-right"></i>
      </div>

      <div className="skill-item-line"></div>
    </article>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="portfolio-section skills-section"
    >
      <div className="skills-background-text">
        STACK
      </div>

      <div className="container">
        <div className="skills-intro">
          <div className="skills-intro-left">
            <span className="section-label">
              02 / Technical Skills
            </span>

            <h2 className="section-title">
              Things I build
              <span> with.</span>
            </h2>
          </div>

          <div className="skills-intro-right">
            <p>
              A focused full-stack toolkit for building
              responsive interfaces, backend systems,
              APIs and database-driven applications.
            </p>

            <div className="skills-intro-meta">
              <span>08 Core Technologies</span>

              <span className="skills-meta-line"></span>

              <span>Full-Stack Development</span>
            </div>
          </div>
        </div>

        <div className="skills-list">
          {coreSkills.map((skill) => (
            <SkillItem
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>

        <div className="skills-workflow">
          <div className="skills-workflow-label">
            <span className="skills-status-dot"></span>
            Development workflow
          </div>

          <div className="skills-workflow-track">
            <span>Frontend</span>

            <i className="bi bi-arrow-right"></i>

            <span>Backend</span>

            <i className="bi bi-arrow-right"></i>

            <span>REST API</span>

            <i className="bi bi-arrow-right"></i>

            <span>Database</span>

            <i className="bi bi-arrow-right"></i>

            <span>Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;