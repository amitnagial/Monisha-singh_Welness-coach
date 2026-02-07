import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Community.css';

function Community() {
  const [contentRef, contentVisible] = useScrollAnimation(0.15);
  const [imageRef, imageVisible] = useScrollAnimation(0.15);

  return (
    <section className="community-section">
      <div className="community-grid">
        {/* Left Column - Content */}
        <div
          ref={contentRef}
          className={`community-content fade-in-element ${contentVisible ? 'is-visible' : ''}`}
        >
          <h2 className="community-heading">Join the Wellness Community</h2>
          <p className="community-description">
            Connect with like-minded individuals on a journey toward mental wellness,
            spiritual growth, and holistic healing. Stay updated with tips, live sessions,
            and exclusive content.
          </p>
          <div className="community-buttons">
            <a
              href="#"
              className="community-btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="community-btn-icon" />
              <span>Join WhatsApp Group</span>
            </a>
            <a
              href="https://www.instagram.com/wellbeingcoach.monisha/"
              className="community-btn btn-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="community-btn-icon" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div
          ref={imageRef}
          className={`community-image fade-in-element ${imageVisible ? 'is-visible' : ''}`}
        >
          <img
            src="/images/monisha-community.png"
            alt="Monisha Singh - Wellness Coach and Healer"
          />
        </div>
      </div>
    </section>
  );
}

export default Community;
