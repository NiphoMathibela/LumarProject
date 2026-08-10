import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Initial Contact',
    description: 'Reach out via WhatsApp, email, or our enquiry form.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Free CV Audit (Optional)',
    description: 'Submit your CV for a complimentary review and feedback.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Service Selection',
    description: 'Choose from CV revamps, ATS-friendly CVs, interview prep, coaching, or bundled packages.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Payment & Confirmation',
    description: 'Secure your service with transparent pricing and clear timelines.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Delivery & Coaching',
    description: 'Work with our team on CVs, applications, LinkedIn, and interview preparation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Career Growth Support',
    description: 'Access workshops, webinars, progression packages, and ongoing guidance to navigate the job market with confidence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" />
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="process" ref={ref}>
      <div className="process__container container">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="process__tag">How It Works</span>
          <h2 className="process__title">
            The Candidate
            <span className="process__title-gradient"> Process</span>
          </h2>
          <p className="process__description">
            At Lumar Careers, we make it simple for candidates to access our services and begin
            their career journey.
          </p>
        </motion.div>

        <div className="process__timeline">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`process__step ${index % 2 === 0 ? 'process__step--left' : 'process__step--right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="process__step-content">
                <div className="process__step-icon">{step.icon}</div>
                <div className="process__step-text">
                  <span className="process__step-number">Step {step.number}</span>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-description">{step.description}</p>
                </div>
              </div>
              <div className="process__step-connector">
                <div className="process__step-dot" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
