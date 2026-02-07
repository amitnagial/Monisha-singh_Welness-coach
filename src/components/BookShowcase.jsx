import React from 'react';
import { FaAmazon, FaGoogle, FaArrowRight } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './BookShowcase.css';

function BookShowcase() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.15);

  return (
    <section id="book" className="book-section">
      <div
        ref={sectionRef}
        className={`book-container fade-in-element ${sectionVisible ? 'is-visible' : ''}`}
      >
        <div className="book-card">
          <h2 className="book-section-heading">My Book</h2>

          {/* Book Cover with 3D Tilt */}
          <div className="book-cover">
            <img
              src="/images/book-cover.png"
              alt="Unleashing the Seven Aspects of Mental Wellness by Monisha Singh"
            />
          </div>

          {/* Book Details */}
          <h3 className="book-title">
            Unleashing the Seven Aspects of Mental Wellness
          </h3>
          <p className="book-description">
            A holistic guide to emotional balance, mental clarity, physical vitality,
            spiritual connection, social well-being, intellectual growth &amp; environmental
            awareness.
          </p>

          {/* Purchase Buttons */}
          <div className="book-buttons">
            <a
              href="https://www.amazon.in/dp/B0DYXZ6FMP"
              className="book-btn btn-amazon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAmazon className="book-btn-icon" />
              <span>Shop on Amazon</span>
            </a>
            <a
              href="https://books.google.co.in/books/about?id=KxNLEQAAQBAJ"
              className="book-btn btn-google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="book-btn-icon" />
              <span>Shop on Google Books</span>
            </a>
            <a
              href="#contact"
              className="book-btn btn-explore"
            >
              <span>Explore More</span>
              <FaArrowRight className="book-btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookShowcase;
