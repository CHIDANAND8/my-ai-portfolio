import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // Load history
  useEffect(() => {
    const saved = localStorage.getItem("chatHistory");
    if (saved) {
      setChat(JSON.parse(saved));
    }
  }, []);

  // Save history
  useEffect(() => {
    if (chat.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(chat));
      window.dispatchEvent(new Event("chatHistoryUpdated"));
    }
  }, [chat]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    const userMsg = message;
    const timestamp = new Date().toLocaleString();
    setChat(prev => [...prev, { user: userMsg, bot: "...", timestamp }]);
    setMessage("");

    try {
      const res = await fetch("https://portfolio-backend-lo2f.onrender.com/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      
      setChat(prev => prev.map((c, i) => 
        i === prev.length - 1 ? { user: userMsg, bot: data.reply, timestamp } : c
      ));
    } catch(err) {
      setChat(prev => prev.map((c, i) => 
        i === prev.length - 1 ? { user: userMsg, bot: "Error connecting to AI core.", timestamp } : c
      ));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="glass-panel w-80 h-96 p-4 flex flex-col mb-4 absolute bottom-full right-0"
          >
            <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
              <h3 className="font-semibold text-white">Asistant</h3>
              <div className="flex gap-2">
                {chat.length > 0 && (
                  <button onClick={() => {
                    localStorage.removeItem("chatHistory");
                    setChat([]);
                    window.dispatchEvent(new Event("chatHistoryUpdated"));
                  }} className="text-xs text-red-400 hover:text-red-300">Clear</button>
                )}
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">&times;</button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {chat.map((c, i) => (
                <div key={i} className="flex flex-col gap-1 text-sm">
                  {c.timestamp && <span className="text-[10px] text-gray-500 text-center w-full block mb-1">{c.timestamp}</span>}
                  <div className="self-end bg-primary/20 border border-primary/30 text-white p-2 rounded-xl rounded-tr-none max-w-[80%]">
                    {c.user}
                  </div>
                  <div className="self-start bg-white/5 border border-white/10 text-gray-300 p-2 rounded-xl rounded-tl-none max-w-[80%]">
                    {c.bot}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                className="input-3d flex-1 py-2 text-sm"
                placeholder="Ask me anything..."
              />
              <button onClick={sendMessage} className="btn-3d px-3 py-2 text-sm">
                &gt;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)} 
        className="w-14 h-14 rounded-full shadow-btn flex items-center justify-center float-right"
        style={{ background: "linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)" }}
      >
        <span className="text-white font-bold">AI</span>
      </motion.button>
    </div>
  );
}