import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "AI/ML Developer Intern",
      company: "Reliance Retail Limited",
      duration: "Dec 2025 – Mar 2026",
      location: "India",
      type: "Enterprise AI & MLOps",
      keyMetrics: [
        { label: "Cost Reduction", value: "40% Fewer Inference Calls" },
        { label: "Query Resolution", value: "95%+ Accuracy" },
        { label: "Scale", value: "1,000+ Persisted Sessions" }
      ],
      details: [
        "Architected and deployed an enterprise-grade LLM chatbot utilizing Python, LangChain, RAG (Retrieval-Augmented Generation), vector databases (FAISS), and FastAPI, achieving a 95%+ query resolution rate.",
        "Engineered a database-retrieval hybrid caching mechanism combined with A/B-tested prompt engineering that decreased AI inference API invocations by 40%, delivering substantial compute cost savings at enterprise scale.",
        "Constructed an MLOps data pipeline with SQL-backed session persistence for 1,000+ multi-turn dialogues, enforcing strict context retention across user sessions.",
        "Containerized core microservices using Docker and integrated GitHub Actions CI/CD pipelines for zero-downtime rolling updates under concurrent enterprise traffic.",
        "Authored comprehensive technical architecture documentation, model evaluation benchmarks, and operational runbooks, enabling seamless internal maintenance and knowledge transfer."
      ],
      skills: ["Python", "LangChain", "RAG", "FAISS", "FastAPI", "Docker", "CI/CD", "Prompt Engineering", "SQL"]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Technologics Global",
      duration: "May 2025 – Aug 2025",
      location: "India",
      type: "Full Stack Systems",
      keyMetrics: [
        { label: "Throughput", value: "+30% API Speed" },
        { label: "Reliability", value: "98%+ Endpoint Uptime" },
        { label: "Concurrency", value: "100+ Active Users" }
      ],
      details: [
        "Engineered 5+ full-stack production web applications leveraging Python (FastAPI/Flask), relational SQL databases, and secure RESTful endpoints supporting 100+ concurrent users.",
        "Optimized backend queries and asynchronous request handling, boosting average API throughput by 30% and eliminating database bottlenecking.",
        "Maintained 98%+ production endpoint reliability through automated unit testing, integration verification, and strict HTTP status handling across the SDLC.",
        "Developed responsive user interfaces with modular front-end components, reducing cross-device layout discrepancies by 25%."
      ],
      skills: ["FastAPI", "Flask", "Python", "SQL", "REST APIs", "React", "Git", "Testing"]
    }
  ];

  return (
    <div className="space-y-10 py-4">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 font-mono uppercase tracking-wider mb-2">
          <span>Career History</span>
          <span>•</span>
          <span>Verified Engineering Track Record</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional Experience
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
          Practical production experience designing, optimizing, and deploying machine learning pipelines, 
          generative AI systems, and scalable cloud microservices.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-8 relative">
        {/* Subtle timeline track line */}
        <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-[1px] bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent pointer-events-none" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-7 sm:p-9 relative overflow-hidden border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 group"
          >
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {exp.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {exp.location}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h2>
                <h3 className="text-base text-indigo-400 font-semibold mt-0.5">
                  {exp.company}
                </h3>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-white/[0.04] px-3.5 py-2 rounded-xl border border-white/[0.08] self-start lg:self-center">
                <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{exp.duration}</span>
              </div>
            </div>

            {/* Quantified Metrics Highlight Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              {exp.keyMetrics.map((km, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    {km.label}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-emerald-400 font-mono mt-0.5">
                    {km.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bullet points */}
            <ul className="space-y-3 mb-6 text-sm sm:text-base text-slate-300 leading-relaxed">
              {exp.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1.5 text-xs shrink-0">◆</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-400 font-mono mr-1">Technologies:</span>
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Engineering Philosophy Card */}
      <div className="glass-panel p-8 border border-white/[0.08] bg-white/[0.01]">
        <h3 className="text-lg font-bold text-white mb-2">
          Engineering Focus: Production ML &amp; Compute Efficiency
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          Deploying AI in production requires more than building models in isolation. My engineering approach couples
          mathematical foundation with scalable microservices: implementing strict evaluation metrics (precision/recall, latency, token spend),
          automated CI/CD testing, containerized reproducible environments, and intelligent caching to optimize business ROI.
        </p>
      </div>
    </div>
  );
}