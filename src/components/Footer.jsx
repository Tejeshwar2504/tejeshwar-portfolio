import { useEffect, useRef } from "react";
import portfolioData from "../data/portfolioData";
import "./Footer.css";

function Footer() {
  const { personal } = portfolioData;
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      if (window.innerWidth < 992) {
        return;
      }

      const rect = footer.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      footer.style.setProperty("--footer-mouse-x", `${x}px`);
      footer.style.setProperty("--footer-mouse-y", `${y}px`);
    };

    footer.addEventListener("mousemove", handleMouseMove);

    return () => {
      footer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="site-footer"
    >
      <div className="footer-cursor-glow"></div>

      <div className="container">
        {/* Main CTA */}
        <div className="footer-cta">
          <span className="footer-section-label">
            08 / End
          </span>

          <h2 className="footer-title">
            Let's build
            <br />
            <span>something useful.</span>
          </h2>

          <p className="footer-description">
            Have a project, opportunity or idea?
            <br />
            Let's start a conversation.
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="footer-contact-button"
          >
            <span>Get in touch</span>

            <span className="footer-contact-icon">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </a>
        </div>

        {/* Footer content */}
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              aria-label="Back to home"
            >
              TG<span>.</span>
            </a>

            <p>
              Python Full-Stack Developer building
              responsive and practical web applications.
            </p>

            <div className="footer-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <span className="footer-column-label">
              Navigation
            </span>

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>

          {/* More */}
          <div className="footer-column">
            <span className="footer-column-label">
              More
            </span>

            <a href="#certifications">Certification</a>
            <a href="#contact">Contact</a>

            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>

            <a href="#home">Back to top</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact-column">
            <span className="footer-column-label">
              Contact
            </span>

            <a
              href={`mailto:${personal.email}`}
              className="footer-contact-link"
            >
              {personal.email}
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="footer-contact-link"
            >
              +91 {personal.phone}
            </a>

            <span className="footer-location">
              {personal.location}
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {personal.name}
          </span>

          <span className="footer-built">
            Designed & built with
            <i className="bi bi-code-slash"></i>
            React.js
          </span>

          <a href="#home" className="footer-top">
            Back to top
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;