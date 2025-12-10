import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import MoodCard from '@/components/MoodCard';
import { MoodType } from '@/context/MoodContext';

interface MoodOption {
  emoji: string;
  label: string;
  mood: MoodType;
}

const moods: MoodOption[] = [
  { emoji: '💛', label: 'Happy', mood: 'happy' },
  { emoji: '💙', label: 'Calm', mood: 'calm' },
  { emoji: '🧡', label: 'Stressed', mood: 'stressed' },
  { emoji: '💔', label: 'Lonely', mood: 'lonely' },
  { emoji: '💜', label: 'Anxious', mood: 'anxious' },
  { emoji: '💚', label: 'Neutral', mood: 'neutral' },
];

const MoodSelector = () => {
  return (
    <Layout>
      <motion.div
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How are you feeling right now?
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose the mood that best describes you today
          </p>
        </motion.div>

        {/* Mood Grid */}
        <div className="grid grid-cols-2 gap-4">
          {moods.map((mood, index) => (
            <motion.div
              key={mood.mood}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
            >
              <MoodCard
                emoji={mood.emoji}
                label={mood.label}
                mood={mood.mood}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default MoodSelector;
