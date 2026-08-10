import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hosting.css';

const benefits = [
  {
    title: 'Cut Costs Without Cutting Talent',
    description: "Learners' stipends are covered; employers only pay a hosting and management fee.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: 'Workforce Support',
    description: 'Gain skilled candidates for 6-12 months to meet business needs without long-term strain.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Try Before You Hire',
    description: 'Hosting allows you to evaluate candidates in real workplace settings before deciding on permanent employment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    title: 'Change Lives While Growing Your Business',
    description: 'By hosting, you give learners the chance to gain real-life work experience, grow their skills, and potentially secure permanent roles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: 'No Talent Wasted',
    description: 'For learners not absorbed permanently, we continue supporting them with our career services to ensure they remain job-ready.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const steps = [
  'Express Interest: Share your workforce needs with us.',
  'Hosting Agreement: A clear, transparent agreement covering responsibilities, compliance, and fees. This must be signed before candidate CVs or personal information are shared.',
  'Candidate Profiles: Once the agreement is signed, we share learner profiles relevant to your needs.',
  'Interview & Selection: You interview and select the candidates who best fit your organization.',
  'Placement & Onboarding: We manage the process from interview to workplace readiness.',
  'Ongoing Support: HR, compliance, mentoring, and regular follow-ups handled by us.',
  'Review & Decision: At the end of the hosting period, you decide whether to retain the candidate permanently or conclude the placement.',
];

const stories = [
  {
    quote: 'Hosting learners gave us the extra workforce we needed without stretching our budget. One of them is now a permanent part of our team.',
  },
  {
    quote: 'We saved costs while giving young professionals the chance to prove themselves. It was a win-win.',
  },
];

export default function Hosting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="hosting" ref={ref}>
      <div className="hosting__hero">
        <div className="container">
          <motion.div
            className="hosting__hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hosting__tag">For Employers</span>
            <h1 className="hosting__title">
              Hosting &
              <span className="hosting__title-gradient"> Placement</span>
            </h1>
            <p className="hosting__description">
              At Lumar Careers, we believe no talent should be wasted. Our hosting service connects
              employers with workplace-ready candidates from accredited learnership programmes. These
              candidates already have training, workplace exposure, and in many cases qualifications.
              Hosting them offers your company affordable workforce support while giving learners the
              opportunity to gain real-life experience and prove themselves in your organization.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="hosting__container container">
        <motion.div
          className="hosting__section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="hosting__section-title">Benefits of Hosting</h2>
          <div className="hosting__benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="hosting__benefit-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="hosting__benefit-icon">{benefit.icon}</div>
                <h3 className="hosting__benefit-title">{benefit.title}</h3>
                <p className="hosting__benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hosting__section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="hosting__section-title">Hosting Process for Employers</h2>
          <div className="hosting__steps">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="hosting__step"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
              >
                <span className="hosting__step-number">{index + 1}</span>
                <p className="hosting__step-text">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hosting__section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="hosting__section-title">Employer Success Stories</h2>
          <div className="hosting__stories">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="hosting__story-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <svg className="hosting__story-quote" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="hosting__story-text">{story.quote}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hosting__cta"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="hosting__cta-title">
            Strengthen your team, cut recruitment costs, and change lives with Lumar Careers Hosting.
          </h2>
          <Link to="/contact" className="hosting__cta-btn">
            Partner With Us Today
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
