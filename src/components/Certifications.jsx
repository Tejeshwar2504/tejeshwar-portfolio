import { useEffect, useRef } from "react";

import portfolioData from "../data/portfolioData";
import "./Certifications.css";

function CertificateCard({ certificate, index }) {
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
        "--certificate-x",
        `${x * 7}px`
      );

      card.style.setProperty(
        "--certificate-y",
        `${y * 5}px`
      );

      card.style.setProperty(
        "--certificate-glow-x",
        `${event.clientX - rect.left}px`
      );

      card.style.setProperty(
        "--certificate-glow-y",
        `${event.clientY - rect.top}px`
      );
    };

    const handleMouseLeave = () => {
      card.style.setProperty(
        "--certificate-x",
        "0px"
      );

      card.style.setProperty(
        "--certificate-y",
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
      className={`certificate-card certificate-card-${index}`}
    >
      <div className="certificate-pointer-glow"></div>

      <div className="certificate-index">
        0{index + 1}
      </div>

      <div className="certificate-header">
        <span className="certificate-label">
          PROFESSIONAL TRAINING
        </span>

        <span className="certificate-status">
          <span className="certificate-status-dot"></span>
          Completed
        </span>
      </div>

      <div className="certificate-main">
        <div className="certificate-symbol">
          <i className="bi bi-patch-check"></i>
        </div>

        <div className="certificate-content">
          <h3>{certificate.title}</h3>

          <div className="certificate-provider">
            <i className="bi bi-building"></i>
            <span>{certificate.organization}</span>
          </div>

          <p>{certificate.description}</p>
        </div>
      </div>

      <div className="certificate-bottom">
        <div className="certificate-skills">
          <span>Python</span>
          <span>Django</span>
          <span>React.js</span>
          <span>REST API</span>
          <span>MySQL</span>
        </div>

        <div className="certificate-arrow">
          <i className="bi bi-arrow-up-right"></i>
        </div>
      </div>

      <div className="certificate-line"></div>
    </article>
  );
}

function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section
      id="certifications"
      className="portfolio-section certifications-section"
    >
      <div className="certifications-background-text">
        CERTIFIED
      </div>

      <div className="container">
        <div className="certifications-heading">
          <div>
            <span className="section-label">
              06 / Certification
            </span>

            <h2 className="section-title">
              Learning beyond the{" "}
              <span>classroom.</span>
            </h2>
          </div>

          <p className="section-description">
            Practical training focused on modern full-stack
            development, API development and building
            complete web applications.
          </p>
        </div>

        <div className="certifications-layout">
          <div className="certifications-main">
            {certifications.map((certificate, index) => (
              <CertificateCard
                key={`${certificate.title}-${index}`}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>

          <aside className="certifications-side">
            <div className="certifications-side-top">
              <span>TRAINING FOCUS</span>

              <i className="bi bi-arrow-up-right"></i>
            </div>

            <div className="certifications-side-symbol">
              <i className="bi bi-code-square"></i>
            </div>

            <div className="certifications-side-content">
              <span>FULL-STACK DEVELOPMENT</span>

              <h3>
                Learn.
                <br />
                Build.
                <br />
                Apply.
              </h3>

              <p>
                Combining structured learning with hands-on
                development practice across frontend,
                backend, APIs and databases.
              </p>
            </div>

            <div className="certifications-side-line"></div>

            <div className="certifications-side-stack">
              <span>PYTHON</span>
              <span>DJANGO</span>
              <span>REACT</span>
              <span>MYSQL</span>
            </div>
          </aside>
        </div>

        <div className="certifications-bottom">
          <span className="certifications-bottom-label">
            CONTINUOUS LEARNING
          </span>

          <div className="certifications-bottom-content">
            <i className="bi bi-arrow-right"></i>

            <span>
              Building practical skills through projects,
              development practice and new technologies.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;