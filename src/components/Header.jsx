import { useState, useEffect } from 'react';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Consultations', href: '#consultations' },
  { label: 'Book', href: '#book' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Handle scroll - add/remove scrolled class and track active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            current = sectionId;
          }
        }
      }

      setActiveSection(`#${current}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <a
            href="#home"
            className="header-logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            {/* Colorful Lotus Logo */}
            <div className="header-lotus-container" aria-hidden="true">
              <div className="header-lotus-petal header-lotus-petal-red" />
              <div className="header-lotus-petal header-lotus-petal-orange" />
              <div className="header-lotus-petal header-lotus-petal-yellow" />
              <div className="header-lotus-petal header-lotus-petal-green" />
              <div className="header-lotus-petal header-lotus-petal-blue" />
              <div className="header-lotus-petal header-lotus-petal-purple" />
              <div className="header-lotus-petal header-lotus-petal-pink" />
              <div className="header-lotus-center">
                <svg
                  className="header-lotus-icon"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 12C32 12 26 20 26 28C26 31.3 28.7 34 32 34C35.3 34 38 31.3 38 28C38 20 32 12 32 12Z"
                    fill="#CA0058"
                    opacity="0.85"
                  />
                  <path
                    d="M32 22C32 22 28 26 28 29C28 31.2 29.8 33 32 33C34.2 33 36 31.2 36 29C36 26 32 22 32 22Z"
                    fill="#ffffff"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>
            <span className="header-logo-text">Monisha Singh</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="header-nav" role="navigation" aria-label="Main navigation">
            <ul className="header-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`header-nav-link${activeSection === link.href ? ' active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + Mobile Toggle */}
          <div className="header-actions">
            <a
              href="https://www.instagram.com/wellbeingcoach.monisha/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-link"
              aria-label="Follow on Instagram"
            >
              <FaInstagram />
            </a>
            <button
              className="header-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <nav
        className={`mobile-menu${mobileOpen ? ' open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-header">
          <span className="header-logo-text">Monisha Singh</span>
          <button
            className="mobile-menu-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="mobile-menu-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`mobile-menu-link${activeSection === link.href ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-social">
          <a
            href="https://www.instagram.com/wellbeingcoach.monisha/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-social-link"
            aria-label="Follow on Instagram"
          >
            <FaInstagram />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </nav>

    </>
  );
}

export default Header;
