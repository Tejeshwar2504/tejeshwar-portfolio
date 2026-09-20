import { useEffect, useRef } from "react";

import portfolioData from "../data/portfolioData";
import "./Contact.css";

function ContactItem({
  href,
  icon,
  label,
  value,
  external = false,
  index,
}) {
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
        "--contact-x",
        `${x * 5}px`
      );

      card.style.setProperty(
        "--contact-y",
        `${y * 4}px`
      );

      card.style.setProperty(
        "--contact-glow-x",
        `${event.clientX - rect.left}px`
      );

      card.style.setProperty(
        "--contact-glow-y",
        `${event.clientY - rect.top}px`
      );
    };

    const handleMouseLeave = () => {
      card.style.setProperty("--contact-x", "0px");
      card.style.setProperty("--contact-y", "0px");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const content = (
    <>
      <div className="contact-item-index">
        0{index}
      </div>

      <div className="contact-item-icon">
        <i className={`bi ${icon}`}></i>
      </div>

      <div className="contact-item-content">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      {href ? (
        <i className="bi bi-arrow-up-right contact-item-arrow"></i>
      ) : (
        <span className="contact-item-arrow contact-item-dot"></span>
      )}

      <div className="contact-item-glow"></div>
    </>
  );

  if (href) {
    return (
      <a
        ref={cardRef}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="contact-item contact-animation-wrapper"
      >
        {content}
      </a>
    );
  }

  return (
    <div
      ref={cardRef}
      className="contact-item contact-animation-wrapper"
    >
      {content}
    </div>
  );
}

function Contact() {
  const { personal } = portfolioData;

  return (
    <section
      id="contact"
      className="portfolio-section contact-section"
    >
      <div className="contact-background-text">
        CONTACT
      </div>

      <div className="container">
        <div className="contact-heading">
          <div>
            <span className="section-label">
              07 / Contact
            </span>

            <h2 className="section-title">
              Let's build something{" "}
              <span>useful.</span>
            </h2>
          </div>

          <p className="section-description">
            Have a project idea, opportunity or just want to
            connect? Feel free to reach out.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-main">
            <div className="contact-intro">
              <div className="contact-intro-top">
                <span>GET IN TOUCH</span>

                <span className="contact-intro-status">
                  <span></span>
                  Available
                </span>
              </div>

              <div className="contact-intro-content">
                <div className="contact-symbol">
                  <i className="bi bi-chat-square-text"></i>
                </div>

                <h3>
                  Have an idea?
                  <br />
                  Let's talk.
                </h3>

                <p>
                  I'm open to relevant developer opportunities,
                  projects and conversations around software
                  development.
                </p>
              </div>

              <div className="contact-intro-footer">
                <span>PYTHON</span>
                <span>DJANGO</span>
                <span>REACT</span>
                <span>MYSQL</span>
              </div>
            </div>

            <div className="contact-items">
              <ContactItem
                index="01"
                href={`mailto:${personal.email}`}
                icon="bi-envelope"
                label="Email"
                value={personal.email}
              />

              <ContactItem
                index="02"
                href={`tel:${personal.phone}`}
                icon="bi-telephone"
                label="Phone"
                value={personal.phone}
              />

              <ContactItem
                index="03"
                href={personal.github}
                icon="bi-github"
                label="GitHub"
                value="View my repositories"
                external
              />

              <ContactItem
                index="04"
                href={personal.linkedin}
                icon="bi-linkedin"
                label="LinkedIn"
                value="Connect with me"
                external
              />
            </div>
          </div>

          <aside className="contact-side">
            <div className="contact-side-top">
              <span>CONTACT DETAILS</span>

              <i className="bi bi-arrow-up-right"></i>
            </div>

            <div className="contact-side-number">
              07
            </div>

            <div className="contact-side-content">
              <span>BASED IN</span>

              <h3>
                {personal.location}
              </h3>

              <p>
                Available for full-stack development roles
                and opportunities where I can contribute across
                frontend, backend and database development.
              </p>
            </div>

            <div className="contact-side-line"></div>

            <div className="contact-side-status">
              <span className="contact-status-dot"></span>

              <div>
                <strong>Open to opportunities</strong>

                <span>
                  Python Full-Stack Developer
                </span>
              </div>
            </div>
          </aside>
        </div>

        <div className="contact-bottom">
          <span className="contact-bottom-label">
            SAY HELLO
          </span>

          <a
            href={`mailto:${personal.email}`}
            className="contact-bottom-email"
          >
            {personal.email}

            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;