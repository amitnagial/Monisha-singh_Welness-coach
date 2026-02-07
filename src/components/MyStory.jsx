import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './MyStory.css';

const paragraphs = [
  'I had been a professional in the corporate world for over ten years before discovering my true calling as a healer and coach.',
  'Life brought me to a crossroads when I began facing emotional and mental health challenges. The stress, anxiety, and feeling of being lost pushed me to seek answers beyond the conventional.',
  "That's when I discovered NLP, tarot, and energy healing. These powerful modalities didn't just help me \u2014 they completely transformed my life. They gave me clarity, purpose, and a deep desire to help others find the same peace.",
  "I wanted to heal the world, and that's how I started this beautiful journey of guiding others toward mental wellness and inner strength.",
  'Blessings to all my beautiful clients and students.',
];

function MyStory() {
  const [imageRef, imageVisible] = useScrollAnimation(0.15);
  const [contentRef, contentVisible] = useScrollAnimation(0.15);

  return (
    <section id="story" className="mystory-section">
      <div className="mystory-grid">
        {/* Left Column - Image */}
        <div
          ref={imageRef}
          className={`mystory-image fade-in-left ${imageVisible ? 'visible' : ''}`}
        >
          <img
            src="/images/monisha-story.png"
            alt="Monisha Singh - My Story"
          />
        </div>

        {/* Right Column - Content */}
        <div
          ref={contentRef}
          className={`mystory-content fade-in-right ${contentVisible ? 'visible' : ''}`}
        >
          <h2 className="mystory-heading">My Story</h2>

          {paragraphs.map((text, index) => (
            <p key={index} className="mystory-paragraph">
              {text}
            </p>
          ))}

          <a href="#contact" className="btn-primary mystory-btn">
            Let's Talk
          </a>
        </div>
      </div>

      {/* Rainbow Gradient Bar */}
      <div className="rainbow-bar" aria-hidden="true" />
    </section>
  );
}

export default MyStory;
