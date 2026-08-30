import { motion } from "framer-motion";

export default function About() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "Jan 2025",
      badge: "Cloud & Infrastructure",
      details: "Validation of foundational AWS architecture, IAM security, VPC networks, S3, EC2, Lambda, and cloud economics."
    },
    {
      title: "AI/ML Engineer Certification",
      issuer: "Reliance Retail Fashion & Trends Limited",
      date: "Mar 2026",
      badge: "Enterprise AI & MLOps",
      details: "Practical industry certification for deploying LangChain RAG pipelines, prompt engineering, and LLM inference cost reduction."
    },
    {
      title: "Full Stack MERN Development",
      issuer: "Technologics Global",
      date: "Aug 2025",
      badge: "Full-Stack Software",
      details: "Comprehensive training in React, Node.js, Express, MongoDB, RESTful microservices, and asynchronous architecture."
    }
  ];

  const engineeringPrinciples = [
    {
      title: "Production Over Toy Demos",
      description: "Focusing on end-to-end reliability, automated error fallbacks, and reproducible Docker container environments rather than isolated notebook experiments."
    },
    {
      title: "Cost & Latency Governance",
      description: "Measuring token consumption and inference overhead upfront. Utilizing intelligent semantic caching and vector indexing to lower compute bills by up to 40%."
    },
    {
      title: "Strict Evaluation & Observability",
      description: "Grounding AI outputs with precision/recall benchmarking, cross-validation metrics, and multi-turn session persistence to eliminate hallucinations."
    }
  ];

  return (
    <div className="space-y-12 py-4">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 font-mono uppercase tracking-wider mb-2">
          <span>Biography &amp; Foundations</span>
          <span>•</span>
          <span>Verified Credentials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Chidanand M
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
          Full-Stack AI/ML Engineer combining deep learning research with scalable cloud engineering to deliver measurable business impact.
        </p>
      </div>

      {/* Narrative Section */}
      <div className="glass-panel p-8 sm:p-10 relative overflow-hidden border border-white/[0.08]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
          Executive Profile
        </h2>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          <p>
            I am a <strong className="text-white">Full-Stack AI/ML Systems Engineer</strong> dedicated to building high-performance, cost-efficient, and production-ready machine learning solutions. With experience spanning applied deep learning, large language models (LLMs), and cloud microservices, I specialize in bridging the gap between raw ML research and stable enterprise products.
          </p>
          <p>
            During my work at <strong className="text-white">Reliance Retail</strong>, I engineered an enterprise-scale conversational AI system powered by LangChain, FAISS vector indexing, and LLaMA models. By designing a database-hybrid retrieval pipeline and A/B-testing prompt variants, I achieved a <strong className="text-emerald-400">95%+ query accuracy</strong> while cutting AI inference API calls by <strong className="text-emerald-400">40%</strong>, proving that smart MLOps directly protects operating margins.
          </p>
          <p>
            In the medical AI sector, I designed and deployed <strong className="text-white">OvaCare</strong>, a multi-layer diagnostic vision platform that blends MobileNetV2 CNNs, HuggingFace vision transformers, and symptom classifiers to attain <strong className="text-cyan-400">85–95% accuracy</strong> with automated failovers ensuring 100% clinical diagnostic availability.
          </p>
        </div>
      </div>

      {/* Education & Certifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education (5 cols) */}
        <div className="lg:col-span-5 glass-panel p-8 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-indigo-400">
                Academic Degree
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                CGPA: 7.93 / 10
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Srinivas Institute of Technology • Mangalore, India
            </p>

            <div className="text-xs font-mono text-slate-400 bg-white/[0.03] p-3 rounded-xl border border-white/[0.06] mb-6">
              Timeline: November 2022 – April 2026
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono text-slate-400">Relevant Coursework:</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Python", "JavaScript", "React.js", "Machine Learning", "Deep Learning", "Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Cloud Computing","Artificial Intelligence","Software Development and System Design"].map((course) => (
                  <span key={course} className="text-xs font-mono px-2 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 font-mono">
            Institution Code: SIT • Mangalore University System
          </div>
        </div>

        {/* Certifications (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-8 border border-white/[0.08]">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-indigo-400">
              Industry Certifications &amp; Accreditations
            </span>
            <span className="text-xs font-mono text-slate-400">3 Verified Credentials</span>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-white">
                    {cert.title}
                  </h4>
                  <span className="text-xs font-mono text-indigo-300 font-medium">
                    {cert.date}
                  </span>
                </div>
                <div className="text-xs text-indigo-400 font-semibold mb-2">
                  {cert.issuer} • <span className="text-slate-400 font-normal">{cert.badge}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Philosophy Cards */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">
          Production Engineering Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {engineeringPrinciples.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 border border-white/[0.08]">
              <div className="text-indigo-400 font-mono text-xs font-semibold mb-2">
                0{idx + 1} // PRINCIPLE
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}