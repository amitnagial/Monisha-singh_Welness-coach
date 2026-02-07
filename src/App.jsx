import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MoreServices from './components/MoreServices'
import Consultations from './components/Consultations'
import MyStory from './components/MyStory'
import Stats from './components/Stats'
import Community from './components/Community'
import BookShowcase from './components/BookShowcase'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Services />
      <MoreServices />
      <Consultations />
      <MyStory />
      <Stats />
      <Community />
      <BookShowcase />
      <Testimonials />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
