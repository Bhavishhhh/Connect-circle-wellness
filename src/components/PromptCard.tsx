import { motion, AnimatePresence } from 'framer-motion';

interface PromptCardProps {
  prompt: string;
  onShuffle: () => void;
}

const PromptCard = ({ prompt, onShuffle }: PromptCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-3xl shadow-card p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={prompt}
          className="text-xl md:text-2xl font-medium text-foreground/90 text-center leading-relaxed mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          "{prompt}"
        </motion.p>
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <motion.button
          onClick={onShuffle}
          className="px-6 py-3 rounded-2xl border-2 border-border bg-transparent text-foreground/70 font-semibold transition-all hover:bg-muted hover:border-muted"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          🔄 Give me another one
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PromptCard;
