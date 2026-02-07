import { FaWhatsapp } from 'react-icons/fa';
import './FloatingButtons.css';

function FloatingButtons() {
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
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
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919797022388"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Book A Session Button */}
      <button
        className="floating-book-btn"
        onClick={(e) => handleScrollTo(e, 'contact')}
        aria-label="Book a session"
      >
        Book A Session
      </button>

      {/* View Services Side Tab */}
      <button
        className="view-services-tab"
        onClick={(e) => handleScrollTo(e, 'services')}
        aria-label="View services"
      >
        View Services
      </button>
    </>
  );
}

export default FloatingButtons;
