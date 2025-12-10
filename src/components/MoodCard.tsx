import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMood, MoodType } from '@/context/MoodContext';

interface MoodCardProps {
  emoji: string;
  label: string;
  mood: MoodType;
}

const moodColors: Record<MoodType, string> = {
  happy: 'bg-mood-happy',
  calm: 'bg-mood-calm',
  stressed: 'bg-mood-stressed',
  lonely: 'bg-mood-lonely',
  anxious: 'bg-mood-anxious',
  neutral: 'bg-mood-neutral',
};

const MoodCard = ({ emoji, label, mood }: MoodCardProps) => {
  const navigate = useNavigate();
  const { setSelectedMood } = useMood();

  const handleClick = () => {
    setSelectedMood(mood);
    navigate('/match');
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${moodColors[mood]} w-full p-6 rounded-3xl shadow-card cursor-pointer transition-all duration-300 flex flex-col items-center gap-3`}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 12px 40px -8px hsl(270 60% 70% / 0.3)' 
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-5xl" role="img" aria-label={label}>
        {emoji}
      </span>
      <span className="text-lg font-semibold text-foreground/90">
        {label}
      </span>
    </motion.button>
  );
};

export default MoodCard;
