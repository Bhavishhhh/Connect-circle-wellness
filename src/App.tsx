import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoodProvider } from "@/context/MoodContext";
import Welcome from "./pages/Welcome";
import MoodSelector from "./pages/MoodSelector";
import Match from "./pages/Match";
import Prompt from "./pages/Prompt";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MoodProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/mood" element={<MoodSelector />} />
            <Route path="/match" element={<Match />} />
            <Route path="/prompt" element={<Prompt />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MoodProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
