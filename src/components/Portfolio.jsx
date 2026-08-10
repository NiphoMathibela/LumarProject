import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Luxe Fashion House',
    category: 'E-Commerce',
    description: 'A premium fashion e-commerce platform with immersive shopping experience and seamless checkout.',
    image: 'https://images.pexels.com/photos/362041/pexels-photo-362041.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    stats: { conversions: '+180%', speed: '2.1s', visitors: '250K/mo' },
  },
  {
    id: 2,
    title: 'FinTrack Dashboard',
    category: 'Web Application',
    description: 'Real-time financial analytics dashboard with advanced data visualization and reporting tools.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'D3.js', 'Node.js'],
    stats: { users: '15K+', uptime: '99.9%', dataPoints: '2M+' },
  },
  {
    id: 3,
    title: 'EcoLife Wellness',
    category: 'Brand & Website',
    description: 'Complete brand identity and responsive website for a wellness and lifestyle company.',
    image: 'https://images.pexels.com/photos/1029602/pexels-photo-1029602.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Branding', 'WordPress', 'Animation'],
    stats: { engagement: '+95%', sessions: '4.2min', bounce: '-45%' },
  },
  {
    id: 4,
    title: 'TechStartup SaaS',
    category: 'Web Application',
    description: 'Modern SaaS landing page and web application with subscription management and user dashboards.',
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Firebase', 'Stripe'],
    stats: { signups: '8K+', mrr: '$120K', churn: '-60%' },
  },
  {
    id: 5,
    title: 'Urban Realty Group',
    category: 'E-Commerce',
    description: 'Property listing platform with advanced search, virtual tours, and lead management system.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB'],
    stats: { listings: '2K+', leads: '+340%', views: '500K/mo' },
  },
  {
    id: 6,
    title: 'Artisan Restaurant',
    category: 'Brand & Website',
    description: 'Elegant restaurant website with reservation system, menu showcase, and online ordering.',
    image: 'https://images.pexels.com/photos/1126396/pexels-photo-1126396.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Svelte', 'Contentful', 'Maps API'],
    stats: { reservations: '+200%', orders: '+150%', reviews: '4.9★' },
  },
];

const categories = ['All', 'E-Commerce', 'Web Application', 'Brand & Website'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="portfolio__container container">
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="portfolio__tag">Our Work</span>
          <h2 className="portfolio__title">
            Projects That
            <span className="portfolio__title-gradient"> Inspire</span>
          </h2>
          <p className="portfolio__description">
            Explore our latest work and see how we've helped businesses transform their
            digital presence with innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="portfolio__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`portfolio__filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio__grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="portfolio__card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -8 }}
            >
              <div className="portfolio__card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <motion.div
                  className="portfolio__card-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="portfolio__card-btn"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
              <div className="portfolio__card-content">
                <span className="portfolio__card-category">{project.category}</span>
                <h3 className="portfolio__card-title">{project.title}</h3>
                <p className="portfolio__card-description">{project.description}</p>
                <div className="portfolio__card-stats">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">{value}</span>
                      <span className="portfolio__card-stat-label">{key}</span>
                    </div>
                  ))}
                </div>
                <div className="portfolio__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio__card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="portfolio__cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p>Want to see more of our work?</p>
          <motion.a
            href="#contact"
            className="portfolio__cta-btn"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
