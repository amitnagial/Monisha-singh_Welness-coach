# Monisha Singh - Mindset Coach & Healer

Premium single-page wellness website for **Monisha Singh**, a Mindset Coach & Healer offering NLP Coaching, Tarot Guidance, Energy Healing, and more.

**Live Site**: https://monisha-singh-wellness-coach.vercel.app/

## Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Plain CSS (global + component-level)
- **Icons**: react-icons
- **Font**: Google Fonts - Kanit
- **Deployment**: Vercel (auto-deploys from `main` branch)

## Getting Started

### Prerequisites
- Node.js >= 20.x
- npm

### Installation

```bash
git clone https://github.com/amitnagial/Monisha-singh_Welness-coach.git
cd Monisha-singh_Welness-coach
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173/`

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
monisha-website/
  src/
    components/       # 14 component pairs (.jsx + .css)
      Header          # Sticky navbar with colorful lotus logo
      Hero            # Full-width hero with lotus design + photo
      About           # Bio section with tags + photo
      Services        # 3 service cards (Tarot, NLP, Energy Healing)
      MoreServices    # 3 additional services (Money Reiki, Crystal, Chakra)
      Consultations   # 3 consultation type cards
      MyStory         # Personal narrative section
      Stats           # Animated counters + expertise bullets
      Community       # WhatsApp + Instagram join section
      BookShowcase    # 3D tilt book display + purchase links
      Testimonials    # Auto-sliding testimonial carousel
      ContactForm     # Contact form (visual only, no backend)
      Footer          # 3-column footer + newsletter
      FloatingButtons # WhatsApp + Book A Session CTAs
    hooks/
      useScrollAnimation.js  # IntersectionObserver-based fade-in
      useCountUp.js          # Animated number counter
    App.jsx, App.css, index.css
  public/
    images/           # All website images
  vercel.json         # Security headers configuration
```

## Features

- Responsive design (mobile, tablet, desktop)
- Scroll-triggered fade-in animations
- Animated stat counters
- Auto-sliding testimonial carousel
- 3D tilt book showcase
- Floating CTA buttons (WhatsApp + Book A Session)
- Sticky header with smooth scroll navigation
- CSS lotus flower design elements

## Security

- Content Security Policy (CSP) headers configured
- X-Frame-Options, X-Content-Type-Options headers set
- All external links use `rel="noopener noreferrer"`
- No backend API keys or secrets in source code
- Zero known dependency vulnerabilities

## External Links

- **Instagram**: [@wellbeingcoach.monisha](https://www.instagram.com/wellbeingcoach.monisha/)
- **Book (Amazon)**: [amazon.in/dp/B0DYXZ6FMP](https://www.amazon.in/dp/B0DYXZ6FMP)
- **Book (Google Books)**: [books.google.co.in](https://books.google.co.in/books/about?id=KxNLEQAAQBAJ)

## Future Enhancements

- Connect contact form to Formspree or similar backend
- Add custom domain
- Add WhatsApp group invite link
- Add reCAPTCHA when form backend is connected
