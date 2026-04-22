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
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
          className="relative font-script break-words px-4 text-center"
          style={{
            fontSize: 'clamp(3rem, 10vw, 10rem)',
            fontWeight: '600',
            lineHeight: 1.2,
          }}
        >
          {/* Glow Background */}
          <span
            className="absolute inset-0 blur-2xl opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
              zIndex: -1,
            }}
          />

          {/* Tushar */}
          <span
            style={{
              backgroundImage: 'linear-gradient(120deg, #ffffff, #f7c5bb, #e8c97a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.8)) drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
            }}
          >
            Tushar
          </span>

          {/* Animated & */}
          <motion.span
            className="inline-block mx-3"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              color: '#E8C97A',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.8))',
            }}
          >
            &amp;
          </motion.span>

          {/* Ashwini */}
          <span
            style={{
              backgroundImage: 'linear-gradient(120deg, #ffffff, #f7c5bb, #e8c97a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.8)) drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
            }}
          >
            Ashwini
          </span>

          {/* Elegant underline */}
          <motion.div
            className="mx-auto mt-4 h-[2px] rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '60%', opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            style={{
              background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
            }}
          />
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
          className="font-display text-xl md:text-2xl font-medium italic max-w-2xl mx-auto"
          style={{
            color: 'white',
            lineHeight: 1.8,
            textShadow: '0 2px 10px rgba(0,0,0,0.6)'
          }}
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
            className="glass-dark rounded-full px-4 py-4 inline-flex items-center gap-3 md:gap-6 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
            style={{ border: '1px solid rgba(232,201,122,0.4)', background: 'rgba(30, 15, 25, 0.7)' }}
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
