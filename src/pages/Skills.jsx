import Keyword from "../components/Keyword";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Generative AI & LLM Systems",
      badge: "Specialized Competency",
      badgeColor: "text-purple-400 border-purple-500/20 bg-purple-500/10",
      description: "Production conversational engines, retrieval augmented generation, and vector space search.",
      skills: [
        { word: "Generative AI" },
        { word: "Large Language Models (LLMs)" },
        { word: "RAG" },
        { word: "LangChain" },
        { word: "Vector Databases (FAISS)" },
        { word: "Prompt Engineering" },
        { word: "Model Fine-tuning" },
        { word: "Context Optimization" }
      ]
    },
    {
      title: "Deep Learning & Computer Vision",
      badge: "Vision AI & Neural Nets",
      badgeColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
      description: "Multi-modal vision classifiers, convolutional architectures, and transformer pipelines.",
      skills: [
        { word: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { word: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { word: "Deep Learning" },
        { word: "CNN (MobileNetV2)" },
        { word: "HuggingFace Transformers" },
        { word: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
        { word: "Transfer Learning" }
      ]
    },
    {
      title: "Machine Learning & Data Engineering",
      badge: "Core ML & Modeling",
      badgeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      description: "Predictive algorithms, feature engineering, and statistical cross-validation.",
      skills: [
        { word: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { word: "Machine Learning" },
        { word: "scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { word: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { word: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { word: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { word: "Feature Engineering" }
      ]
    },
    {
      title: "Backend Microservices & APIs",
      badge: "Scalable Infrastructure",
      badgeColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
      description: "High-concurrency asynchronous endpoints, schema validation, and database connectors.",
      skills: [
        { word: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { word: "REST APIs" },
        { word: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { word: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { word: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
      ]
    },
    {
      title: "Cloud, MLOps & Production DevOps",
      badge: "AWS Certified",
      badgeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
      description: "Reproducible container environments, automated test pipelines, and cloud orchestration.",
      skills: [
        { word: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { word: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { word: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
        { word: "CI/CD (GitHub Actions)" },
        { word: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { word: "MLOps & Model Monitoring" }
      ]
    }
  ];

  return (
    <div className="space-y-10 py-4">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 font-mono uppercase tracking-wider mb-2">
          <span>Competency Framework</span>
          <span>•</span>
          <span>Interactive AI Tooltips</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Skills &amp; Stack
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
          Comprehensive breakdown of machine learning frameworks, LLM infrastructure, and production software tooling. 
          <span className="text-indigo-400 ml-1">Click on any technology badge to fetch an on-demand AI explanation from the backend.</span>
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className={`glass-panel p-7 relative border border-white/[0.08] hover:border-white/[0.15] transition-all flex flex-col justify-between ${
              idx === 0 ? "lg:col-span-2 bg-gradient-to-br from-purple-950/20 via-transparent to-indigo-950/20" : ""
            }`}
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {category.title}
                </h2>
                <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border self-start ${category.badgeColor}`}>
                  {category.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                {category.description}
              </p>
            </div>

            {/* Keyword Pills */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/[0.06]">
              {category.skills.map((skill, sIdx) => (
                <Keyword key={sIdx} word={skill.word} logo={skill.logo} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}