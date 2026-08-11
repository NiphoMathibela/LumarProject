import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Footer.css';

const founders = [
  { name: 'Nipho Mathibela', emoji: 'rocket' },
  { name: 'Sambulo Zulu', emoji: 'star' },
];

const footerLinks = {
  services: [
    { name: 'For Candidates', href: '/services' },
    { name: 'For Employers', href: '/services' },
    { name: 'Hosting & Placement', href: '/hosting' },
    { name: 'CV Transformation', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Impact', href: '/' },
    { name: 'Testimonials', href: '/' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/lumar-careers/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/27705605436?text=Hi%20Lumar%20Careers!%20I`d%20like%20to%20learn%20more%20about%20your%20workplace%20readiness%20and%20employability%20training',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/lumarcareers?igsh=NXAyZG55ZnhscmZz',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__glow" />

      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img
                src="https://i.ibb.co/KpSVnVWM/3801290d-4dd1-4d6f-9b57-f9eaa0eac0bc-1.png"
                alt="Lumar Careers logo"
                className="footer__logo-img"
              />
              <span className="footer__logo-text">Lumar</span>
              <span className="footer__logo-accent">Careers</span>
            </Link>
            <p className="footer__tagline">
              Breaking the cycle of desperate job searching. We prepare candidates with confidence,
              skills, and workplace readiness.
            </p>
            <div className="footer__socials">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.name}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {social.icon}
                  <span className="footer__social-tooltip">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer__newsletter">
            <h4 className="footer__newsletter-title">Stay in the loop</h4>
            <p className="footer__newsletter-desc">
              Get career tips and placement updates delivered to your inbox.
            </p>
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <div className="footer__newsletter-input-wrap">
                <span className="footer__newsletter-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className={`footer__newsletter-btn ${subscribed ? 'success' : ''}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {subscribed ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12,5 19,12 12,19" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-group">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>
                    <span className="footer__link-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12,5 19,12 12,19" />
                      </svg>
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__nav-group">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>
                    <span className="footer__link-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12,5 19,12 12,19" />
                      </svg>
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__nav-group">
            <h4>Legal</h4>
            <ul>
              <li><a href="#"><span className="footer__link-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg></span>Privacy Policy</a></li>
              <li><a href="#"><span className="footer__link-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg></span>Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <motion.div
          className="footer__founders"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer__founders-badge">
            <motion.span
              className="footer__founders-spark"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.9 5.8a2 2 0 001.3 1.3L21 12l-5.8 1.9a2 2 0 00-1.3 1.3L12 21l-1.9-5.8a2 2 0 00-1.3-1.3L3 12l5.8-1.9a2 2 0 001.3-1.3L12 3z" />
              </svg>
            </motion.span>
            <span className="footer__founders-label">Crafted with passion by</span>
            <a href="https://nipho.onrender.com/">
                          <div className="footer__founders-names">
              {founders.map((founder, index) => (
                <motion.span
                  key={founder.name}
                  className="footer__founder-name"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                >
                  {founder.name}
                  {index < founders.length - 1 && <span className="footer__founders-amp"> &amp; </span>}
                </motion.span>
              ))}
            </div>
            </a>
          </div>
        </motion.div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Lumar Careers. All rights reserved.
          </p>
          <p className="footer__location">
            <span className="footer__location-pin">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            Serving South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
