import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Check } from 'lucide-react';

export default function RSVP() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', attending: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.attending) return;
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="section-pad bg-deep-gradient">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-script text-5xl mb-3"
          style={{ color: 'var(--gold-light)' }}
        >
          RSVP
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
          className="font-display text-base italic mb-10"
          style={{ color: 'rgba(253,246,236,0.6)', letterSpacing: '2px' }}
        >
          Kindly respond by 1st May 2026
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-12 text-center"
            style={{
              background: 'linear-gradient(145deg, rgba(253,246,236,0.08), rgba(253,246,236,0.04))',
              border: '1px solid rgba(201,168,76,0.35)',
            }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(201,168,76,0.2)', border: '2px solid var(--gold)' }}
            >
              <Check size={36} color="var(--gold)" />
            </div>
            <p className="font-script text-4xl mb-3" style={{ color: 'var(--gold-light)' }}>
              Thank You, {form.name}!
            </p>
            <p className="font-display text-lg italic" style={{ color: 'rgba(253,246,236,0.7)' }}>
              {form.attending === 'yes'
                ? "We're so excited to celebrate with you! 🎉"
                : "We'll miss you, but we carry you in our hearts. 💕"}
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(145deg, rgba(253,246,236,0.08), rgba(253,246,236,0.04))',
              border: '1px solid rgba(201,168,76,0.3)',
            }}
          >
            {/* Name */}
            <div className="mb-5 text-left">
              <label
                className="block font-display text-sm mb-2 tracking-widest uppercase"
                style={{ color: 'var(--gold)', letterSpacing: '2px' }}
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="rsvp-input"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            {/* Attending */}
            <div className="mb-5 text-left">
              <label
                className="block font-display text-sm mb-3 tracking-widest uppercase"
                style={{ color: 'var(--gold)', letterSpacing: '2px' }}
              >
                Will you be attending?
              </label>
              <div className="flex gap-4">
                {['yes', 'no'].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setForm({ ...form, attending: val })}
                    className="flex-1 py-3 rounded-xl font-display text-sm transition-all duration-300"
                    style={{
                      border: '1px solid rgba(201,168,76,0.4)',
                      background: form.attending === val
                        ? 'linear-gradient(135deg, var(--gold), var(--gold-light))'
                        : 'rgba(253,246,236,0.08)',
                      color: form.attending === val ? 'var(--deep)' : 'rgba(253,246,236,0.7)',
                      fontWeight: form.attending === val ? 600 : 400,
                    }}
                  >
                    {val === 'yes' ? '✅  Joyfully Accepts' : '❌  Regretfully Declines'}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-7 text-left">
              <label
                className="block font-display text-sm mb-2 tracking-widest uppercase"
                style={{ color: 'var(--gold)', letterSpacing: '2px' }}
              >
                Message (Optional)
              </label>
              <textarea
                placeholder="Share your blessings or a warm message..."
                className="rsvp-input"
                rows={4}
                style={{ resize: 'vertical' }}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-gold w-full justify-center">
              <Send size={15} />
              Send RSVP
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
