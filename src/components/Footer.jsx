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
        <h2 className="premium-heading mb-4">
          Tushar &amp; Ashwini
        </h2>

        {/* Gold divider */}
        <div className="golden-divider mx-auto mb-6">
          <Heart size={16} fill="var(--rose)" color="var(--rose)" />
        </div>

        {/* Date */}
        <p className="premium-subheading premium-subheading-light mb-8">
          08 - 09 - 10 &nbsp; MAY &nbsp; 2026
        </p>

        {/* Quote */}
        <p
          className="font-display text-lg italic max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(253,246,236,0.7)', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          "A successful marriage requires falling in love many times, always with the same person."
        </p>

        {/* Bottom line */}
        <div
          className="w-32 h-px mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
        />

        <p
          className="font-display text-[10px] sm:text-xs uppercase tracking-[0.4em] font-medium"
          style={{ color: 'var(--gold-light)', opacity: 0.7, letterSpacing: '5px' }}
        >
          With Love &amp; Blessings &nbsp; ✦ &nbsp; Tushar &amp; Ashwini
        </p>
      </motion.div>
    </footer>
  );
}
