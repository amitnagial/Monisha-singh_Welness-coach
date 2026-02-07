import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Return & Refund', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const serviceLinks = [
  { label: 'Tarot Guidance', href: '#services' },
  { label: 'NLP Coaching', href: '#services' },
  { label: 'Energy Healing', href: '#services' },
  { label: 'Money Reiki', href: '#services' },
  { label: 'Crystal Healing', href: '#services' },
  { label: 'Chakra Healing', href: '#services' },
];

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    captcha: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const captchaAnswer = parseInt(formData.captcha, 10);
    if (captchaAnswer !== 23) {
      alert('Please enter the correct answer to the math question.');
      return;
    }
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Thank you for subscribing! You will receive weekly wisdom soon.');
    setFormData({ name: '', email: '', captcha: '' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    if (!targetId) return;
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
    <footer className="footer">
      <div className="footer-grid">
        {/* Column 1 - Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 - Services */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Newsletter */}
        <div className="footer-column">
          <h4 className="footer-heading">
            Weekly Wisdom for Body, Mind &amp; Soul
          </h4>
          <p className="footer-newsletter-desc">
            Get your weekly dose of healing and wellness, straight from the
            heart of Monisha Singh.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="newsletter-input"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="newsletter-input"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <div className="newsletter-captcha">
              <label className="newsletter-captcha-label">
                Please enter an answer in digits:
              </label>
              <div className="newsletter-captcha-row">
                <span className="newsletter-captcha-question">12 + 11 =</span>
                <input
                  type="text"
                  name="captcha"
                  className="newsletter-captcha-input"
                  value={formData.captcha}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>
            <button type="submit" className="newsletter-submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Social + Bio Section */}
      <div className="footer-bottom-content">
        <div className="footer-social">
          <span className="footer-social-text">Follow Monisha :</span>
          <a
            href="https://www.instagram.com/wellbeingcoach.monisha/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Follow Monisha on Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="footer-bio">
          Monisha Singh is a compassionate NLP mentor, mindfulness coach, and
          wellness expert, guiding individuals toward balance, harmony, and inner
          peace.
        </p>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <span>Copyright 2026. All rights reserved.</span>
        <span>Designed with love</span>
      </div>
    </footer>
  );
}

export default Footer;
