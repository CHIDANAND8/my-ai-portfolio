import Keyword from "../components/Keyword";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="p-10 text-white min-h-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gradient mb-8">Technical Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Programming & Data */}
          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-primary border-b border-primary/20 pb-2">Programming &amp; Data</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="Python" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <Keyword word="SQL" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
              <Keyword word="JavaScript" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-green-400 border-b border-green-400/20 pb-2">AI &amp; Machine Learning</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="Machine Learning" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
              <Keyword word="Deep Learning" />
              <Keyword word="TensorFlow" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
              <Keyword word="PyTorch" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />
              <Keyword word="MLOps" />
              <Keyword word="Model Fine-tuning" />
              <Keyword word="Model Monitoring" />
            </div>
          </div>

          {/* Generative AI & LLMs */}
          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-purple-400 border-b border-purple-400/20 pb-2">Generative AI &amp; LLMs</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="Generative AI" />
              <Keyword word="Large Language Models (LLMs)" />
              <Keyword word="RAG" />
              <Keyword word="LangChain" />
              <Keyword word="Prompt Engineering" />
              <Keyword word="Vector Databases (Pinecone, Chroma, FAISS)" />
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-secondary border-b border-secondary/20 pb-2">Backend &amp; APIs</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="FastAPI" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
              <Keyword word="REST APIs" />
              <Keyword word="Node.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              <Keyword word="MongoDB" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-blue-400 border-b border-blue-400/20 pb-2">Cloud &amp; DevOps</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="AWS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
              <Keyword word="Docker" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
              <Keyword word="Git" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              <Keyword word="CI/CD (GitHub Actions)" />
              <Keyword word="Kubernetes" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" />
            </div>
          </div>

          {/* ML Libraries */}
          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-orange-400 border-b border-orange-400/20 pb-2">ML Libraries</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="scikit-learn" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
              <Keyword word="Pandas" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
              <Keyword word="NumPy" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />
              <Keyword word="HuggingFace Transformers" />
              <Keyword word="OpenCV" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}