import { useEffect, useState } from 'react';

const PETALS = ['🌸', '🌺', '✿', '❀', '🌼'];

function createPetal() {
  return {
    id: Math.random(),
    emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
    left: `${Math.random() * 100}%`,
    duration: 6 + Math.random() * 8,
    delay: Math.random() * 5,
    size: 0.8 + Math.random() * 0.8,
  };
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState(() => Array.from({ length: 12 }, createPetal));

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals(prev => [
        ...prev.slice(-14),
        createPetal(),
      ]);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map(p => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            fontSize: `${p.size}rem`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
