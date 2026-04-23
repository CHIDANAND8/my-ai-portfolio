import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-primary to-secondary mx-auto shadow-btn flex items-center justify-center rotate-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>
            <span className="text-4xl font-bold text-white relative z-10 -rotate-12">AI</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gradient mb-6"
        >
          Chidanand M
        </motion.h1>

        <p className="text-xl md:text-2xl text-white font-medium mb-4 tracking-wide">
          Full Stack AI/ML Engineer
        </p>

        <p className="text-lg text-text-muted mb-10 max-w-lg mx-auto leading-relaxed">
          Building highly scalable, intelligent systems powered by Large Language Models, Computer Vision, and cutting-edge Machine Learning.
        </p>

        <div className="flex gap-4 justify-center">
          <button onClick={() => navigate("/projects")} className="btn-3d">Explore Projects</button>
          <button onClick={() => navigate("/contact")} className="glass-panel px-6 py-3 font-semibold hover:bg-white/5 transition-colors">Contact Me</button>
        </div>
      </motion.div>
    </div>
  );
}