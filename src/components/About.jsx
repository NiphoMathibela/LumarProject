import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container container">
        <div className="about__content">
          <motion.div
            className="about__intro"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about__tag">Who We Are</span>
            <h2 className="about__title">
              Building Confidence,
              <span className="about__title-gradient"> Creating Opportunity</span>
            </h2>

            <div className="about__vision">
              <h3>Our Vision</h3>
              <p className="about__description">
                Our vision is a job market where every candidate, regardless of background, has the
                confidence, skills, and opportunity to succeed, while employers gain access to
                transparent, inclusive, and workplace-ready talent.
              </p>
            </div>

            <div className="about__values">
              <h3>Our Values</h3>
              <p className="about__description">
                We uphold inclusivity and professionalism, creating fair opportunities and delivering
                services that reflect respect, quality, and care.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about__story"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__story-card">
              <span className="about__story-tag">Our Founding Story</span>
              <p className="about__story-text">
                Lumar Careers was born out of firsthand experience working with training providers and 
                supporting candidates on learnerships. While some learners secured permanent positions, 
                many were left behind with outdated CVs, little knowledge of the job market, and no clear path forward.
              </p>
              <p className="about__story-text">
                We saw candidates applying endlessly out of desperation, often needing to support their families but lacking the tools and confidence to succeed. 
                Others excluded from learnerships because of age or circumstance had nowhere to turn.
              </p>
              <p className="about__story-text">
                Lumar Careers exists to change that. We walk with candidates from the very beginning, transforming CVs, building employability skills, and preparing them to enter the job market with confidence. 
                Our mission is to break the cycle of desperate job searching and create a bridge between potential and opportunity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
