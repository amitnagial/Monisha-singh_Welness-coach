import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ContactForm.css';

const subjectOptions = [
  'Select Subject',
  'NLP Coaching',
  'Tarot Reading',
  'Energy Healing',
  'Money Reiki',
  'Crystal Healing',
  'Chakra Healing',
  'Other',
];

const serviceOptions = [
  'Select Service',
  'NLP Coaching',
  'Tarot Reading',
  'Energy Healing',
  'Money Reiki',
  'Crystal Healing',
  'Chakra Healing',
  'Other',
];

const hearAboutOptions = [
  'Select One',
  'Instagram',
  'YouTube',
  'Friend/Family',
  'Google Search',
  'Other',
];

const initialFormState = {
  subject: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  hearAbout: '',
  service: '',
  message: '',
  captcha: '',
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.captcha !== '23') {
      alert('Please enter the correct answer to the math question.');
      return;
    }

    alert("Thank you! We'll be in touch soon.");
    setFormData(initialFormState);
  };

  return (
    <section id="contact" className="contact-section">
      <div
        ref={sectionRef}
        className={`contact-container fade-in-element ${sectionVisible ? 'is-visible' : ''}`}
      >
        <p className="contact-subtitle">Talk to us</p>
        <h2 className="contact-heading">Book a Session with Monisha Singh</h2>

        <div className="contact-form-card">
          <form onSubmit={handleSubmit} noValidate>
            {/* Row 1: Subject */}
            <div className="form-row">
              <div className="form-group full-width">
                <select
                  name="subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  {subjectOptions.map((option) => (
                    <option key={option} value={option === 'Select Subject' ? '' : option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: First Name + Last Name */}
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="form-input"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  className="form-input"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 3: Email + Phone */}
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 4: How did you hear + Select Service */}
            <div className="form-row">
              <div className="form-group">
                <select
                  name="hearAbout"
                  className="form-select"
                  value={formData.hearAbout}
                  onChange={handleChange}
                >
                  {hearAboutOptions.map((option) => (
                    <option key={option} value={option === 'Select One' ? '' : option}>
                      {option === 'Select One' ? 'How did you hear about us' : option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option === 'Select Service' ? '' : option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 5: Message */}
            <div className="form-row">
              <div className="form-group full-width">
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>
            </div>

            {/* Row 6: Captcha */}
            <div className="form-captcha">
              <label className="form-captcha-label">
                Please enter an answer in digits:
              </label>
              <div className="form-captcha-question">
                <span className="form-captcha-math">12 + 11 =</span>
                <input
                  type="text"
                  name="captcha"
                  className="form-input form-captcha-input"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="form-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
