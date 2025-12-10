import React, { createContext, useContext, useState, ReactNode } from 'react';

export type MoodType = 'happy' | 'calm' | 'stressed' | 'lonely' | 'anxious' | 'neutral';

interface MoodContextType {
  selectedMood: MoodType | null;
  setSelectedMood: (mood: MoodType) => void;
  conversationStarter: string | null;
  setConversationStarter: (message: string) => void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [conversationStarter, setConversationStarter] = useState<string | null>(null);

  return (
    <MoodContext.Provider value={{ selectedMood, setSelectedMood, conversationStarter, setConversationStarter }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error('useMood must be used within a MoodProvider');
  }
  return context;
};
