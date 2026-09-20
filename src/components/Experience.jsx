import { useEffect, useRef } from "react";
import portfolioData from "../data/portfolioData";
import "./Experience.css";

function ExperienceItem({ item, index }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      if (
        window.innerWidth < 992 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const rect = element.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      element.style.setProperty(
        "--experience-x",
        `${event.clientX - rect.left}px`
      );

      element.style.setProperty(
        "--experience-y",
        `${event.clientY - rect.top}px`
      );

      element.style.setProperty(
        "--experience-rotate-x",
        `${y * -1.5}deg`
      );

      element.style.setProperty(
        "--experience-rotate-y",
        `${x * 2}deg`
      );
    };

    const handleMouseLeave = () => {
      element.style.setProperty(
        "--experience-rotate-x",
        "0deg"
      );

      element.style.setProperty(
        "--experience-rotate-y",
        "0deg"
      );
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      element.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <article
      ref={itemRef}
      className={`experience-item experience-item-${index}`}
    >
      <div className="experience-item-number">
        01
      </div>

      <div className="experience-item-main">
        <div className="experience-header">
          <div>
            <span className="experience-type">
              Professional Experience
            </span>

            <h3>{item.role}</h3>

            <div className="experience-company">
              <span>{item.company}</span>
              <span className="experience-company-dot"></span>
              <span>{item.duration}</span>
            </div>
          </div>

          <div className="experience-external-icon">
            <i className="bi bi-arrow-up-right"></i>
          </div>
        </div>

        <div className="experience-description-row">
          <p className="experience-description">
            {item.description}
          </p>

          <div className="experience-focus">
            <span>Focus</span>

            <div className="experience-focus-list">
              <span>Frontend</span>
              <span>Backend</span>
              <span>APIs</span>
              <span>Database</span>
            </div>
          </div>
        </div>

        <div className="experience-responsibilities">
          <div className="experience-responsibilities-label">
            <span>01</span>
            <span>Responsibilities</span>
          </div>

          <div className="experience-responsibility-list">
            {item.responsibilities.map(
              (responsibility, responsibilityIndex) => (
                <div
                  className="experience-responsibility"
                  key={responsibilityIndex}
                >
                  <span className="experience-responsibility-index">
                    0{responsibilityIndex + 1}
                  </span>

                  <p>{responsibility}</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="experience-footer">
          <div className="experience-stack">
            <span>Python</span>
            <span>Django</span>
            <span>React.js</span>
            <span>REST APIs</span>
            <span>MySQL</span>
          </div>

          <span className="experience-status">
            <span></span>
            Currently active
          </span>
        </div>
      </div>

      <div className="experience-pointer-glow"></div>
    </article>
  );
}

function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="portfolio-section experience-section"
    >
      <div className="experience-bg-word">
        EXPERIENCE
      </div>

      <div className="container">
        <div className="experience-intro">
          <div className="experience-intro-left">
            <span className="section-label">
              03 / Experience
            </span>

            <h2 className="section-title">
              Where I
              <span> build.</span>
            </h2>
          </div>

          <div className="experience-intro-right">
            <p>
              Hands-on full-stack development experience
              working across responsive interfaces,
              backend services, REST APIs and relational
              databases.
            </p>

            <div className="experience-meta">
              <span>01 Professional Role</span>

              <span className="experience-meta-line"></span>

              <span>April 2026 — Present</span>
            </div>
          </div>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <ExperienceItem
              key={`${item.company}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div className="experience-bottom">
          <div className="experience-bottom-label">
            <span className="experience-live-dot"></span>

            <span>
              Building full-stack applications
            </span>
          </div>

          <div className="experience-bottom-flow">
            <span>React.js</span>
            <i className="bi bi-arrow-right"></i>
            <span>Django</span>
            <i className="bi bi-arrow-right"></i>
            <span>REST API</span>
            <i className="bi bi-arrow-right"></i>
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;