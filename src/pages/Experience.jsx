import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack AI Developer Intern",
      company: "Reliance Retail Limited",
      duration: "Dec 2025 – Mar 2026",
      details: [
        "Translated client retail-operations challenges into a production LLM chatbot (LLaMA via Ollama, FastAPI, React.js) achieving 95%+ query resolution accuracy; engineered a SQLite-backed database-first data pipeline with A/B-tested prompt strategies that reduced redundant AI inference API calls by 40%, lowering latency and compute cost at enterprise scale.",
        "Architected scalable REST APIs with structured prompt engineering and CORS support for high-concurrency enterprise traffic; persisted 1,000+ multi-turn user conversation sessions in SQLite enabling seamless dialogue continuity — demonstrating production ML deployment and system design valued by consulting delivery environments.",
        "Collaborated cross-functionally with business stakeholders and platform teams to document technical approaches, model performance metrics, and solution architecture, ensuring client teams could maintain and extend the deployed AI system independently."
      ]
    },
    {
      role: "Full Stack Web Development Intern",
      company: "Technologics Global",
      duration: "May 2025 – Aug 2025",
      details: [
        "Built 5+ production MERN stack applications (MongoDB, Express.js, React.js, Node.js) supporting 100+ concurrent users; developed 10+ RESTful API endpoints improving backend throughput by 30% through optimised CRUD architecture and query design.",
        "Maintained 98%+ API endpoint reliability via comprehensive Postman testing throughout the full SDLC; delivered responsive HTML5/CSS3/JavaScript UIs reducing cross-device inconsistencies by 25%."
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