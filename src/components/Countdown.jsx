import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WEDDING_DATE = new Date('2026-05-10T00:00:00');

function getCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="countdown-card" style={{ minWidth: '110px' }}>
        <motion.div
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="font-display font-bold relative z-10"
          style={{
            fontSize: 'clamp(3rem, 7vw, 4.5rem)',
            color: 'var(--gold-light)',
            lineHeight: 1,
          }}
        >
          {String(value).padStart(2, '0')}
        </motion.div>
      </div>
      <span
        className="font-display text-xs uppercase"
        style={{ color: 'var(--gold)', letterSpacing: '4px' }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getCountdown());
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const id = setInterval(() => setTime(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="countdown" className="section-pad bg-deep-gradient">
      <div ref={ref} className="max-w-4xl mx-auto text-center px-4">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-script mb-2"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--gold-light)' }}
        >
          Counting Down
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-base italic mb-12"
          style={{ color: 'rgba(253,246,236,0.55)', letterSpacing: '3px' }}
        >
          until we say "I Do"
        </motion.p>

        {/* Timer — fully centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Digit value={time.days}    label="Days" />
          <div className="font-display font-thin pt-4" style={{ fontSize: '3rem', color: 'var(--gold)', lineHeight: 1 }}>:</div>
          <Digit value={time.hours}   label="Hours" />
          <div className="font-display font-thin pt-4" style={{ fontSize: '3rem', color: 'var(--gold)', lineHeight: 1 }}>:</div>
          <Digit value={time.minutes} label="Minutes" />
          <div className="font-display font-thin pt-4" style={{ fontSize: '3rem', color: 'var(--gold)', lineHeight: 1 }}>:</div>
          <Digit value={time.seconds} label="Seconds" />
        </motion.div>

        {/* Wedding date reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-sm mt-10 italic"
          style={{ color: 'rgba(253,246,236,0.4)', letterSpacing: '3px' }}
        >
          Sunday, 10 May 2026
        </motion.p>
      </div>
    </section>
  );
}
