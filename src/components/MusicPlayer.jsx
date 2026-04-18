import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';

// Background song: Koi Lafz Hi Nahi
const MUSIC_URL = '/koi-lafz.m4a';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    // Hide label after 4 seconds
    const t = setTimeout(() => setShowLabel(false), 4000);

    // Attempt to autoplay
    const attemptPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setPlaying(true);
        }).catch(() => {
          // Autoplay blocked, wait for user interaction
          const playOnInteract = () => {
            if (audioRef.current) {
              audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
            }
            document.removeEventListener('click', playOnInteract);
          };
          document.addEventListener('click', playOnInteract);
        });
      }
    };

    attemptPlay();

    return () => clearTimeout(t);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" autoPlay />

      {/* Floating Controls */}
      <div
        className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3"
      >
        {/* Tooltip Label */}
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="glass-dark rounded-full px-4 py-2"
            >
              <span className="font-display text-sm italic" style={{ color: 'var(--gold-light)' }}>
                🎵 Wedding Music
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mute button (shows only when playing) */}
        <AnimatePresence>
          {playing && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={toggleMute}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(61,26,46,0.85)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: 'var(--gold)',
                cursor: 'pointer',
              }}
              title={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Main Play/Pause FAB */}
        <motion.button
          onClick={togglePlay}
          className={`music-fab ${playing ? 'playing' : ''}`}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          title={playing ? 'Pause Music' : 'Play Music'}
        >
          {/* Pulse rings when playing */}
          {playing && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '2px solid rgba(201,168,76,0.4)' }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '2px solid rgba(201,168,76,0.25)' }}
                animate={{ scale: [1, 1.9, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </>
          )}
          {playing
            ? <Pause size={22} fill="currentColor" />
            : <Music size={22} />}
        </motion.button>
      </div>
    </>
  );
}
