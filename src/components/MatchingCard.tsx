import { motion } from 'framer-motion';
import { useMood, MoodType } from '@/context/MoodContext';
import { useMemo } from 'react';

const moodDescriptions: Record<MoodType, string[]> = {
  happy: [
    "Feeling great and ready to spread some positivity!",
    "In a cheerful mood and happy to connect.",
  ],
  calm: [
    "Calm and open to a small check-in.",
    "Peaceful and looking for a gentle conversation.",
  ],
  stressed: [
    "A bit overwhelmed and could use some support.",
    "Feeling the pressure but open to venting.",
  ],
  lonely: [
    "Feeling a little lonely and could use a quick chat.",
    "Would love some friendly company right now.",
  ],
  anxious: [
    "Feeling a bit anxious and could use a distraction.",
    "Looking for someone to help ease the worries.",
  ],
  neutral: [
    "Just checking in and open to chat.",
    "Feeling balanced and curious to connect.",
  ],
};

const moodTagColors: Record<MoodType, string> = {
  happy: 'bg-mood-happy',
  calm: 'bg-mood-calm',
  stressed: 'bg-mood-stressed',
  lonely: 'bg-mood-lonely',
  anxious: 'bg-mood-anxious',
  neutral: 'bg-mood-neutral',
};

const generateInitials = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const first = letters[Math.floor(Math.random() * letters.length)];
  const second = letters[Math.floor(Math.random() * letters.length)];
  return first + second;
};

const MatchingCard = () => {
  const { selectedMood } = useMood();
  const mood = selectedMood || 'neutral';

  const initials = useMemo(() => generateInitials(), []);
  const description = useMemo(() => {
    const descriptions = moodDescriptions[mood];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  }, [mood]);

  return (
    <motion.div
      className="bg-card rounded-3xl shadow-card p-8 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Avatar with breathing animation */}
      <motion.div
        className={`w-24 h-24 ${moodTagColors[mood]} rounded-full mx-auto flex items-center justify-center mb-6 relative`}
        animate={{ 
          boxShadow: [
            '0 0 0 0 hsl(270 60% 80% / 0.4)',
            '0 0 0 15px hsl(270 60% 80% / 0)',
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-3xl font-bold text-foreground/80">
          {initials}
        </span>
      </motion.div>

      {/* Mood tag */}
      <div className={`inline-block ${moodTagColors[mood]} px-4 py-1.5 rounded-full mb-4`}>
        <span className="text-sm font-medium text-foreground/80 capitalize">
          {mood}
        </span>
      </div>

      {/* Description */}
      <p className="text-foreground/70 text-lg leading-relaxed">
        "{description}"
      </p>
    </motion.div>
  );
};

export default MatchingCard;
