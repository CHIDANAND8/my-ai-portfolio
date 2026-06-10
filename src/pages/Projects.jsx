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
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h2 
            className="text-2xl font-bold text-white mb-2 cursor-pointer hover:text-primary transition-colors flex items-center gap-2"
            onClick={handleClick}
          >
            {proj.title}
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full uppercase tracking-wider">
              Ask AI
            </span>
          </h2>
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-3 py-1.5 rounded-full transition-all border border-white/10 shrink-0 mt-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          )}
        </div>
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
      github: "https://github.com/CHIDANANDM8/Ovacare",
      tags: ["TensorFlow", "PyTorch", "CNN/MobileNetV2", "HuggingFace", "scikit-learn", "FastAPI", "Docker", "CI/CD"],
      details: [
        "Built a 4-layer AI diagnostic engine using Deep Learning (TensorFlow, PyTorch, CNN/MobileNetV2, 80–90% accuracy), HuggingFace Transformers Vision AI (85–95% accuracy), and a Machine Learning symptom classifier (scikit-learn) — with automatic failover guaranteeing 100% detection availability; evaluated using precision/recall, cross-validation, and bias-variance analysis.",
        "Deployed end-to-end ML pipeline with MLOps practices: feature engineering, model training, model evaluation, and production deployment via Docker, CI/CD (GitHub Actions), and Git, with SQL-backed data persistence and a Python/FastAPI backend."
      ]
    },
    {
      title: "Relex Enterprise AI — LLM-Powered Enterprise Chat System",
      duration: "Dec 2025 – Mar 2026",
      github: "https://github.com/CHIDANANDM8/Relex-ai",
      tags: ["LLaMA", "LangChain", "RAG", "FAISS", "FastAPI", "Docker", "Kubernetes", "AWS", "MLOps"],
      details: [
        "Built a production conversational AI platform using Python, LangChain, RAG, vector databases (FAISS), LLMs (LLaMA), and FastAPI achieving 95%+ query accuracy; engineered a database-hybrid pipeline with A/B-tested prompt engineering that cut AI inference API calls by 40%, demonstrating cost-efficient Generative AI and MLOps at scale.",
        "Scaled to 500+ concurrent users with Docker containerization, Kubernetes-compatible deployment, Git version control, AWS-compatible infrastructure, SQL session storage, and model monitoring metrics supporting multi-turn dialogue continuity."
      ]
    },
    {
      title: "AI Resume Analyzer — LLM-Powered ATS Optimization Tool",
      duration: "2026",
      github: "https://github.com/CHIDANANDM8/ai-resume-analyzer",
      tags: ["FastAPI", "LLM", "Prompt Engineering", "NLP", "Docker", "CI/CD", "SQL"],
      details: [
        "Built an end-to-end AI resume analysis engine in Python using FastAPI and LLMs — performing keyword extraction and feature engineering on resume text, generating ATS scores (0–100) via structured Generative AI prompt engineering with consistent JSON output; evaluated NLP pipeline quality using precision/recall metrics.",
        "Implemented SQL-backed session persistence and result aggregation with Docker containerization and Git-based CI/CD (GitHub Actions), demonstrating applied MLOps and data engineering skills for production ML pipelines."
      ]
    },
    {
      title: "PromptLab AI — LLM Prompt Testing and Optimization Platform",
      duration: "2026",
      github: "https://github.com/CHIDANANDM8/promptlab-ai",
      tags: ["FastAPI", "RAG", "LLaMA", "OpenAI", "Docker", "CI/CD", "AWS", "MLOps"],
      details: [
        "Engineered a full-stack Generative AI workbench in Python (FastAPI) with an A/B testing engine for LLM prompt variants, customizable model parameter controls (temperature, max tokens), and performance dashboards — enabling data-driven model evaluation across OpenAI and LLaMA (RAG-enabled) providers.",
        "Containerized with Docker, version-controlled with Git, and deployed via CI/CD (GitHub Actions) on AWS — demonstrating production MLOps practices and end-to-end machine learning pipeline design, including model monitoring and evaluation."
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