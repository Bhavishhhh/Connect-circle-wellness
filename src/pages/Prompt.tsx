import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PromptCard from '@/components/PromptCard';
import { Textarea } from '@/components/ui/textarea';
import { useMood } from '@/context/MoodContext';

const prompts = [
  "What is something small that made your day better this week?",
  "What's something you're looking forward to?",
  "What's been on your mind lately?",
  "What's one thing you're grateful for today?",
  "If you could do anything this weekend, what would it be?",
  "What's a song that always lifts your mood?",
  "What's the last thing that made you laugh?",
  "What's something kind someone did for you recently?",
  "What's a small win you've had this week?",
  "What's something that's been bringing you peace lately?",
];

const Prompt = () => {
  const navigate = useNavigate();
  const { setConversationStarter } = useMood();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useCustom, setUseCustom] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const shufflePrompt = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % prompts.length);
  }, []);

  const handleSendPrompt = () => {
    const messageToSend = useCustom ? customMessage.trim() : prompts[currentIndex];
    setConversationStarter(messageToSend);
    navigate('/chat');
  };

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
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Start with a prompt
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose a suggestion or write your own
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          className="flex gap-2 mb-6 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <button
            onClick={() => setUseCustom(false)}
            className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
              !useCustom
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            ✨ Suggested
          </button>
          <button
            onClick={() => setUseCustom(true)}
            className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
              useCustom
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            ✏️ Custom
          </button>
        </motion.div>

        {/* Prompt Card or Custom Input */}
        {!useCustom ? (
          <PromptCard prompt={prompts[currentIndex]} onShuffle={shufflePrompt} />
        ) : (
          <motion.div
            className="bg-card rounded-3xl shadow-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Type your own conversation starter..."
              className="min-h-[120px] text-lg bg-background border-border rounded-2xl resize-none focus:ring-primary"
            />
            <p className="text-muted-foreground text-sm mt-3 text-center">
              Share something on your mind or ask a thoughtful question
            </p>
          </motion.div>
        )}

        {/* Action Button */}
        <motion.div
          className="mt-8 flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={handleSendPrompt}
            disabled={useCustom && !customMessage.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl text-lg font-bold shadow-card transition-all w-full disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            💬 {useCustom ? 'Send my message' : 'Send this prompt'}
          </motion.button>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Prompt;
