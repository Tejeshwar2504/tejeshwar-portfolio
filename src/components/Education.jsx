import { useEffect, useRef } from "react";

import portfolioData from "../data/portfolioData";
import "./Education.css";

function EducationCard({ item, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      if (window.innerWidth < 992) {
        return;
      }

      const rect = card.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty(
        "--education-x",
        `${x * 10}px`
      );

      card.style.setProperty(
        "--education-y",
        `${y * 8}px`
      );

      card.style.setProperty(
        "--education-glow-x",
        `${event.clientX - rect.left}px`
      );

      card.style.setProperty(
        "--education-glow-y",
        `${event.clientY - rect.top}px`
      );
    };

    const handleMouseLeave = () => {
      card.style.setProperty(
        "--education-x",
        "0px"
      );

      card.style.setProperty(
        "--education-y",
        "0px"
      );
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`education-card education-card-${index}`}
    >
      <div className="education-pointer-glow"></div>

      <div className="education-card-number">
        01
      </div>

      <div className="education-card-header">
        <span className="education-type">
          Bachelor's Degree
        </span>

        <span className="education-status">
          <span className="education-status-dot"></span>
          Completed
        </span>
      </div>

      <div className="education-card-content">
        <h3>{item.degree}</h3>

        <p className="education-specialization">
          <span className="education-accent-line"></span>
          {item.specialization}
        </p>

        <p className="education-institution">
          <i className="bi bi-building"></i>
          <span>{item.institution}</span>
        </p>
      </div>

      <div className="education-card-footer">
        <div className="education-meta">
          <span>FIELD</span>
          <strong>Computer Science</strong>
        </div>

        <div className="education-meta">
          <span>FOCUS</span>
          <strong>AI &amp; ML</strong>
        </div>

        <div className="education-meta">
          <span>STATUS</span>
          <strong>{item.status}</strong>
        </div>
      </div>

      <div className="education-card-arrow">
        <i className="bi bi-arrow-up-right"></i>
      </div>
    </article>
  );
}

function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="portfolio-section education-section"
    >
      <div className="education-background-text">
        EDUCATION
      </div>

      <div className="container">
        <div className="education-heading">
          <div>
            <span className="section-label">
              05 / Education
            </span>

            <h2 className="section-title">
              Learning that <span>shaped me.</span>
            </h2>
          </div>

          <p className="section-description">
            A foundation in computer science and artificial
            intelligence, followed by practical software
            development experience.
          </p>
        </div>

        <div className="education-layout">
          <div className="education-main">
            {education.map((item, index) => (
              <EducationCard
                key={`${item.degree}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>

          <aside className="education-side">
            <div className="education-side-top">
              <span>ACADEMIC FOCUS</span>

              <i className="bi bi-arrow-up-right"></i>
            </div>

            <div className="education-side-core">
              <div className="education-core-symbol">
                <i className="bi bi-cpu"></i>
              </div>

              <span>CS / AI</span>
            </div>

            <div className="education-side-title">
              <strong>
                Computer Science
                <br />
                + Artificial Intelligence
              </strong>

              <p>
                Building a foundation across programming,
                software development and intelligent systems.
              </p>
            </div>

            <div className="education-side-line"></div>

            <div className="education-side-tags">
              <span>Programming</span>
              <span>Software</span>
              <span>AI / ML</span>
              <span>Problem Solving</span>
            </div>
          </aside>
        </div>

        <div className="education-bottom">
          <span className="education-bottom-label">
            LEARNING PATH
          </span>

          <div className="education-path">
            <span>Computer Science</span>

            <i className="bi bi-arrow-right"></i>

            <span>Artificial Intelligence</span>

            <i className="bi bi-arrow-right"></i>

            <span>Software Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;