import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Keyword({ word, logo }) {
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    
    setIsOpen(true);
    if (explanation) return;

    setLoading(true);
    try {
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const API_URL = isLocal ? "http://localhost:8000" : (import.meta.env.VITE_API_URL || "http://localhost:8000");
      const res = await fetch(`${API_URL}/explain`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word })
      });
      const data = await res.json();
      setExplanation(data.result || "No explanation received.");
    } catch (err) {
      setExplanation(`Could not retrieve AI summary (${err.message}).`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="relative inline-flex items-center"
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-indigo-500/40 text-slate-200 hover:text-white transition-all text-xs font-medium group cursor-pointer"
        title={`Click to ask AI about ${word}`}
      >
        {logo && (
          <img src={logo} alt={word} className="w-4 h-4 object-contain shrink-0 filter drop-shadow" />
        )}
        <span>{word}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 animate-pulse" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#090d16]/95 border border-indigo-500/40 backdrop-blur-xl p-4 text-xs shadow-2xl rounded-2xl pointer-events-auto"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2 border-b border-white/[0.08] pb-1.5">
              <span className="text-indigo-400 font-semibold uppercase">{word} • AI Definition</span>
              <span>FastAPI</span>
            </div>

            {loading ? (
              <div className="flex items-center gap-2 text-slate-400 py-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                <span className="ml-1 text-[11px] font-mono">Querying LLM core...</span>
              </div>
            ) : (
              <p className="text-slate-200 leading-relaxed text-xs">
                {explanation}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}