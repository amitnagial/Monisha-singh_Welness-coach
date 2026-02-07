import React, { useState, useEffect, useCallback } from 'react';
import { FaStar } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Neha Saniik',
    rating: 5,
    text: 'The Mother\u2019s Day session was truly special. It helped me relax, reflect, and feel valued as a mom. A beautiful gift to my mind and soul.',
  },
  {
    name: 'Anita Mishra',
    rating: 5,
    text: 'After the Mother\u2019s Day session, I felt lighter and more connected to myself. Such a beautiful experience!',
  },
  {
    name: 'Ridhima Gupta',
    rating: 5,
    text: 'The Tarot session cleared my confusion, shifted my energy, and gave me focus. I felt lighter, calm, and deeply empowered.',
  },
  {
    name: 'Rigzen',
    rating: 5,
    text: 'Monisha Ma\u2019am\u2019s Tarot session brought me the clarity I\u2019d been yearning for. She revealed the deeper reasons behind my struggles, turned my pain into powerful lessons, and showed me a hopeful path ahead. I now feel lighter, fearless, and ready to move forward. Grateful for her divine guidance that truly transformed my life.',
  },
  {
    name: 'Priya S.',
    rating: 5,
    text: 'Felt lighter and clearer after just one NLP discovery session. Truly powerful!',
  },
  {
    name: 'Kavita M.',
    rating: 5,
    text: 'The energy, the vibe, the imagination \u2014 it was all beyond words. I never felt this level of comfort in my life. Thank you so much!',
  },
  {
    name: 'Sunita R.',
    rating: 5,
    text: 'After today\u2019s session, one thing I have realised is, the only thing that matters is our mental peace. I will recommend this therapy to my relatives and friends.',
  },
];

const avatarGradients = [
  'linear-gradient(135deg, #CA0058, #ff6b9d)',
  'linear-gradient(135deg, #6a11cb, #2575fc)',
  'linear-gradient(135deg, #f093fb, #f5576c)',
  'linear-gradient(135deg, #4facfe, #00f2fe)',
  'linear-gradient(135deg, #43e97b, #38f9d7)',
  'linear-gradient(135deg, #fa709a, #fee140)',
  'linear-gradient(135deg, #a18cd1, #fbc2eb)',
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [sectionRef, sectionVisible] = useScrollAnimation(0.15);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div
        ref={sectionRef}
        className={`testimonials-container fade-in-element ${sectionVisible ? 'is-visible' : ''}`}
      >
        <h2 className="testimonials-heading">Happy Clients</h2>

        <div
          className="testimonial-slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
              aria-hidden={index !== activeIndex}
            >
              <div
                className="testimonial-avatar"
                style={{ background: avatarGradients[index % avatarGradients.length] }}
              >
                {testimonial.name.charAt(0)}
              </div>

              <p className="testimonial-name">{testimonial.name}</p>

              <div className="testimonial-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to testimonial by ${testimonial.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
