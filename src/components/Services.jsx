import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const services = [
  {
    id: 'tarot',
    title: 'Tarot Guidance',
    gradient: 'linear-gradient(135deg, #CA0058 0%, #D4A04A 100%)',
    bullets: [
      'Gain clarity in love, life & choices through intuitive tarot reading',
      'Uncover profound insights and guidance through the art of cards',
      'Master specific spreads to uncover detailed answers to your questions',
    ],
  },
  {
    id: 'nlp',
    title: 'NLP & Life Coaching',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    bullets: [
      'Break limiting patterns, gain clarity, and align your mindset',
      'Experience healing that nurtures compassion & self-love',
      'Transform your thinking for lasting positive change',
    ],
  },
  {
    id: 'energy',
    title: 'Energy Healing',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    bullets: [
      'Balance your energy for emotional & physical well-being',
      'Clear energy blocks & develop heightened awareness',
      'Develop heightened intuition & spiritual awareness',
    ],
  },
];

function Services() {
  const [headingRef, headingVisible] = useScrollAnimation(0.15);
  const [card1Ref, card1Visible] = useScrollAnimation(0.1);
  const [card2Ref, card2Visible] = useScrollAnimation(0.1);
  const [card3Ref, card3Visible] = useScrollAnimation(0.1);

  const cardRefs = [
    { ref: card1Ref, visible: card1Visible },
    { ref: card2Ref, visible: card2Visible },
    { ref: card3Ref, visible: card3Visible },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2
          ref={headingRef}
          className={`services-heading fade-in-up ${headingVisible ? 'is-visible' : ''}`}
        >
          Our Services
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={cardRefs[index].ref}
              className={`service-card fade-in-up stagger-${index + 1} ${
                cardRefs[index].visible ? 'is-visible' : ''
              }`}
            >
              <div
                className="service-card-image"
                style={{ background: service.gradient }}
              >
                <div className="service-card-image-overlay">
                  <h3 className="service-card-image-title">{service.title}</h3>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <ul className="service-card-bullets">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="service-card-bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-card-btn">Book a Session</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
