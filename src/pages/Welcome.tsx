import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import FloatingCircles from '@/components/FloatingCircles';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Layout centered>
      <FloatingCircles />
      
      <div className="text-center">
        {/* Logo/App name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
            Connect<span className="text-muted-foreground">Circle</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Small check-ins that make a big difference.
        </motion.p>

        {/* Decorative circles */}
        <motion.div
          className="flex justify-center gap-3 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="w-3 h-3 rounded-full bg-mood-happy animate-float" />
          <span className="w-3 h-3 rounded-full bg-mood-calm animate-float-delayed" />
          <span className="w-3 h-3 rounded-full bg-mood-anxious animate-float" />
          <span className="w-3 h-3 rounded-full bg-mood-lonely animate-float-delayed" />
          <span className="w-3 h-3 rounded-full bg-mood-neutral animate-float" />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate('/mood')}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl text-lg font-bold shadow-card transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.03, boxShadow: '0 12px 40px -8px hsl(45 100% 60% / 0.4)' }}
          whileTap={{ scale: 0.98 }}
        >
          ✨ Start Check-In
        </motion.button>
      </div>
    </Layout>
  );
};

export default Welcome;
