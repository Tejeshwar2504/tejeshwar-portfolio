import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Certifications", "certifications"],
    ["Contact", "contact"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = [
      document.getElementById("home"),
      ...navItems
        .map(([, id]) => document.getElementById(id))
        .filter(Boolean),
    ].filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.3;

      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen && window.innerWidth < 992) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [menuOpen]);

  return (
    <nav
      className={`portfolio-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container navbar-inner">
        <a
          href="#home"
          className="portfolio-logo"
          onClick={closeMenu}
          aria-label="Tejeshwar G Home"
        >
          <span className="logo-mark">TEJESHWAR</span>
          <span className="logo-dot">.</span>
        </a>

        <div className="navbar-center">
          <div
            className={`portfolio-nav ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="portfolio-nav-list">
              {navItems.map(([label, id], index) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`portfolio-nav-link ${
                      activeSection === id ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    <span className="nav-index">
                      0{index + 1}
                    </span>

                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="navbar-actions">
          <a
            href={portfolioData.personal.resume}
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn"
          >
            <span>Resume</span>
            <i className="bi bi-arrow-up-right"></i>
          </a>

          <button
            type="button"
            className={`navbar-menu-toggle ${
              menuOpen ? "open" : ""
            }`}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
