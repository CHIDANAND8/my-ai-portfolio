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
      const res = await fetch("https://portfolio-backend-lo2f.onrender.com/explain_project", {
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
      title: "OvaCare — AI-Powered PCOS Detection Platform",
      duration: "Jan 2026 – Apr 2026",
      tags: ["React 18", "Node.js", "MongoDB", "Flask", "CNN (MobileNetV2)", "HuggingFace", "Random Forest"],
      details: [
        "Architected a 4-layer AI diagnostic engine — CNN deep learning (MobileNetV2, 80–90% accuracy), HuggingFace Vision AI (85–95% accuracy), OpenCV computer vision fallback, and Random Forest symptom classifier (scikit-learn, 85–90% accuracy) — with automatic failover guaranteeing 100% detection availability; evaluated models using precision/recall, cross-validation, and bias-variance analysis to optimise clinical reliability.",
        "Delivered 3 real-time wellness modules (anonymous community chat via Socket.IO, predictive period cycle tracker, PCOS-diet nutrition monitor) with JWT authentication, bcrypt hashing, and Multer file validation — end-to-end ML pipeline from feature engineering and model training to HIPAA-aligned production deployment on React 18 (TypeScript), Node.js/Express 5, MongoDB, Flask.",
        "Demonstrated measurable business impact: multi-layer failover architecture ensures zero downtime for diagnostic availability; SQL-backed session and feature storage underpins data persistence across all modules."
      ]
    },
    {
      title: "Relex Enterprise AI — LLM-Powered Enterprise Chat System",
      duration: "Dec 2025 – Mar 2026",
      tags: ["LLaMA", "FastAPI", "React.js", "SQLite", "MLOps"],
      details: [
        "Built a production-grade conversational AI platform (LLaMA, FastAPI, React.js, SQLite) achieving 95%+ query accuracy; engineered a database-hybrid LLM data pipeline with A/B-tested prompt strategies that cut AI inference API calls by 40% — demonstrating cost-efficient MLOps at scale and translating enterprise client requirements into a maintainable AI system.",
        "Scaled to 500+ concurrent enterprise users via an API-driven backend with full CORS support, model evaluation metrics, and comprehensive error handling; used SQLite for structured feature and session storage supporting multi-turn dialogue continuity."
      ]
    },
    {
      title: "AI Resume Analyzer — LLM-Powered ATS Optimisation Tool",
      duration: "2026",
      tags: ["FastAPI", "React.js", "SQLite", "spaCy NLP", "LLM"],
      details: [
        "Built an end-to-end AI resume analysis engine (FastAPI, React.js, SQLite, spaCy NLP) performing keyword extraction and feature engineering on resume text — generating ATS scores (0–100) and section-wise feedback via structured LLM prompt engineering with consistent JSON output; evaluated NLP pipeline quality using precision/recall metrics.",
        "Implemented JWT authentication, bcrypt hashing, and SQLite-backed history persistence; SQL queries used for per-user session retrieval and result aggregation demonstrate applied data manipulation skills required in enterprise ML pipelines."
      ]
    },
    {
      title: "PromptLab AI — LLM Prompt Testing and Optimisation Platform",
      duration: "2026",
      tags: ["FastAPI", "React.js", "TypeScript", "Docker", "CI/CD"],
      details: [
        "Engineered a full-stack prompt engineering workbench (FastAPI, React.js TypeScript, Tailwind CSS, SQLite) with an A/B testing engine for prompt variants, customisable LLM parameter controls (temperature, max tokens), and Recharts performance dashboards — enabling data-driven model evaluation across OpenAI and LLaMA providers.",
        "Containerised with Docker Compose and NGINX reverse proxy; CI/CD pipeline via GitHub Actions for automated build and deployment — demonstrating production MLOps practices and end-to-end machine learning pipeline design."
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