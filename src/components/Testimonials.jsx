import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "Really impressed with Lumar Careers! They took my old CV and transformed it into something modern and professional. The team understood my experience and made it stand out. Fast turnaround and great communication. Thank you, Lumar Careers!",
    author: 'Amanda Sikhakhane',
    role: 'Candidate',
    type: 'candidate',
    video: '/Testimony1.mp4',
    thumbnail: '/Test1Thumb.png',
  },
  {
    id: 2,
    quote: "Lumar Careers gave me the confidence to go through with my interviews by articulating myself well in conversation, by dressing the part, by being able to have the confidence to speak and let my employer, potential employer, know. And they gave me the opportunity for my first interview post-matric.",
    author: 'Shannon Godfrey',
    role: 'Job Seeker',
    type: 'employer',
    video: '/Testimony2.mp4',
    thumbnail: '/Test2Thumb.png',
  },
  {
    id: 3,
    quote: "Lumar Careers gives us that closure by assisting us with revamping our CVs and helping us get better information on how workspaces actually run and work in this day and age. They assist us with interview preparations, and trust me, it actually helps.",
    author: 'Hangwani Kwinda',
    role: 'Job Seeker',
    type: 'candidate',
    video: '/Testimony3.mp4',
    thumbnail: '/Test3Thumb.png',
  },
];

function VideoCard({ testimonial, isActive, onPlay }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      onPlay(testimonial.id);
    } else {
      video.pause();
      setIsPlaying(false);
      onPlay(null); // Notify parent that video is paused
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePause = () => {
      setIsPlaying(false);
      onPlay(null); // Notify parent when video is paused
    };
    const handlePlay = () => {
      setIsPlaying(true);
      onPlay(testimonial.id);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      onPlay(null); // Notify parent when video ends
    };

    video.addEventListener('pause', handlePause);
    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, [testimonial.id, onPlay]);

  // Pause video when it's not the active testimonial
  useEffect(() => {
    const video = videoRef.current;
    if (video && !isActive) {
      video.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  return (
    <div className={`testimonials__video-card ${isActive ? 'active' : ''}`}>
      <div className="testimonials__video-wrapper">
        <video
          ref={videoRef}
          className="testimonials__video"
          src={testimonial.video}
          poster={testimonial.thumbnail}
          preload="metadata"
          playsInline
        />
        <motion.button
          className={`testimonials__play-btn ${isPlaying ? 'hidden' : ''}`}
          onClick={handlePlayClick}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>
        <div className={`testimonials__video-overlay ${isPlaying ? 'hidden' : ''}`} />
      </div>
      <div className="testimonials__video-info">
        <div className="testimonials__video-badge">
          {testimonial.type === 'candidate' ? 'Candidate' : 'Employer'}
        </div>
        <blockquote className="testimonials__video-quote">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="testimonials__video-author">
          <cite className="testimonials__video-name">{testimonial.author}</cite>
          <span className="testimonials__video-role">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Only auto-slide if no video is playing
    if (playingId !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [playingId]); // Re-run effect when playingId changes

  const handlePlay = (id) => {
    setPlayingId(id);
  };

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials__container container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials__tag">What Our Clients Say</span>
          <h2 className="testimonials__title">
            Voices of
            <span className="testimonials__title-gradient"> Success</span>
          </h2>
          <p className="testimonials__description">
            The numbers tell our story, but the voices of those we've helped show the heart behind
            our work. Watch their stories below.
          </p>
        </motion.div>

        <div className="testimonials__grid">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonials__featured"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
            >
              <VideoCard
                testimonial={testimonials[activeIndex]}
                isActive={true}
                onPlay={handlePlay}
              />
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__list">
            {testimonials.map((t, index) => (
              <motion.button
                key={t.id}
                className={`testimonials__item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  setActiveIndex(index);
                  setPlayingId(null); // Reset playing state when manually selecting
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="testimonials__item-avatar">
                  <img src={t.thumbnail} alt={t.author} loading="lazy" />
                </div>
                <div className="testimonials__item-content">
                  <span className="testimonials__item-author">{t.author}</span>
                  <span className="testimonials__item-role">{t.role}</span>
                </div>
                <div className={`testimonials__item-indicator ${index === activeIndex ? 'active' : ''}`} />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials__dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                setActiveIndex(index);
                setPlayingId(null); // Reset playing state when manually selecting
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}