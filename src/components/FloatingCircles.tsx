import { motion } from 'framer-motion';

const FloatingCircles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large circle - top right */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-mood-calm/40 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium circle - bottom left */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-mood-happy/40 blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Small circle - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-mood-anxious/30 blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Extra small circle - top left */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-mood-lonely/40 blur-2xl"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Accent circle - bottom right */}
      <motion.div
        className="absolute bottom-32 right-10 w-32 h-32 rounded-full bg-mood-neutral/40 blur-2xl"
        animate={{
          y: [0, -18, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
};

export default FloatingCircles;
