import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations immediately on mount
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Left Column - Photo */}
      <div className={`hero-photo-column${mounted ? ' animate-in' : ''}`}>
        <div className="hero-photo-wrapper">
          <img
            src="/images/monisha-hero.png"
            alt="Monisha Singh - Mindset Coach and Healer"
            className="hero-photo"
          />
        </div>
      </div>

      {/* Right Column - Content */}
      <div className={`hero-content-column${mounted ? ' animate-in' : ''}`}>
        {/* CSS Lotus Flower */}
        <div className="hero-lotus-container" aria-hidden="true">
          <div className="lotus-petal lotus-petal-red" />
          <div className="lotus-petal lotus-petal-orange" />
          <div className="lotus-petal lotus-petal-yellow" />
          <div className="lotus-petal lotus-petal-green" />
          <div className="lotus-petal lotus-petal-blue" />
          <div className="lotus-petal lotus-petal-purple" />
          <div className="lotus-petal lotus-petal-pink" />
          {/* Center lotus hands icon */}
          <div className="lotus-center">
            <svg
              className="lotus-center-icon"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hands cupping shape */}
              <path
                d="M16 40C16 40 10 34 10 26C10 20 14 16 18 16C20 16 22 17 23 19"
                stroke="#CA0058"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 40C48 40 54 34 54 26C54 20 50 16 46 16C44 16 42 17 41 19"
                stroke="#CA0058"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Central lotus bud */}
              <path
                d="M32 12C32 12 26 20 26 28C26 31.3 28.7 34 32 34C35.3 34 38 31.3 38 28C38 20 32 12 32 12Z"
                fill="#CA0058"
                opacity="0.85"
              />
              <path
                d="M32 22C32 22 28 26 28 29C28 31.2 29.8 33 32 33C34.2 33 36 31.2 36 29C36 26 32 22 32 22Z"
                fill="#ffffff"
                opacity="0.4"
              />
              {/* Left petal */}
              <path
                d="M22 24C22 24 18 28 18 32C18 35 20 37 23 37C25 37 27 36 28 34"
                stroke="#CA0058"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />
              {/* Right petal */}
              <path
                d="M42 24C42 24 46 28 46 32C46 35 44 37 41 37C39 37 37 36 36 34"
                stroke="#CA0058"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />
              {/* Base stem */}
              <path
                d="M32 34L32 48"
                stroke="#CA0058"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                d="M28 44C30 42 34 42 36 44"
                stroke="#CA0058"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Mindset Coach<br />
          <span className="hero-title-accent">&amp; Healer</span>
        </h1>

        {/* CTA Button */}
        <a href="#contact" className="btn-primary hero-cta">
          <FaPlay className="hero-cta-icon" />
          Book a Session
        </a>
      </div>
    </section>
  );
}

export default Hero;
