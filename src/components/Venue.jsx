import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Navigation } from 'lucide-react';

const MAPS_EMBED =
  'https://maps.google.com/maps?q=21.1692735,73.0079615&output=embed';
const MAPS_LINK =
  'https://www.google.com/maps/place/21%C2%B010\'09.4%22N+73%C2%B000\'28.7%22E/@21.1692735,73.0079615,17z/';

export default function Venue() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="venue" className="section-pad bg-rose-gradient">
      <div ref={ref} className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-script mb-3"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: 'var(--burgundy)' }}
          >
            The Venue
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
            className="font-display text-base italic"
            style={{ color: 'var(--deep)', opacity: 0.55, letterSpacing: '2px' }}
          >
            Where the magic happens
          </motion.p>
        </div>

        {/* Layout: stack on mobile, side-by-side on desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
        }} className="venue-grid">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div
              style={{
                background: 'linear-gradient(145deg, #3D1A2E, #5a2840)',
                border: '1px solid rgba(201,168,76,0.45)',
                borderRadius: '24px',
                padding: '2.5rem',
                position: 'relative',
              }}
              className="venue-card-inner shadow-2xl text-center md:text-left flex flex-col items-center md:items-start"
            >
              {/* Corner decors */}
              {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h]) => (
                <div key={`${v}${h}`} style={{
                  position: 'absolute',
                  [v]: '14px', [h]: '14px',
                  width: '28px', height: '28px',
                  borderColor: 'rgba(201,168,76,0.5)',
                  borderStyle: 'solid',
                  borderWidth: v === 'top' && h === 'left' ? '2px 0 0 2px'
                    : v === 'top' && h === 'right' ? '2px 2px 0 0'
                    : v === 'bottom' && h === 'left' ? '0 0 2px 2px'
                    : '0 2px 2px 0',
                }} />
              ))}

              {/* Icon */}
              <div style={{
                width: '56px', height: '56px',
                borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <MapPin size={22} color="var(--gold)" />
              </div>

              <h3
                className="font-script mb-3"
                style={{ fontSize: '2.2rem', color: 'var(--gold-light)', lineHeight: 1.2 }}
              >
                Sai Angan Society
              </h3>

              <div style={{
                width: '48px', height: '1px', marginBottom: '1.25rem',
                background: 'linear-gradient(90deg, var(--gold), transparent)',
              }} className="md:ml-0" />

              <p
                className="font-display text-lg leading-relaxed mb-6"
                style={{ color: 'rgba(253,246,236,0.85)' }}
              >
                Plot No. 169,<br />
                Sai Angan Society,<br />
                Jolwa, Kadodara,<br />
                Surat, Gujarat
              </p>

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-fit"
                style={{ textDecoration: 'none' }}
              >
                <Navigation size={15} />
                Open in Maps
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="map-wrapper shadow-2xl" style={{ height: '380px', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.3)' }}>
              <iframe
                title="Venue Location"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .venue-grid {
            grid-template-columns: 2fr 3fr !important;
          }
        }
      `}</style>
    </section>
  );
}
