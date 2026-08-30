import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ proj }) => {
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleExplainClick = async () => {
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
      const res = await fetch(`${API_URL}/explain_project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: proj.title, details: proj.details })
      });
      const data = await res.json();
      
      if (!res.ok) {
        setExplanation(`Notice: ${data.detail || 'Service response issue.'}`);
      } else {
        setExplanation(data.result);
      }
    } catch (err) {
      setExplanation(`Could not connect to AI backend (${err.message}). Ensure backend server is running.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 group">
      {/* Top subtle accent gradient line on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div>
        {/* Header with Title and Links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {proj.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {proj.duration}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
              {proj.title}
            </h2>
          </div>

          {/* GitHub link button */}
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white px-3.5 py-2 rounded-xl transition-all border border-white/[0.08] shrink-0 self-start"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Repository</span>
            </a>
          )}
        </div>

        {/* Quantified Metrics Highlight */}
        <div className="grid grid-cols-2 gap-3 my-4 py-3 border-y border-white/[0.06] bg-white/[0.01] px-3 rounded-xl">
          {proj.highlights.map((h, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                {h.label}
              </span>
              <span className="text-sm font-bold text-emerald-400 font-mono">
                {h.val}
              </span>
            </div>
          ))}
        </div>

        {/* Bullet point details */}
        <ul className="space-y-2.5 mb-5 text-sm text-slate-300 leading-relaxed">
          {proj.details.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-indigo-400 mt-1 text-xs">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Technology Tag Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {proj.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* AI Architecture Summary Accordion */}
      <div className="pt-3 border-t border-white/[0.06]">
        <button
          onClick={handleExplainClick}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/15 border border-indigo-500/20 text-xs font-semibold text-indigo-300 transition-all"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>{isOpen ? "Hide Architecture Summary" : "Generate AI Architecture Summary"}</span>
          </span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-[#090d16]/90 rounded-xl border border-white/[0.08] mt-3 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>FastAPI + Groq LLM Analysis</span>
                  <span className="text-emerald-400">Status: Complete</span>
                </div>
                
                {loading ? (
                  <div className="flex items-center gap-2 text-slate-400 py-3 text-xs">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "0.4s" }} />
                    <span className="ml-2 font-mono">Synthesizing architecture parameters...</span>
                  </div>
                ) : (
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                    {explanation}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Generative AI & LLMs", "Deep Learning & Vision", "EDA & Automation", "MLOps & Tools"];

  const projects = [
    {
      title: "PDK Validation Automation Framework — Semiconductor EDA QA & Regression Architecture",
      category: "EDA & Automation",
      duration: "Aug 2026",
      github: "https://github.com/CHIDANANDM8/PDK-Validation-Automation-Framework",
      highlights: [
        { label: "Regression Engine", val: "Golden Baseline" },
        { label: "Code Quality", val: ">85% Pytest Cov" }
      ],
      tags: ["Python 3.8+", "EDA Automation", "DRC & LVS", "Bash", "Tcl", "Regression Diffing", "HTML Dashboard", "pytest", "Subprocess QA"],
      details: [
        "Architected an automated 8-stage verification pipeline for semiconductor Process Design Kits (PDKs) covering layer definitions, DRC geometric rules (width/spacing/enclosure), LVS netlist connectivity, and compact device model boundaries.",
        "Implemented resilient multi-format EDA log parsing with regex heuristic error classification and a differential golden baseline regression engine (results/baseline.json) to catch regressions and prevent multi-million dollar silicon respin risks ($5M–$20M+).",
        "Engineered dual reporting infrastructure generating machine-readable JSON CI/CD payloads and an interactive standalone HTML5/CSS visual analytics dashboard with zero external CDN dependencies and >85% pytest test coverage."
      ]
    },
    {
      title: "OvaCare — Multi-Layer PCOS Diagnostic Vision Platform",
      category: "Deep Learning & Vision",
      duration: "Jan 2026 – Apr 2026",
      github: "https://github.com/CHIDANANDM8/Ovacare",
      highlights: [
        { label: "Vision Accuracy", val: "85% – 95%" },
        { label: "Availability", val: "100% Failover" }
      ],
      tags: ["TensorFlow", "PyTorch", "MobileNetV2 CNN", "HuggingFace Vision", "scikit-learn", "FastAPI", "Docker", "CI/CD"],
      details: [
        "Architected a 4-layer multi-modal diagnostic engine combining MobileNetV2 CNN (80–90% accuracy), HuggingFace Vision AI (85–95% accuracy), and a scikit-learn symptom classifier with automated failover guaranteeing 100% diagnostic availability.",
        "Engineered end-to-end MLOps pipeline covering automated feature engineering, cross-validation, bias-variance analysis, containerized Docker deployment, and GitHub Actions CI/CD with SQL session backing."
      ]
    },
    {
      title: "Relex Enterprise AI — High-Throughput Conversational RAG Platform",
      category: "Generative AI & LLMs",
      duration: "Dec 2025 – Mar 2026",
      github: "https://github.com/CHIDANANDM8/Relex-ai",
      highlights: [
        { label: "API Cost Cut", val: "-40% Inference" },
        { label: "Query Precision", val: "95%+ Resolution" }
      ],
      tags: ["LLaMA", "LangChain", "RAG Pipeline", "FAISS", "FastAPI", "Docker", "Kubernetes", "AWS", "MLOps"],
      details: [
        "Engineered production conversational AI platform using Python, LangChain, FAISS vector indexing, and LLaMA, achieving 95%+ query accuracy across complex multi-turn dialogues.",
        "Implemented a hybrid database-retrieval pipeline with A/B-tested prompt engineering that cut API inference calls by 40%, scaling reliably to 500+ concurrent sessions with Docker and AWS infrastructure."
      ]
    },
    {
      title: "AI Resume Analyzer — ATS Optimization & NLP Scoring Engine",
      category: "Generative AI & LLMs",
      duration: "2026",
      github: "https://github.com/CHIDANANDM8/ai-resume-analyzer",
      highlights: [
        { label: "Output Format", val: "Strict JSON Schema" },
        { label: "Scoring Metric", val: "0–100 ATS Match" }
      ],
      tags: ["FastAPI", "LLM", "Prompt Engineering", "NLP", "Docker", "CI/CD", "SQL"],
      details: [
        "Engineered end-to-end NLP analysis engine performing keyword extraction and semantic feature engineering on unstructured resume text to generate deterministic ATS compatibility scores (0–100).",
        "Configured structured JSON generation pipelines with automated prompt validation, SQL-backed candidate persistence, and GitHub Actions CI/CD deployment."
      ]
    },
    {
      title: "PromptLab AI — LLM Testing, Benchmarking & A/B Workbench",
      category: "MLOps & Tools",
      duration: "2026",
      github: "https://github.com/CHIDANANDM8/promptlab-ai",
      highlights: [
        { label: "Testing Engine", val: "Multi-Model A/B" },
        { label: "Cloud Deploy", val: "AWS + Docker" }
      ],
      tags: ["FastAPI", "RAG", "LLaMA", "OpenAI", "Docker", "CI/CD", "AWS", "MLOps"],
      details: [
        "Built full-stack Generative AI evaluation workbench with A/B prompt testing, dynamic parameter tuning (temperature, top-p, token caps), and latency/cost comparison dashboards.",
        "Packaged with Docker and deployed via CI/CD on AWS, providing model evaluation telemetry and regression tracking across multiple LLM backends."
      ]
    }
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-10 py-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 font-mono uppercase tracking-wider mb-2">
            <span>Portfolio Case Studies</span>
            <span>•</span>
            <span>Production Architectures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Applied AI &amp; Machine Learning Projects
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Production systems demonstrating measurable business value, multi-modal computer vision, 
            and scalable LLM application engineering.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((proj, index) => (
          <ProjectCard key={index} proj={proj} />
        ))}
      </div>
    </div>
  );
}