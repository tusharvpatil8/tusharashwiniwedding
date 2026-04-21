import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom Artistic Icons
const MehndiIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
    <circle cx="12" cy="12" r="2" />
    <path d="M12 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" />
    <path d="M12 5a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7z" opacity="0.3" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
      <path key={deg} d="M12 2v3" transform={`rotate(${deg} 12 12)`} />
    ))}
    <circle cx="12" cy="12" r="9" strokeDasharray="1 3" opacity="0.5" />
  </svg>
);

const HaldiIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
    <path d="M3 12a9 9 0 0 0 18 0" />
    <path d="M21 12c0-3-2-5-5-5s-5 2-5 5" />
    <path d="M11 7l-2-4" />
    <circle cx="12" cy="12" r="3" opacity="0.2" fill={color} />
    <path d="M7 12c0-2 1-3 3-3" opacity="0.5" />
    <path d="M18 8l1-1" opacity="0.8" />
    <path d="M15 4l1 1" opacity="0.8" />
  </svg>
);

const WeddingIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
    <circle cx="8" cy="12" r="5" />
    <circle cx="16" cy="12" r="5" />
    <path d="M12 8a5 5 0 0 1 0 8" opacity="0.5" />
    <path d="M8 7a3 3 0 0 1 0 6" opacity="0.3" />
    <path d="M16 7a3 3 0 0 1 0 6" opacity="0.3" />
    <path d="M12 2v2M12 20v2" opacity="0.2" />
  </svg>
);

const events = [
  {
    id: 'mehndi',
    icon: MehndiIcon,
    title: 'Mehndi Ceremony',
    day: 'Friday',
    date: '08 May 2026',
    desc: 'An evening of henna, music, and dance! Let the colors of Mehndi celebrate the beginning of our beautiful journey together.',
    bg: 'linear-gradient(145deg, #F0FFF4, #DCFCE7)',
    border: 'rgba(34,197,94,0.5)',
    accent: '#166534',
    topBar: 'linear-gradient(90deg, transparent, #22C55E, transparent)',
  },
  {
    id: 'haldi',
    icon: HaldiIcon,
    title: 'Haldi Ceremony',
    day: 'Saturday',
    date: '09 May 2026',
    desc: 'Join us as we begin the wedding celebrations with the auspicious Haldi ceremony — a joyful ritual filled with laughter, love, and turmeric blessings.',
    bg: 'linear-gradient(145deg, #FFFBEA, #FFF3C4)',
    border: 'rgba(232,163,32,0.5)',
    accent: '#C8860A',
    topBar: 'linear-gradient(90deg, transparent, #E8A320, transparent)',
  },
  {
    id: 'wedding',
    icon: WeddingIcon,
    title: 'Wedding Ceremony',
    day: 'Sunday',
    date: '10 May 2026',
    desc: 'The grand celebration of love! Witness Tushar & Ashwini exchange vows and embark on their journey as one — a moment filled with joy, blessings, and beautiful memories.',
    bg: 'linear-gradient(145deg, #FDF0F4, #F9E0EA)',
    border: 'rgba(212,128,142,0.5)',
    accent: '#A0405A',
    topBar: 'linear-gradient(90deg, transparent, #D4808E, transparent)',
  },
];

export default function Events() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="events" className="section-pad bg-cream-gradient">
      <div ref={ref} className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-script mb-3"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: 'var(--burgundy)' }}
          >
            Celebrations
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
            Three Days of Joy & Blessings
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              className="flex"
            >
              <div
                style={{
                  background: ev.bg,
                  border: `1px solid ${ev.border}`,
                  borderRadius: '24px',
                  padding: '0',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
                className="event-card-inner"
              >
                {/* Top gradient bar */}
                <div style={{
                  height: '3px',
                  background: ev.topBar,
                  width: '100%',
                }} />

                <div style={{ padding: '2.5rem 2rem 2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Corner decorations */}
                  <div style={{
                    position: 'absolute', top: '16px', left: '16px',
                    width: '30px', height: '30px',
                    borderTop: `2px solid ${ev.border}`, borderLeft: `2px solid ${ev.border}`,
                    opacity: 0.7,
                  }} />
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    width: '30px', height: '30px',
                    borderTop: `2px solid ${ev.border}`, borderRight: `2px solid ${ev.border}`,
                    opacity: 0.7,
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '16px', left: '16px',
                    width: '30px', height: '30px',
                    borderBottom: `2px solid ${ev.border}`, borderLeft: `2px solid ${ev.border}`,
                    opacity: 0.7,
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '16px', right: '16px',
                    width: '30px', height: '30px',
                    borderBottom: `2px solid ${ev.border}`, borderRight: `2px solid ${ev.border}`,
                    opacity: 0.7,
                  }} />

                  {/* Custom Icon Badge */}
                  <div style={{
                    width: '80px', height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.8)',
                    border: `1px solid ${ev.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: `0 8px 30px rgba(0,0,0,0.04)`,
                    color: ev.accent,
                  }}>
                    <ev.icon color={ev.accent} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-script text-center mb-2"
                    style={{ fontSize: '2.2rem', color: ev.accent, lineHeight: 1.2 }}
                  >
                    {ev.title}
                  </h3>

                  {/* Day & Date */}
                  <div className="text-center mb-5">
                    <p
                      className="font-display text-xs mb-1"
                      style={{ color: ev.accent, opacity: 0.6, letterSpacing: '4px', textTransform: 'uppercase' }}
                    >
                      {ev.day}
                    </p>
                    <p
                      className="font-display text-2xl font-semibold"
                      style={{ color: 'var(--deep)' }}
                    >
                      {ev.date}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: '60px', height: '1px',
                      margin: '0 auto 1.5rem',
                      background: `linear-gradient(90deg, transparent, ${ev.accent}, transparent)`,
                    }}
                  />

                  {/* Description */}
                  <p
                    className="font-display text-base text-center font-light leading-relaxed mt-auto"
                    style={{ color: 'var(--deep)', opacity: 0.7 }}
                  >
                    {ev.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .event-card-inner:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 70px rgba(201,168,76,0.18);
        }
      `}</style>
    </section>
  );
}
