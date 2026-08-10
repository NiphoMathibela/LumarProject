import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "I never thought my CV could look this professional. Within weeks, I landed interviews and felt confident walking into them.",
    author: 'Satisfied Candidate',
    role: 'Candidate',
    type: 'candidate',
    video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    thumbnail: 'https://images.pexels.com/photos/11507566/pexels-photo-11507566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    quote: "Working with Lumar Careers was seamless. They prepared candidates who were not only qualified but ready to add value from day one.",
    author: 'HR Manager',
    role: 'Partner Organization',
    type: 'employer',
    video: 'https://test-videos.co.uk/vids/sintel/mp4/h264/360/Sintel_360_10s_1MB.mp4',
    thumbnail: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    quote: "The training sessions gave me confidence I didn't know I had. I walked into the job market prepared, and it made all the difference.",
    author: 'Placed Candidate',
    role: 'Candidate',
    type: 'candidate',
    video: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_2MB.mp4',
    thumbnail: 'https://images.pexels.com/photos/9301461/pexels-photo-9301461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    quote: "Transparent, professional, and impactful - that's how I'd describe their work. We've seen real results with the talent they've prepared.",
    author: 'Company Director',
    role: 'Partner Organization',
    type: 'employer',
    video: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4',
    thumbnail: 'https://images.pexels.com/photos/20374423/pexels-photo-20374423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('pause', handlePause);
    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

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
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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
                onPlay={(id) => setPlayingId(id)}
              />
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__list">
            {testimonials.map((t, index) => (
              <motion.button
                key={t.id}
                className={`testimonials__item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
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
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
