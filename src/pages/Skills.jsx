import Keyword from "../components/Keyword";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="p-10 text-white min-h-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gradient mb-8">Technical Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-primary border-b border-primary/20 pb-2">Languages & Frontend</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="JavaScript (ES6+)" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <Keyword word="TypeScript" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              <Keyword word="Python" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <Keyword word="React.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <Keyword word="Tailwind CSS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <Keyword word="HTML5" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <Keyword word="Vite" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
              <Keyword word="PHP" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
            </div>
          </div>

          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-secondary border-b border-secondary/20 pb-2">Backend & Databases</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="Node.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              <Keyword word="Express.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
              <Keyword word="FastAPI" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
              <Keyword word="Flask" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
              <Keyword word="MongoDB" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
              <Keyword word="Mongoose" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" />
              <Keyword word="MySQL" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
              <Keyword word="SQLite" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />
              <Keyword word="Socket.IO" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" />
            </div>
          </div>

          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-green-400 border-b border-green-400/20 pb-2">AI & Machine Learning</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="LLaMA (Ollama)" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <Keyword word="MobileNetV2 (CNN)" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
              <Keyword word="Random Forest" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
              <Keyword word="HuggingFace" />
              <Keyword word="OpenCV" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" />
              <Keyword word="Prompt Engineering" />
              <Keyword word="scikit-learn" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
            </div>
          </div>

          <div className="glass-panel p-8 relative z-10 hover:z-50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-blue-400 border-b border-blue-400/20 pb-2">Cloud, DevOps & Tools</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Keyword word="AWS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
              <Keyword word="Docker" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
              <Keyword word="Git" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              <Keyword word="GitHub" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
              <Keyword word="CI/CD" />
              <Keyword word="JWT" />
              <Keyword word="Postman" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
              <Keyword word="VS Code" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}