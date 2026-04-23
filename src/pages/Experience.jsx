import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack AI Developer Intern",
      company: "Reliance Retail Limited",
      duration: "Dec 2025 – Mar 2026",
      details: [
        "Designed and deployed a full-stack AI chatbot using LLaMA (Ollama), FastAPI, and React.js, enabling natural language retail query resolution with 95%+ query accuracy.",
        "Engineered a database-first LLM response pipeline with SQLite, reducing redundant AI inference API calls by 40%+ and significantly improving response latency.",
        "Built and documented scalable REST APIs with CORS support, efficient prompt engineering, and robust error handling — supporting high-concurrency enterprise usage.",
        "Persisted 1,000+ user interaction sessions via SQLite-backed memory management, ensuring seamless conversation continuity across enterprise users."
      ]
    },
    {
      role: "Full Stack Web Development Intern",
      company: "Technologics Global",
      duration: "May 2025 – Aug 2025",
      details: [
        "Engineered 5+ MERN stack applications (MongoDB, Express.js, React.js, Node.js), delivering production-ready, responsive interfaces supporting 100+ concurrent users.",
        "Developed 10+ RESTful API endpoints, improving backend throughput by 30% through efficient CRUD architecture and optimized query design.",
        "Tested APIs end-to-end using Postman, maintaining 98%+ endpoint reliability throughout the full software development lifecycle (SDLC).",
        "Delivered responsive, accessible front-end UIs with HTML5, CSS3, and JavaScript, reducing cross-device inconsistencies by 25%."
      ]
    }
  ];

  return (
    <div className="p-10 text-white min-h-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gradient mb-8">Professional Experience</h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
                  <h3 className="text-lg text-primary font-semibold mt-1">{exp.company}</h3>
                </div>
                <div className="mt-2 md:mt-0 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium text-gray-300">
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg leading-none">•</span>
                    <span className="text-gray-300 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}