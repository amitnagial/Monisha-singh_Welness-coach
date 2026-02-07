import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Consultations.css';

const consultations = [
  {
    id: 'nlp-discovery',
    title: 'NLP Discovery Session',
    gradient: 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
    bullets: [
      'Break limiting patterns and transform your mindset',
      'Gain clarity on life decisions and personal growth',
      'Learn powerful NLP techniques for everyday challenges',
      'Strengthen your intuition & inner connection',
      'Find peace & direction through guided sessions',
    ],
  },
  {
    id: 'tarot-reading',
    title: 'Tarot Reading',
    gradient: 'linear-gradient(135deg, #FF9800 0%, #FFD54F 100%)',
    bullets: [
      'Uncover profound insights through the art of cards',
      'Master specific spreads for detailed answers',
      'Get clarity on career, relationships & life decisions',
      'Enhance your skills in interpreting symbols & messages',
      'Explore how tarot can reveal hidden patterns in your life',
    ],
  },
  {
    id: 'energy-healing',
    title: 'Energy Healing Session',
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #009688 100%)',
    bullets: [
      'Experience deep relaxation and energy balancing',
      'Release emotional blockages and past trauma',
      "Restore your body's natural healing abilities",
      'Find emotional & spiritual harmony',
      'Develop heightened awareness & intuitive abilities',
    ],
  },
];

function Consultations() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section id="consultations" className="consultations-section">
      <div className="consultations-container">
        <h2 className="consultations-heading">Consultations</h2>

        <div
          ref={sectionRef}
          className={`consultations-grid fade-in-element ${sectionVisible ? 'is-visible' : ''}`}
        >
          {consultations.map((item, index) => (
            <div
              key={item.id}
              className={`consultations-card stagger-${index + 1}`}
            >
              <div
                className="consultations-card-image"
                style={{ background: item.gradient }}
              >
                <span className="consultations-card-image-label">
                  {item.title}
                </span>
              </div>

              <div className="consultations-card-body">
                <h3 className="consultations-card-title">{item.title}</h3>

                <ul className="consultations-card-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="consultations-card-bullet">
                      <span className="consultations-bullet-dot" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Consultations;
