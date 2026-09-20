import { useEffect, useRef } from "react";
import portfolioData from "../data/portfolioData";
import "./About.css";

function About() {
  const { about } = portfolioData;

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const revealItems = section.querySelectorAll(
      ".about-reveal, .about-number-card, .about-focus-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="portfolio-section about-section"
    >
      <div className="about-grid-background"></div>

      <div className="about-ambient about-ambient-one"></div>
      <div className="about-ambient about-ambient-two"></div>

      <div className="container">
        {/* SECTION INTRO */}
        <div className="about-intro about-reveal">
          <div className="about-section-meta">
            <span>01</span>
            <span>/</span>
            <span>ABOUT ME</span>
          </div>

          <div className="about-heading-wrap">
            <h2 className="section-title about-title">
              Building digital
              <br />
              experiences with
              <span> purpose.</span>
            </h2>

            <p className="about-heading-description">
              A Python full-stack developer focused on turning ideas
              into practical, responsive and user-friendly web
              applications.
            </p>
          </div>
        </div>

        {/* MAIN ABOUT CONTENT */}
        <div className="about-layout">
          <div className="about-story about-reveal">
            <div className="about-story-top">
              <span className="about-eyebrow">
                / WHO I AM
              </span>

              <span className="about-year">
                2026
              </span>
            </div>

            <div className="about-story-content">
              <div className="about-avatar">
                TG
              </div>

              <div className="about-story-copy">
                <h3>
                  Hi, I'm Tejeshwar.
                </h3>

                <p>
                  {about.description}
                </p>
              </div>
            </div>

            <div className="about-story-footer">
              <span>
                Currently working across
              </span>

              <div className="about-focus-list">
                <span>Frontend</span>
                <span>Backend</span>
                <span>REST APIs</span>
                <span>Databases</span>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="about-numbers">
            <div
              className="about-number-card about-reveal"
              style={{ "--about-delay": "0.08s" }}
            >
              <span className="about-number-index">
                01
              </span>

              <strong>6+</strong>

              <span className="about-number-label">
                Months of hands-on experience
              </span>
            </div>

            <div
              className="about-number-card about-reveal"
              style={{ "--about-delay": "0.16s" }}
            >
              <span className="about-number-index">
                02
              </span>

              <strong>5+</strong>

              <span className="about-number-label">
                Projects built across web & AI
              </span>
            </div>

            <div
              className="about-number-card about-reveal"
              style={{ "--about-delay": "0.24s" }}
            >
              <span className="about-number-index">
                03
              </span>

              <strong>Full</strong>

              <span className="about-number-label">
                Stack development workflow
              </span>
            </div>

            <div
              className="about-number-card about-location about-reveal"
              style={{ "--about-delay": "0.32s" }}
            >
              <span className="about-number-index">
                04
              </span>

              <div className="about-location-content">
                <i className="bi bi-geo-alt"></i>

                <div>
                  <span>
                    Based in
                  </span>

                  <strong>
                    Tamil Nadu, India
                  </strong>
                </div>
              </div>

              <span className="about-location-status">
                <span></span>
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <div className="about-workflow">
          <div className="about-workflow-heading about-reveal">
            <span className="about-eyebrow">
              / HOW I WORK
            </span>

            <p>
              From interface to database, I focus on
              connecting every layer of an application.
            </p>
          </div>

          <div className="about-focus-grid">
            <div
              className="about-focus-item"
              style={{ "--about-delay": "0.05s" }}
            >
              <span className="about-focus-number">
                01
              </span>

              <i className="bi bi-layout-text-window-reverse"></i>

              <strong>Frontend</strong>

              <span>
                Responsive interfaces and interactive
                experiences.
              </span>
            </div>

            <div
              className="about-focus-item"
              style={{ "--about-delay": "0.12s" }}
            >
              <span className="about-focus-number">
                02
              </span>

              <i className="bi bi-server"></i>

              <strong>Backend</strong>

              <span>
                Python and Django applications with
                structured logic.
              </span>
            </div>

            <div
              className="about-focus-item"
              style={{ "--about-delay": "0.19s" }}
            >
              <span className="about-focus-number">
                03
              </span>

              <i className="bi bi-braces"></i>

              <strong>REST APIs</strong>

              <span>
                Connecting frontend applications with
                backend services.
              </span>
            </div>

            <div
              className="about-focus-item"
              style={{ "--about-delay": "0.26s" }}
            >
              <span className="about-focus-number">
                04
              </span>

              <i className="bi bi-database"></i>

              <strong>Database</strong>

              <span>
                MySQL queries, relationships and
                application data.
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="about-statement about-reveal">
          <span className="about-statement-mark">
            “
          </span>

          <p>
            I enjoy building complete applications where
            design, functionality and data work together.
          </p>

          <span className="about-statement-line"></span>
        </div>
      </div>
    </section>
  );
}

export default About;