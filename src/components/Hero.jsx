import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Slow Zoom (Ken Burns) and Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')", y: y1 }}
        animate={{ scale: [1.05, 1.15, 1.05] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Floating decorative sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-0"
          style={{
            top: `${10 + (i * 11)}%`,
            left: i % 2 === 0 ? `${8 + (i * 5)}%` : 'auto',
            right: i % 2 !== 0 ? `${8 + (i * 5)}%` : 'auto',
            color: i % 3 === 0 ? 'var(--blush)' : 'var(--gold-light)',
            fontSize: i % 3 === 0 ? '1.5rem' : '2rem',
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.1, 0.7, 0.1],
            rotate: [0, 45, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        >
          {i % 3 === 0 ? '🌸' : '✦'}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity: contentOpacity }}
      >
        {/* Top label */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-display text-lg italic mb-6"
          style={{ color: 'var(--gold-light)', letterSpacing: '6px' }}
        >
          ✦ &nbsp; WITH GREAT JOY &nbsp; ✦
        </motion.p>

        {/* Main Names with character animation */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
          className="font-script break-words px-4"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 8rem)',
            lineHeight: 1.2,
            color: '#fff',
            textShadow: '0 8px 40px rgba(201,168,76,0.6)',
          }}
        >
          Tushar <span className="inline-block">&amp;</span> Ashwini
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, type: 'spring' }}
          className="golden-divider my-8 mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={25} fill="var(--rose)" color="var(--rose)" />
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(1.1)}
          className="font-display text-xl md:text-2xl font-light italic max-w-2xl mx-auto"
          style={{ color: 'rgba(253,246,236,0.95)', lineHeight: 1.8 }}
        >
          Together with their families, invite you to celebrate their wedding
        </motion.p>

        {/* Date Badge */}
        <motion.div
          {...fadeUp(1.4)}
          className="mt-10 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="glass-dark rounded-full px-4 py-4 inline-flex items-center gap-2 md:gap-5 shadow-[0_0_30px_rgba(201,168,76,0.2)]"
            style={{ border: '1px solid rgba(201,168,76,0.5)' }}
          >
            <span className="font-display text-base md:text-xl font-medium"
              style={{ color: 'var(--gold-light)', letterSpacing: '4px' }}>
              08 MAY 2026
            </span>
            <motion.span
              style={{ color: 'var(--gold)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              ✦
            </motion.span>
            <span className="font-display text-base md:text-xl font-medium"
              style={{ color: 'var(--gold-light)', letterSpacing: '4px' }}>
              09 MAY 2026
            </span>
            <motion.span
              style={{ color: 'var(--gold)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              ✦
            </motion.span>
            <span className="font-display text-base md:text-xl font-medium"
              style={{ color: 'var(--gold-light)', letterSpacing: '4px' }}>
              10 MAY 2026
            </span>
          </div>
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          {...fadeUp(1.8)}
          className="mt-16 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="font-display text-xs tracking-[0.3em] transition-colors group-hover:text-white" style={{ color: 'rgba(253,246,236,0.6)' }}>
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="p-2 rounded-full border border-transparent group-hover:border-[var(--gold)] transition-colors"
          >
            <ChevronDown size={24} color="var(--gold)" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
