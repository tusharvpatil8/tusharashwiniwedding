import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Use picsum photos with specific numeric seeds that give romantic/floral images
const photos = [
  { id: 'couple', src: '/tushar&ashwini.png', label: 'Tushar & Ashwini' },
];

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="gallery" className="section-pad bg-cream-gradient">
      <div ref={ref} className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="premium-heading premium-heading-dark mb-3"
          >
            Our Moments
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="golden-divider"
          >
            <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>✦</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="premium-subheading"
          >
            Memories captured in time
          </motion.p>
        </div>

        {/* Single featured photo — centered */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {photos.map((p, i) => (
            <motion.div
              key={p.id}
              className="gallery-item group"
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              whileHover={{ scale: 1.03, rotate: 1, zIndex: 10 }}
              style={{ width: '420px', maxWidth: '90vw', aspectRatio: '1', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.18)' }}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                className="group-hover:scale-110"
              />
              <div className="gallery-overlay bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="font-display text-sm italic"
                  style={{ color: 'var(--gold-light)' }}
                >
                  {p.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: repeat(1, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
