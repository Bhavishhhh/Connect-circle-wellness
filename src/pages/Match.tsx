import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/Layout';
import MatchingCard from '@/components/MatchingCard';

const Match = () => {
  const navigate = useNavigate();
  const [matchKey, setMatchKey] = useState(0);

  const handleRematch = () => {
    setMatchKey(prev => prev + 1);
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
          <div className="inline-block bg-accent px-4 py-1.5 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground">
              ✨ Match Found
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            We found someone like you today
          </h1>
          <p className="text-muted-foreground text-lg">
            Someone who might appreciate a quick check-in
          </p>
        </motion.div>

        {/* Matching Card */}
        <motion.div
          key={matchKey}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MatchingCard key={matchKey} />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            onClick={handleRematch}
            className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-2xl font-semibold shadow-soft transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <RefreshCw className="w-5 h-5" />
            Find Someone Else
          </motion.button>
          <motion.button
            onClick={() => navigate('/prompt')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl text-lg font-bold shadow-card transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue →
          </motion.button>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Match;
