import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);

  const defaultBotGreeting = {
    bot: "Hello! I am Chidanand's Portfolio AI Copilot. I can answer questions about his experience at Reliance Retail (cutting API calls by 40%), his OvaCare computer vision system, MLOps, AWS certifications, and skill set. How can I help you evaluate his profile?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  // Load history
  useEffect(() => {
    try {
      const saved = localStorage.getItem("chatHistory");
      if (saved) {
        const parsed = JSON.parse(saved);
        setChat(Array.isArray(parsed) && parsed.length > 0 ? parsed : [defaultBotGreeting]);
      } else {
        setChat([defaultBotGreeting]);
      }
    } catch {
      setChat([defaultBotGreeting]);
    }
  }, []);

  // Save history
  useEffect(() => {
    if (chat.length > 0) {
      try {
        localStorage.setItem("chatHistory", JSON.stringify(chat));
        window.dispatchEvent(new Event("chatHistoryUpdated"));
      } catch {
        // storage quota or disabled
      }
    }
  }, [chat]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, open, loading]);

  // Listen for global "openChatWithPrompt" events (e.g. from Home page quick chips)
  useEffect(() => {
    const handleOpenWithPrompt = (e) => {
      const prompt = e.detail?.prompt;
      setOpen(true);
      if (prompt) {
        sendMessage(prompt);
      }
    };
    window.addEventListener("openChatWithPrompt", handleOpenWithPrompt);
    return () => window.removeEventListener("openChatWithPrompt", handleOpenWithPrompt);
  }, []);

  const sendMessage = async (customMsg = null) => {
    const textToSend = typeof customMsg === "string" ? customMsg : message;
    if (!textToSend.trim()) return;

    const userMsg = textToSend.trim();
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message immediately
    setChat(prev => [...prev, { user: userMsg, timestamp }]);
    if (typeof customMsg !== "string") {
      setMessage("");
    }
    setLoading(true);

    try {
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const API_URL = isLocal ? "http://localhost:8000" : (import.meta.env.VITE_API_URL || "http://localhost:8000");
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      
      const botReply = data.reply || "No reply generated.";
      setChat(prev => [...prev, { bot: botReply, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch (err) {
      setChat(prev => [...prev, { 
        bot: `Notice: Could not connect to AI backend (${err.message}). If running locally, check that the FastAPI server is running on port 8000.`, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    localStorage.removeItem("chatHistory");
    setChat([defaultBotGreeting]);
    window.dispatchEvent(new Event("chatHistoryUpdated"));
  };

  const promptChips = [
    "How did you reduce API costs by 40%?",
    "Explain the OvaCare CNN model",
    "List core MLOps and AWS skills",
    "Why hire Chidanand as an AI Engineer?"
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-[#090d16]/95 border border-indigo-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl w-[92vw] sm:w-[410px] h-[520px] max-h-[85vh] rounded-2xl flex flex-col mb-4 absolute bottom-full right-0 overflow-hidden"
          >
            {/* Copilot Header */}
            <div className="px-4 py-3 bg-[#0d1322] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold font-mono shadow-md shadow-indigo-500/30">
                  AI
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs tracking-tight flex items-center gap-1.5">
                    Portfolio Copilot
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">
                    FastAPI • Groq LLM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={clearChat}
                  className="text-[10px] font-mono text-slate-400 hover:text-rose-400 px-2 py-1 rounded bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                  title="Clear conversation"
                >
                  Reset
                </button>
                <button 
                  onClick={() => setOpen(false)} 
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors text-sm"
                  aria-label="Close copilot"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-xs">
              {chat.map((c, i) => (
                <div key={i} className="space-y-1">
                  {c.user && (
                    <div className="flex flex-col items-end">
                      <div className="bg-indigo-600 text-white px-3.5 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] leading-relaxed shadow-sm">
                        {c.user}
                      </div>
                      {c.timestamp && (
                        <span className="text-[9px] text-slate-400 mt-1 mr-1 font-mono">
                          {c.timestamp}
                        </span>
                      )}
                    </div>
                  )}

                  {c.bot && (
                    <div className="flex flex-col items-start">
                      <div className="bg-white/[0.05] border border-white/[0.08] text-slate-200 px-3.5 py-2.5 rounded-2xl rounded-tl-none max-w-[90%] leading-relaxed">
                        {c.bot}
                      </div>
                      {c.timestamp && (
                        <span className="text-[9px] text-slate-400 mt-1 ml-1 font-mono">
                          Copilot • {c.timestamp}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Live Loading Indicator */}
              {loading && (
                <div className="flex items-center gap-1.5 text-slate-400 bg-white/[0.03] border border-white/[0.06] px-3 py-2 rounded-xl w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "0.4s" }} />
                  <span className="text-[10px] font-mono ml-1">Analyzing candidate profile...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 border-t border-white/[0.06] bg-black/20 flex gap-1.5 overflow-x-auto custom-scrollbar shrink-0">
              {promptChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(chip)}
                  disabled={loading}
                  className="whitespace-nowrap text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-indigo-300 border border-white/[0.06] transition-colors shrink-0 disabled:opacity-50"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Message Input Box */}
            <div className="p-3 border-t border-white/[0.08] bg-[#090d16] flex gap-2">
              <input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
                placeholder="Ask about projects, RAG, CNNs, AWS..."
                disabled={loading}
                className="input-3d flex-1 py-2 text-xs"
              />
              <button 
                onClick={() => sendMessage()}
                disabled={loading || !message.trim()}
                className="btn-3d px-3.5 py-2 text-xs shrink-0 disabled:opacity-50"
              >
                <span>Send</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)} 
        className="h-13 px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(99,102,241,0.5)] flex items-center gap-2.5 transition-all text-white border border-indigo-400/30"
        style={{ background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #9333ea 100%)" }}
        aria-label="Open AI Copilot"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>
        <span className="font-bold text-xs tracking-wide">Ask AI Copilot</span>
      </motion.button>
    </div>
  );
}