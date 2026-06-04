import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate static leaves initially to avoid hydration mismatch
    const newLeaves = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 20,
      size: 16 + Math.random() * 20,
      rotation: Math.random() * 360,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{ y: -100, x: `${leaf.x}vw`, rotate: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            x: `${leaf.x + (Math.random() * 20 - 10)}vw`,
            rotate: leaf.rotation + 360,
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute text-brand-primary opacity-20 dark:opacity-10"
          style={{ width: leaf.size, height: leaf.size }}
        >
          <Leaf className="w-full h-full drop-shadow-sm" />
        </motion.div>
      ))}
    </div>
  );
}
