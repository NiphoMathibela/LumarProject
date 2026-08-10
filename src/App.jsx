import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Process from './components/Process';
import Hosting from './components/Hosting';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Impact />
      <Testimonials />
      <About />
      <Process />
      <Contact />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <About />
      <Impact />
      <Testimonials />
      <Contact />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Services />
      <Process />
      <Contact />
    </>
  );
}

function HostingPage() {
  return (
    <>
      <Hosting />
      <Contact />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/hosting" element={<HostingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
