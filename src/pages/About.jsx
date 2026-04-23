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
            Results-driven MERN Stack Developer and AI/ML Engineer with hands-on internship experience and a flagship final-year AI healthcare project. Built OvaCare — a full-stack PCOS detection platform leveraging CNN deep learning (MobileNetV2), Random Forest ML, and HuggingFace Vision AI — achieving 85–95% diagnostic accuracy.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Deployed an LLM-powered AI chatbot at Reliance Retail, reducing inference API calls by 40%+. Proficient in React.js, Node.js, Python, FastAPI, MongoDB, and AWS.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            AWS Certified Cloud Practitioner with a passion for building scalable, real-world AI-driven products.
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
                <span className="font-bold text-white">Full Stack Development (MERN)</span>
                <span className="text-gray-400 text-sm">Technologics Global | Aug 2025</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}