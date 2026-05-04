import { motion } from "framer-motion";

export default function Contact() {
  const contactDetails = [
    { label: "Email", value: "chidanandmc87@gmail.com", link: "mailto:chidanandmc87@gmail.com" },
    { label: "Phone", value: "+91 8792588362", link: "tel:+918792588362" },
    { label: "LinkedIn", value: "linkedin.com/in/chidanand-m-aarya", link: "https://linkedin.com/in/chidanand-m-aarya" },
    { label: "GitHub", value: "github.com/CHIDANANDM8", link: "https://github.com/CHIDANANDM8" }
  ];

  return (
    <div className="p-10 text-white min-h-full flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold text-gradient mb-4">Let's Connect</h1>
        <p className="text-text-muted mb-12 text-lg">
          I'm always open to discussing AI/ML engineering roles, exciting full-stack projects, or innovative product ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((contact, index) => (
            <motion.a 
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index} 
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-2 group transition-all"
            >
              <h3 className="text-primary font-semibold text-sm uppercase tracking-widest">{contact.label}</h3>
              <span className="text-white group-hover:text-primary transition-colors text-lg font-medium">{contact.value}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 glass-panel p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to build something intelligent?</h2>
          <button className="btn-3d w-full md:w-auto px-8" onClick={() => window.location.href='mailto:chidanandmc87@gmail.com'}>
            Initialize Communication
          </button>
        </div>
      </motion.div>
    </div>
  );
}