import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const events = [
  {
    id: 'haldi',
    emoji: '🌼',
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
    emoji: '💍',
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
            Two Days of Joy & Blessings
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
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
                }}
                className="event-card-inner"
              >
                {/* Top gradient bar */}
                <div style={{
                  height: '3px',
                  background: ev.topBar,
                  width: '100%',
                }} />

                <div style={{ padding: '2.5rem 2rem 2.5rem' }}>
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

                  {/* Emoji Badge */}
                  <div style={{
                    width: '72px', height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.75)',
                    border: `1px solid ${ev.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    margin: '0 auto 1.5rem',
                    boxShadow: `0 4px 20px rgba(0,0,0,0.06)`,
                  }}>
                    {ev.emoji}
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
                    className="font-display text-base text-center font-light leading-relaxed"
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
