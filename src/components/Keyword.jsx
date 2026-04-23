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
    if (explanation) return; // already fetched

    setLoading(true);
    try {
      const res = await fetch("https://portfolio-backend-lo2f.onrender.com/explain", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ word })
      });
      const data = await res.json();
      setExplanation(data.result);
    } catch (err) {
      setExplanation("Error: Could not connect to AI backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <span 
      className="relative inline-flex items-center mx-1 group"
      onMouseLeave={() => setIsOpen(false)}
    >
      {logo && <img src={logo} alt={word} className="w-5 h-5 mr-1 object-contain inline-block" />}
      <span 
        className="text-primary font-semibold cursor-pointer border-b border-primary/30 hover:border-primary transition-colors"
        onClick={handleClick}
      >
        {word}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-black/95 border border-primary/50 p-4 text-sm shadow-2xl rounded-xl"
          >
            {loading ? (
              <div className="flex items-center gap-2 text-text-muted animate-pulse">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: "0.4s"}}></div>
              </div>
            ) : (
              <p className="text-gray-200 leading-relaxed">{explanation}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}