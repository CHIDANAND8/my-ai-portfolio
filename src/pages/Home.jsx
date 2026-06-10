import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-center items-center relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel p-12 max-w-3xl text-center relative z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 inline-block"
        >
          <div className="w-40 h-40 rounded-full mx-auto shadow-[0_0_30px_#4f46e5] flex items-center justify-center relative overflow-hidden border-4 border-primary/50">
            <img src={heroImage} alt="Chidanand M" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gradient mb-6"
        >
          Chidanand M
        </motion.h1>

        <p className="text-xl md:text-2xl text-white font-medium mb-4 tracking-wide">
          AI/ML Engineer
        </p>

        <p className="text-lg text-text-muted mb-10 max-w-lg mx-auto leading-relaxed">
          Building production-grade AI systems with LLMs, RAG, Generative AI, and Deep Learning — turning complex ML research into scalable, measurable business impact.
        </p>

        <div className="flex gap-4 justify-center">
          <button onClick={() => navigate("/projects")} className="btn-3d">Explore Projects</button>
          <button onClick={() => navigate("/contact")} className="glass-panel px-6 py-3 font-semibold hover:bg-white/5 transition-colors">Contact Me</button>
        </div>
      </motion.div>
    </div>
  );
}