import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="p-10 text-white min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient mb-8">About Me</h1>
        
        <div className="glass-panel p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Professional Summary</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            AI/ML Engineer with production experience in Machine Learning, Deep Learning (TensorFlow, PyTorch), Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), LangChain, Vector Databases, and MLOps. Deployed an enterprise LLM chatbot at Reliance Retail achieving 95%+ query resolution accuracy while reducing AI inference API calls by 40% via a RAG pipeline built with LangChain and Python.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Built an AI-powered diagnostic platform achieving 85–95% accuracy using Deep Learning (TensorFlow, PyTorch, CNN). Skilled in FastAPI, Docker, Git, AWS, SQL, Prompt Engineering, and Model Fine-tuning. AWS Certified Cloud Practitioner.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Seeking AI/ML Engineer or Machine Learning Engineer roles to build scalable, production-grade AI systems that deliver measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Education</h2>
            <div className="mb-4">
              <h3 className="font-bold text-lg text-white">B.Tech in Computer Science and Engineering</h3>
              <p className="text-gray-400">Srinivas Institute of Technology, Mangalore, India</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-secondary bg-secondary/10 px-2 py-1 rounded">Nov 2022 – Apr 2026</span>
                <span className="text-sm font-semibold text-white">CGPA: 7.93/10</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Certifications</h2>
            <ul className="space-y-4">
              <li className="flex flex-col border-l-2 border-blue-500/50 pl-4">
                <span className="font-bold text-white">AWS Certified Cloud Practitioner</span>
                <span className="text-gray-400 text-sm">Amazon Web Services | Jan 2025</span>
              </li>
              <li className="flex flex-col border-l-2 border-blue-500/50 pl-4">
                <span className="font-bold text-white">AI/ML Engineer</span>
                <span className="text-gray-400 text-sm">Reliance Retail Fashion & Trends Limited | Mar 2026</span>
              </li>
              <li className="flex flex-col border-l-2 border-blue-500/50 pl-4">
                <span className="font-bold text-white">MERN Stack Development</span>
                <span className="text-gray-400 text-sm">Technologics Global | Aug 2025</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}