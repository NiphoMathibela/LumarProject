import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const stats = [
  { value: '150+', label: 'Placed', icon: 'briefcase' },
  { value: '100%', label: 'Success Rate', icon: 'check' },
  { value: '5+', label: 'Years', icon: 'calendar' },
];

const heroIcons = {
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.8a2 2 0 001.3 1.3L21 12l-5.8 1.9a2 2 0 00-1.3 1.3L12 21l-1.9-5.8a2 2 0 00-1.3-1.3L3 12l5.8-1.9a2 2 0 001.3-1.3L12 3z" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
};

const features = [
  { icon: 'sparkles', label: 'CV Transformation', delay: 0.4 },
  { icon: 'users', label: 'Interview Prep', delay: 0.55 },
  { icon: 'rocket', label: 'Job Placement', delay: 0.7 },
  { icon: 'heart', label: 'Ongoing Support', delay: 0.85 },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__gradient-orb hero__gradient-orb--primary" />
        <div className="hero__gradient-orb hero__gradient-orb--secondary" />
        <div className="hero__gradient-orb hero__gradient-orb--accent" />
      </div>

      <div className="hero__container container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="hero__badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </span>
            Empowering South African Job Seekers
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The Lumar
            <span className="hero__title-gradient"> Promise</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Our mission at Lumar Careers is to break the cycle of desperate job searching by preparing candidates with professional appearance, employability skills, and workplace readiness. We empower individuals to enter and exit the job market with confidence while giving employers access to transparent, inclusive, and job ready talent.
          </motion.p>

          <motion.div
            className="hero__features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.label}
                className="hero__feature"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -3, scale: 1.04 }}
              >
                <span className="hero__feature-icon">{heroIcons[feature.icon]}</span>
                {feature.label}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="hero__cta-wrapper"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link to="/services" className="hero__cta hero__cta--primary">
                For Candidates
                {heroIcons.rocket}
              </Link>
            </motion.div>
            <motion.div
              className="hero__cta-wrapper"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link to="/hosting" className="hero__cta hero__cta--secondary">
                <span className="hero__cta-icon">
                  {heroIcons.users}
                </span>
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>

          {/* <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="hero__stat"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="hero__stat-icon">{heroIcons[stat.icon]}</span>
                <div className="hero__stat-text">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
                {index < stats.length - 1 && <span className="hero__stat-divider" />}
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="hero__illustration">
            <div className="hero__card-grid">
              <motion.div
                className="hero__card"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <div className="hero__card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </div>
                <div className="hero__card-text">
                  <span className="hero__card-label">CV Transformed</span>
                  <span className="hero__card-sublabel">ATS-Ready</span>
                </div>
              </motion.div>

              <motion.div
                className="hero__card"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="hero__card-icon hero__card-icon--accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <div className="hero__card-text">
                  <span className="hero__card-label">Interview Ready</span>
                  <span className="hero__card-sublabel">150+ Placed</span>
                </div>
              </motion.div>

              <motion.div
                className="hero__card"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <div className="hero__card-icon hero__card-icon--warm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="hero__card-text">
                  <span className="hero__card-label">100% Success</span>
                  <span className="hero__card-sublabel">Candidate Rate</span>
                </div>
              </motion.div>

              <motion.div
                className="hero__card"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="hero__card-icon hero__card-icon--coffee">
                  {heroIcons.coffee}
                </div>
                <div className="hero__card-text">
                  <span className="hero__card-label">1-on-1 Coaching</span>
                  <span className="hero__card-sublabel">Real Support</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="hero__floating-icon hero__floating-icon--1"
              animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              whileHover={{ scale: 1.25, rotate: 15 }}
            >
              {heroIcons.target}
            </motion.div>

            <motion.div
              className="hero__floating-icon hero__floating-icon--2"
              animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              whileHover={{ scale: 1.25, rotate: -15 }}
            >
              {heroIcons.zap}
            </motion.div>

            <motion.div
              className="hero__floating-icon hero__floating-icon--3"
              animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              whileHover={{ scale: 1.25, rotate: 20 }}
            >
              {heroIcons.check}
            </motion.div>

            <motion.div
              className="hero__floating-icon hero__floating-icon--4"
              animate={{ y: [0, -10, 0], rotate: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              whileHover={{ scale: 1.25, rotate: -20 }}
            >
              {heroIcons.sparkles}
            </motion.div>

            <motion.div
              className="hero__floating-icon hero__floating-icon--5"
              animate={{ y: [0, 9, 0], rotate: [0, 12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              whileHover={{ scale: 1.25, rotate: 18 }}
            >
              {heroIcons.award}
            </motion.div>

            <motion.div
              className="hero__floating-icon hero__floating-icon--6"
              animate={{ y: [0, -7, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              whileHover={{ scale: 1.25, rotate: -18 }}
            >
              {heroIcons.star}
            </motion.div>

            <motion.div
              className="hero__floating-icon hero__floating-icon--7"
              animate={{ y: [0, 11, 0], rotate: [0, 14, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              whileHover={{ scale: 1.25, rotate: 22 }}
            >
              {heroIcons.compass}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
