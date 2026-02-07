import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './MoreServices.css';

const moreServices = [
  {
    id: 'money-reiki',
    title: 'Money Reiki',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA000 100%)',
    bullets: [
      'Learn to align your energy with financial abundance',
      'Clear money blocks & limiting beliefs',
      'Manifest prosperity through focused energy practices',
    ],
  },
  {
    id: 'crystal-healing',
    title: 'Crystal Healing',
    gradient: 'linear-gradient(135deg, #9C27B0 0%, #2196F3 100%)',
    bullets: [
      'Harness the healing power of crystals for inner wellness',
      'Learn to select and use crystals for physical & emotional healing',
      'Balance & align your energy centers with crystal therapy',
    ],
  },
  {
    id: 'chakra-healing',
    title: 'Chakra Healing',
    gradient: 'linear-gradient(135deg, #FF0000 0%, #FF7F00 17%, #FFFF00 33%, #00FF00 50%, #0000FF 67%, #4B0082 83%, #8B00FF 100%)',
    bullets: [
      'Transform your life by balancing your energies',
      'Clear & rejuvenate your chakras for enhanced emotional balance',
      'Experience professional growth & spiritual awakening',
    ],
  },
];

function MoreServices() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section className="more-services-section">
      <div className="more-services-container">
        <h2 className="more-services-heading">More Ways I Can Help</h2>

        <div
          ref={sectionRef}
          className={`more-services-grid fade-in-element ${sectionVisible ? 'is-visible' : ''}`}
        >
          {moreServices.map((service, index) => (
            <div
              key={service.id}
              className={`more-services-card stagger-${index + 1}`}
            >
              <div
                className="more-services-card-image"
                style={{ background: service.gradient }}
              >
                <span className="more-services-card-image-label">
                  {service.title}
                </span>
              </div>

              <div className="more-services-card-body">
                <h3 className="more-services-card-title">{service.title}</h3>

                <ul className="more-services-card-bullets">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="more-services-card-bullet">
                      <span className="more-services-bullet-dot" aria-hidden="true" />
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

export default MoreServices;
