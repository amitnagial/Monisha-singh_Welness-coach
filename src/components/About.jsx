import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const tags = [
  'NLP Mentor',
  'Life Coach',
  'Tarot Reader',
  'Money Reiki',
  'Energy Healer',
  'Author',
];

const bullets = [
  'Mission to help people find clarity and peace',
  '500+ sessions guided globally',
  'Online and offline sessions conducted',
];

function About() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.15);
  const [imageRef, imageVisible] = useScrollAnimation(0.15);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Column - Content */}
          <div
            ref={sectionRef}
            className={`about-content fade-in-element ${sectionVisible ? 'is-visible' : ''}`}
          >
            <h2 className="about-heading">Mindset Coach &amp; Healer</h2>

            <div className="tag-pills">
              {tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <p className="about-bio">
              A certified NLP mentor, life coach, tarot reader and author. I help
              people understand themselves better and move forward with clarity.
            </p>

            <p className="about-bio">
              My path into the world of wellness has been one of profound
              transformation &amp; discovery.
            </p>

            <p className="about-bio">
              A gentle woman with extraordinary charm and a radiant glow, Monisha
              is a devoted practitioner of NLP, tarot, and energy healing. She has
              guided and coached hundreds of individuals, helping them find inner
              peace, clarity, and renewed purpose in life.
            </p>

            <ul className="about-bullets">
              {bullets.map((bullet) => (
                <li key={bullet} className="about-bullet-item">
                  <span className="about-bullet-icon">
                    <FaCheck />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div
            ref={imageRef}
            className={`about-image fade-in-element ${imageVisible ? 'is-visible' : ''}`}
          >
            <img
              src="/images/monisha-about.png"
              alt="Monisha Singh - Mindset Coach and Healer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
