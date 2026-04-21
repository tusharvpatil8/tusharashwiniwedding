import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const links = [
  { label: 'Home',    href: '#home' },
  { label: 'Events',  href: '#events' },
  { label: 'Venue',   href: '#venue' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'RSVP',    href: '#rsvp' },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(l => l.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        paddingTop: scrolled ? '10px' : '20px',
        paddingBottom: scrolled ? '10px' : '20px',
      }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-2 md:px-6">
        <motion.div 
          animate={{
            scale: scrolled ? 0.95 : 1,
            backgroundColor: scrolled ? 'rgba(61,26,46,0.85)' : 'rgba(253,246,236,0)',
            borderColor: scrolled ? 'rgba(201,168,76,0.3)' : 'rgba(201,168,76,0)',
            backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-between px-4 md:px-8 py-2 md:py-3 rounded-full border shadow-2xl"
        >
          {/* Brand/Logo - Shorter on mobile */}
          <a href="#home" className="font-script text-xl md:text-2xl text-gold-light hover:text-white transition-colors flex-shrink-0" style={{ textDecoration: 'none' }}>
            <span className="hidden sm:inline">Tushar & Ashwini</span>
            <span className="sm:hidden">T & A</span>
          </a>

          {/* Nav Links - Always Horizontal */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            {links.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;

              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={`
                    relative font-display text-[9px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] font-bold transition-all duration-300
                    ${isActive ? 'text-white' : 'text-gold-light/60 hover:text-gold-light'}
                  `}
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold shadow-[0_0_15px_rgba(201,168,76,0.9)]"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Only Labels */}
          <div className="hidden lg:flex items-center">
            <div className="w-px h-4 bg-gold/30 mx-3" />
            <div className="font-display text-[10px] tracking-[0.3em] text-emerald font-bold opacity-80 uppercase">
              May 2026
            </div>
          </div>

          {/* Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-8 right-8 h-[1px] bg-emerald/40 origin-left"
            style={{ scaleX }}
          />
        </motion.div>
      </div>
    </motion.nav>
  );
}
