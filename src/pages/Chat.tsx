import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Send } from 'lucide-react';
import Layout from '@/components/Layout';
import { useMood } from '@/context/MoodContext';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const Chat = () => {
  const navigate = useNavigate();
  const { selectedMood, conversationStarter } = useMood();
  
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Heyy! Thanks for reaching out 😊", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState(conversationStarter || '');
  const [hasReplied, setHasReplied] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue.trim(),
      isUser: true,
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    
    // Only auto-reply once after user's first message
    if (!hasReplied) {
      setHasReplied(true);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "That's really nice to hear! I'd love to chat more about that ✨",
          isUser: false,
        }]);
      }, 1000);
    }
  };

  return (
    <Layout className="!p-0">
      <div className="flex flex-col h-screen">
        {/* Header */}
        <motion.header
          className="bg-card/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h1 className="text-xl font-bold text-foreground">Your Check-In</h1>
            {selectedMood && (
              <span className="text-sm text-muted-foreground capitalize">
                Mood: {selectedMood}
              </span>
            )}
          </div>
          <motion.button
            onClick={() => navigate('/')}
            className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go home"
          >
            <Home className="w-5 h-5 text-muted-foreground" />
          </motion.button>
        </motion.header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                  message.isUser
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-card shadow-soft text-foreground rounded-bl-md'
                }`}
              >
                <p className="text-base leading-relaxed">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <motion.div
          className="bg-card/80 backdrop-blur-md border-t border-border px-4 py-4 sticky bottom-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 max-w-lg mx-auto">
          <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-muted/50 border border-border rounded-2xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
            />
            <motion.button
              onClick={handleSendMessage}
              className="bg-primary hover:bg-primary/90 p-3 rounded-2xl text-primary-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">
            This is a prototype — replies are simulated
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Chat;
