import { useEffect, useRef, useState } from "react";
import portfolioData from "../data/portfolioData";
import "./Hero.css";

function Hero() {
  const { personal } = portfolioData;

  const heroRef = useRef(null);
  const visualRef = useRef(null);

  const [typedText, setTypedText] = useState("");

  const codeText = 'return "Let\'s build something great."';

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(codeText.slice(0, index + 1));

      index += 1;

      if (index >= codeText.length) {
        clearInterval(typingInterval);
      }
    }, 55);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const visual = visualRef.current;

    if (!hero || !visual) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      if (window.innerWidth < 992) {
        return;
      }

      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      const rotateX = y * -4;
      const rotateY = x * 5;

      const moveX = x * 12;
      const moveY = y * 12;

      visual.style.setProperty("--visual-x", `${moveX}px`);
      visual.style.setProperty("--visual-y", `${moveY}px`);
      visual.style.setProperty("--visual-rotate-x", `${rotateX}deg`);
      visual.style.setProperty("--visual-rotate-y", `${rotateY}deg`);

      hero.style.setProperty(
        "--hero-pointer-x",
        `${event.clientX - rect.left}px`
      );

      hero.style.setProperty(
        "--hero-pointer-y",
        `${event.clientY - rect.top}px`
      );
    };

    const handleMouseLeave = () => {
      visual.style.setProperty("--visual-x", "0px");
      visual.style.setProperty("--visual-y", "0px");
      visual.style.setProperty("--visual-rotate-x", "0deg");
      visual.style.setProperty("--visual-rotate-y", "0deg");
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section"
    >
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-noise" aria-hidden="true"></div>
      <div className="hero-pointer-glow" aria-hidden="true"></div>

      <div className="hero-background-mark" aria-hidden="true">
        TG
      </div>

      <div className="container hero-container">
        <div className="hero-topline">
          <span>01 / Introduction</span>

          <span className="hero-topline-location">
            {personal.location}
          </span>
        </div>

        <div className="hero-main">
          <div className="hero-content">
            <div className="availability-badge">
              <span className="status-dot"></span>
              <span>Available for opportunities</span>
            </div>

            <p className="hero-intro">
              Hi, I'm{" "}
              <span>Tejeshwar G.</span>
            </p>

            <h1 className="hero-title">
              <span className="hero-title-line">
                Python
              </span>

              <span className="hero-title-line hero-title-outline">
                Full-Stack
              </span>

              <span className="hero-title-line">
                Developer
                <span className="hero-title-dot">.</span>
              </span>
            </h1>

            <div className="hero-description-wrap">
              <span className="hero-description-line"></span>

              <p className="hero-description">
                I build responsive web applications with{" "}
                <strong>
                  Python, Django, React.js and MySQL
                </strong>
                , connecting clean interfaces, REST APIs
                and relational databases into complete
                full-stack experiences.
              </p>
            </div>

            <div className="hero-tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Python</span>
              <span>Django</span>
              <span>REST API</span>
              <span>MySQL</span>
            </div>

            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-primary-btn"
              >
                <span>Explore Projects</span>
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="hero-secondary-btn"
              >
                <span>View Resume</span>
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
                <span>LinkedIn</span>
              </a>

              <span className="hero-social-divider"></span>

              <span className="hero-scroll-hint">
                Scroll to explore
                <i className="bi bi-arrow-down"></i>
              </span>
            </div>
          </div>

          <div className="hero-visual-column">
            <div
              ref={visualRef}
              className="hero-visual"
            >
              <div className="hero-visual-label">
                <span>01</span>
                <span>Developer / Python</span>
              </div>

              <div className="hero-visual-frame">
                <div className="hero-visual-corner corner-top-left"></div>
                <div className="hero-visual-corner corner-top-right"></div>
                <div className="hero-visual-corner corner-bottom-left"></div>
                <div className="hero-visual-corner corner-bottom-right"></div>

                <div className="hero-monogram">
                  <span>T</span>
                  <span>G</span>
                </div>

                <div className="hero-code">
                  <div className="hero-code-line">
                    <span className="hero-code-number">
                      01
                    </span>
                    <span className="code-muted">
                      class
                    </span>{" "}
                    <span className="code-bright">
                      Developer
                    </span>
                  </div>

                  <div className="hero-code-line">
                    <span className="hero-code-number">
                      02
                    </span>
                    <span className="code-indent">
                      {"    "}
                    </span>
                    <span className="code-muted">
                      def
                    </span>{" "}
                    <span className="code-accent">
                      build
                    </span>
                    <span className="code-bright">
                      (self):
                    </span>
                  </div>

                  <div className="hero-code-line">
                    <span className="hero-code-number">
                      03
                    </span>
                    <span className="code-indent">
                      {"        "}
                    </span>
                    <span className="code-bright">
                      self
                    </span>
                    .stack = [
                    <span className="code-string">
                      "Python"
                    </span>
                    ,{" "}
                    <span className="code-string">
                      "React"
                    </span>
                    ]
                  </div>

                  <div className="hero-code-line">
                    <span className="hero-code-number">
                      04
                    </span>
                    <span className="code-indent">
                      {"        "}
                    </span>
                    <span className="code-bright">
                      self
                    </span>
                    .database ={" "}
                    <span className="code-string">
                      "MySQL"
                    </span>
                  </div>

                  <div className="hero-code-line">
                    <span className="hero-code-number">
                      05
                    </span>
                    <span className="code-indent">
                      {"        "}
                    </span>
                    <span className="code-bright">
                      self
                    </span>
                    .focus ={" "}
                    <span className="code-string">
                      "Building"
                    </span>
                  </div>

                  <div className="hero-code-line hero-code-typing">
                    <span className="hero-code-number">
                      06
                    </span>

                    <span className="code-indent">
                      {"        "}
                    </span>

                    <span className="code-muted">
                      {typedText.startsWith("return")
                        ? "return"
                        : ""}
                    </span>

                    {typedText.startsWith("return") && (
                      <span className="code-string">
                        {typedText.replace(
                          "return",
                          ""
                        )}
                      </span>
                    )}

                    <span className="typing-cursor"></span>
                  </div>
                </div>

                <div className="hero-visual-footer">
                  <span>
                    <i className="bi bi-circle-fill"></i>
                    Python
                  </span>

                  <span>Full-Stack</span>

                  <span>2026</span>
                </div>
              </div>

              <div className="hero-floating-label hero-floating-one">
                <span>PY</span>
                <small>Python</small>
              </div>

              <div className="hero-floating-label hero-floating-two">
                <span>JS</span>
                <small>React.js</small>
              </div>

              <div className="hero-floating-label hero-floating-three">
                <span>DB</span>
                <small>MySQL</small>
              </div>

              <div className="hero-vertical-text">
                FULL STACK / 2026
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-stat">
            <strong>06</strong>
            <span>Months Experience</span>
          </div>

          <div className="hero-stat">
            <strong>05</strong>
            <span>Projects Built</span>
          </div>

          <div className="hero-stat">
            <strong>08</strong>
            <span>Core Technologies</span>
          </div>

          <div className="hero-bottom-message">
            <span>
              Building interfaces.
              <br />
              Connecting systems.
            </span>

            <i className="bi bi-arrow-down-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;