import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import './Stats.css';

const bullets = [
  'Improve Mind & Body Health',
  'Creativity, Meditation & Mindfulness',
  'Balance Energies & Emotions',
  'Unlock Financial Freedom',
  'Experience Abundance in Life',
  'Increase Self Awareness',
];

const stats = [
  { target: 500, suffix: '+', label: 'Sessions Guided' },
  { target: 5, suffix: '+', label: 'Years Experience' },
  { target: 100, suffix: '+', label: 'Workshops' },
  { target: 1000, suffix: '+', label: 'Happy Clients' },
];

function StatItem({ target, suffix, label, isVisible }) {
  const count = useCountUp(target, 2000, isVisible);

  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Stats() {
  const [topRef, topVisible] = useScrollAnimation(0.15);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);

  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Top Row - Content + Image */}
        <div
          ref={topRef}
          className={`stats-top fade-in ${topVisible ? 'visible' : ''}`}
        >
          {/* Left - Text Content */}
          <div className="stats-content">
            <h2 className="stats-heading">Wellness Coaching &amp; Healing</h2>
            <ul className="stats-bullets">
              {bullets.map((item) => (
                <li key={item} className="stats-bullet-item">
                  <span className="stats-bullet-dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Image */}
          <div className="stats-image">
            <img
              src="/images/monisha-branded.png"
              alt="Monisha Singh - Wellness Coach and Healer"
            />
          </div>
        </div>

        {/* Bottom Row - Stats Counters */}
        <div
          ref={statsRef}
          className={`stats-grid fade-in ${statsVisible ? 'visible' : ''}`}
        >
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={statsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
