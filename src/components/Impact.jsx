import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Impact.css';

const stats = [
  {
    value: '100%',
    label: 'Candidate Success Rate',
    description: 'Every candidate leaves more confident',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    value: '200+',
    label: 'CVs Transformed',
    description: 'Into professional, ATS-friendly documents',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    value: '150+',
    label: 'Candidates Placed',
    description: 'With companies and organizations',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: '95%',
    label: 'Employer Satisfaction',
    description: 'With workplace-ready talent',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
  },
  {
    value: '300+',
    label: 'Hours of Training',
    description: 'Delivered to empower candidates',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="impact" ref={ref}>
      <div className="impact__container container">
        <motion.div
          className="impact__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="impact__tag">Our Impact</span>
          <h2 className="impact__title">
            Numbers That
            <span className="impact__title-gradient"> Speak</span>
          </h2>
          <p className="impact__description">
            We measure success not only by placements, but by the confidence and growth of every
            candidate we support.
          </p>
        </motion.div>

        <div className="impact__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="impact__card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -20px rgba(232, 29, 140, 0.15)' }}
            >
              <div className="impact__card-icon">{stat.icon}</div>
              <span className="impact__card-value">{stat.value}</span>
              <span className="impact__card-label">{stat.label}</span>
              <span className="impact__card-description">{stat.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
