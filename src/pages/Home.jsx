import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profilePhoto from "../assets/profile-photo.jpg";

export default function Home() {
  const navigate = useNavigate();

  const metrics = [
    {
      value: "40%+",
      label: "Inference Call Reduction",
      description: "Optimized enterprise LLM pipeline at Reliance Retail via hybrid RAG & caching",
      badge: "Cost Efficiency",
      accent: "text-indigo-400"
    },
    {
      value: "95%+",
      label: "Query Accuracy",
      description: "High-precision conversational AI with LangChain, FAISS vector search & LLaMA",
      badge: "Enterprise RAG",
      accent: "text-emerald-400"
    },
    {
      value: "85–95%",
      label: "Diagnostic Accuracy",
      description: "OvaCare multi-layer engine using MobileNetV2 CNN & HuggingFace Vision AI",
      badge: "Deep Learning",
      accent: "text-cyan-400"
    },
    {
      value: "500+",
      label: "Concurrent Users Handled",
      description: "Production microservices architected with FastAPI, Docker, CI/CD & AWS",
      badge: "Production MLOps",
      accent: "text-pink-400"
    }
  ];

  const corePillars = [
    {
      title: "Generative AI & LLM Engineering",
      tags: ["RAG Pipelines", "LangChain", "Vector DBs (FAISS)", "Prompt Tuning", "Evaluation"],
      summary: "Architecting context-aware LLM applications, retrieval-augmented generation systems, and low-latency inference pipelines.",
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Deep Learning & Vision AI",
      tags: ["PyTorch", "TensorFlow", "CNNs", "MobileNetV2", "HuggingFace Transformers"],
      summary: "Designing and fine-tuning computer vision and deep learning classifiers with 100% failover availability and robust validation.",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "MLOps & Backend Microservices",
      tags: ["FastAPI", "Docker", "CI/CD (GitHub Actions)", "AWS", "SQL & Redis"],
      summary: "Deploying production-grade machine learning pipelines with automated testing, session persistence, containerization, and monitoring.",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  const suggestedPrompts = [
    "How did Chidanand reduce LLM API calls by 40%?",
    "Explain the OvaCare multi-layer CNN architecture",
    "What are Chidanand's AWS and MLOps qualifications?",
    "Summarize candidate fit for AI/ML Engineer roles"
  ];

  const triggerChatbotQuery = (query) => {
    window.dispatchEvent(new CustomEvent("openChatWithPrompt", { detail: { prompt: query } }));
  };

  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="relative glass-panel p-8 sm:p-12 lg:p-14 overflow-hidden border border-white/[0.08]">
        {/* Subtle accent corner glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left: Introduction & Headline */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Stack AI/ML Engineer • AWS Certified</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Chidanand M
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-gradient-primary tracking-tight">
                Engineering Scalable Generative AI Systems &amp; Production ML
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Specialized in production LLM systems, enterprise Retrieval-Augmented Generation (RAG), 
              computer vision diagnostics, and high-throughput FastAPI microservices. Proven track record of 
              cutting AI inference overhead by <span className="text-white font-semibold underline decoration-indigo-400/50 underline-offset-4">40%+ at enterprise scale</span> while maintaining 95%+ precision.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => navigate("/projects")} 
                className="btn-3d text-sm font-semibold px-6 py-3"
              >
                <span>View Case Studies</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button 
                onClick={() => navigate("/contact")} 
                className="btn-ghost text-sm font-medium px-6 py-3"
              >
                <span>Contact Candidate</span>
              </button>

              <button 
                onClick={() => triggerChatbotQuery("Summarize candidate fit for AI/ML Engineer roles")}
                className="btn-ghost text-sm font-medium px-5 py-3 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span>Ask Portfolio Copilot</span>
              </button>
            </div>

            {/* Tech Stack Marquee / Pills */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3 flex-wrap text-xs text-slate-400 font-mono">
              <span className="text-slate-400 uppercase tracking-widest text-[11px] font-sans font-semibold">Core Stack:</span>
              {["PyTorch", "TensorFlow", "LangChain", "FastAPI", "FAISS", "Docker", "AWS", "Python", "React"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Candidate Profile Visual */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Animated halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-[#090d16] p-2 border border-white/[0.12] overflow-hidden shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Chidanand M - AI/ML Engineer" 
                  className="w-full h-full object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                
                {/* Active tag inside image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#090d16]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-xs">Chidanand M</span>
                    <span className="text-slate-400 text-[10px]">Mangalore, India</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Key Engineering Impact Metrics */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Quantified Engineering Impact
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Measurable metrics delivered across enterprise deployments and applied AI architectures.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            VERIFIABLE DATA • PRODUCTION METRICS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="metric-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.06]">
                    {m.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50" />
                </div>
                <div className={`text-4xl font-extrabold font-mono tracking-tight ${m.accent} mb-1`}>
                  {m.value}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {m.label}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mt-2 pt-2 border-t border-white/[0.06]">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Engineering Specializations */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Core Technical Competencies
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Full lifecycle AI engineering from ML data pipelines to cloud orchestration.
            </p>
          </div>
          <button
            onClick={() => navigate("/skills")}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            Full Matrix &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => (
            <div key={idx} className="glass-panel p-6 flex flex-col justify-between border border-white/[0.08] hover:border-indigo-500/30 transition-all group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/[0.06]">
                {pillar.tags.map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-indigo-300 border border-indigo-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiter / Hiring Manager Quick Prompt Hub */}
      <section className="glass-panel p-8 border border-indigo-500/20 bg-indigo-950/20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              <span>Interactive Recruiter Assistant</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Evaluate Candidate Profile in Real-Time
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Select any question below to test the portfolio's live FastAPI + Groq LLM backend with context on Chidanand's experience.
            </p>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="btn-3d text-xs font-semibold py-2.5 px-5 shrink-0"
          >
            Direct Recruiter Outreach
          </button>
        </div>

        {/* Prompt Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/[0.08]">
          {suggestedPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => triggerChatbotQuery(prompt)}
              className="text-left px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-indigo-500/40 text-xs text-slate-200 transition-all flex items-center justify-between group"
            >
              <span className="group-hover:text-white transition-colors">{prompt}</span>
              <span className="text-indigo-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                &rarr;
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}