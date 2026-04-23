import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ proj }) => {
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
      const res = await fetch("http://localhost:8000/explain_project", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title: proj.title, details: proj.details })
      });
      const data = await res.json();
      
      if (!res.ok) {
        setExplanation(`Error: ${data.detail || 'Server error'}`);
      } else {
        setExplanation(data.result);
      }
    } catch (err) {
      setExplanation(`Error: Could not connect to AI backend. ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel p-8 flex flex-col relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      <div className="flex flex-col mb-4">
        <h2 
          className="text-2xl font-bold text-white mb-2 cursor-pointer hover:text-primary transition-colors flex items-center gap-2"
          onClick={handleClick}
        >
          {proj.title}
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full uppercase tracking-wider">
            Ask AI
          </span>
        </h2>
        <span className="text-sm text-gray-400 mb-4">{proj.duration}</span>
        <div className="flex flex-wrap gap-2 mb-4">
          {proj.tags.map(tag => (
            <span key={tag} className="text-xs bg-white/10 text-primary border border-primary/20 px-2 py-1 rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex-1 overflow-hidden"
          >
            <div className="p-4 bg-black/40 rounded-xl border border-white/5 mt-2">
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                AI Summary
              </div>
              
              {loading ? (
                <div className="flex items-center gap-2 text-text-muted animate-pulse mt-4 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: "0.4s"}}></div>
                  <span className="ml-2 text-sm text-gray-400">Analyzing project architecture...</span>
                </div>
              ) : (
                <p className="text-gray-300 leading-relaxed text-sm">{explanation}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "OvaCare — AI-Powered PCOS Healthcare Platform",
      duration: "Jan 2026 – Apr 2026",
      tags: ["React 18", "Node.js", "Python Flask", "CNN (MobileNetV2)", "Random Forest"],
      details: [
        "Architected a full-stack healthcare platform for PCOS detection and wellness management using React 18, Node.js, MongoDB, Flask, and Socket.IO.",
        "Built a 4-layer AI detection engine: CNN deep learning (MobileNetV2), HuggingFace Vision AI, OpenCV fallback, and Random Forest symptom-based classifier.",
        "Trained and deployed a Random Forest Classifier using scikit-learn on clinical and lifestyle data for early PCOS risk prediction with 85–90% accuracy.",
        "Implemented real-time anonymous community chat (Socket.IO), period cycle tracking, and a PCOS-friendly diet tracker.",
        "Secured the platform with JWT authentication, bcrypt password hashing, and Multer-validated file uploads."
      ]
    },
    {
      title: "Relex Enterprise AI — LLM-Powered Full Stack Chat System",
      duration: "2025",
      tags: ["LLaMA", "FastAPI", "React.js", "SQLite"],
      details: [
        "Built a production-grade conversational AI platform using LLaMA, FastAPI, React.js, and SQLite.",
        "Achieved 95%+ query accuracy with a 40% reduction in LLM API calls via a database-hybrid response pipeline.",
        "Deployed a scalable API-driven backend with CORS and comprehensive error handling, supporting 500+ concurrent enterprise users."
      ]
    },
    {
      title: "Ogtech eCommerce Web Application",
      duration: "2025",
      tags: ["MERN Stack", "Performance Optimization"],
      details: [
        "Built a fully responsive eCommerce platform supporting 200+ product SKUs with cart and checkout flows.",
        "Optimized page load time by 20% via lazy loading and asset compression techniques."
      ]
    },
    {
      title: "Hotel & Restaurant Booking Website",
      duration: "Jan 2025 – Feb 2025",
      tags: ["Full Stack", "Database Management"],
      details: [
        "Delivered a full-stack booking platform handling 50+ concurrent reservations.",
        "Built database-backed storage and a clean, mobile-responsive user interface."
      ]
    }
  ];

  return (
    <div className="p-10 text-white min-h-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gradient mb-8">Key Projects</h1>
        <p className="text-text-muted mb-8 italic">Click on any project title to have the AI generate a summary of the architecture and achievements.</p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard key={index} proj={proj} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}