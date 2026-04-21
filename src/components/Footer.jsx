import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2a0f1e, #3D1A2E, #5a2840)' }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
      />

      {/* Decorative flowers */}
      <div className="absolute top-4 left-4 text-3xl opacity-30" style={{ color: 'var(--blush)' }}>🌸</div>
      <div className="absolute top-4 right-4 text-3xl opacity-30" style={{ color: 'var(--blush)' }}>🌸</div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Names */}
        <p
          className="font-script mb-2"
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: 'white' }}
        >
          Tushar &amp; Ashwini
        </p>

        {/* Gold divider */}
        <div className="golden-divider mx-auto mb-4">
          <Heart size={14} fill="var(--gold)" color="var(--gold)" />
        </div>

        {/* Date */}
        <p
          className="font-display text-base tracking-widest mb-6"
          style={{ color: 'var(--gold)', letterSpacing: '4px' }}
        >
          08 - 09 - 10 &nbsp; MAY &nbsp; 2026
        </p>

        {/* Quote */}
        <p
          className="font-display text-lg italic max-w-md mx-auto mb-8 leading-relaxed"
          style={{ color: 'rgba(253,246,236,0.6)' }}
        >
          "A successful marriage requires falling in love many times, always with the same person."
        </p>

        {/* Bottom line */}
        <div
          className="w-24 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
        />

        <p
          className="font-display text-sm"
          style={{ color: 'rgba(253,246,236,0.35)', letterSpacing: '2px' }}
        >
          With Love &amp; Blessings &nbsp; ✦ &nbsp; Tushar &amp; Ashwini
        </p>
      </motion.div>
    </footer>
  );
}
