import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Chatbot from "./Chatbot";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = () => {
      const saved = localStorage.getItem("chatHistory");
      if (saved) {
        const chats = JSON.parse(saved);
        const recent = chats.reverse().slice(0, 5).map(c => ({ user: c.user, timestamp: c.timestamp }));
        setHistory(recent);
      } else {
        setHistory([]);
      }
    };
    loadHistory();
    window.addEventListener("chatHistoryUpdated", loadHistory);
    return () => window.removeEventListener("chatHistoryUpdated", loadHistory);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/register");
  };

  return (
    <div className="app-container">
      {/* Background Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      {/* Sidebar */}
      <motion.nav 
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-panel w-64 m-4 flex flex-col justify-between overflow-y-auto custom-scrollbar"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gradient mb-8 tracking-wider">
            PORTFOLIO
          </h1>
          
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className="relative block">
                  <motion.div
                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-xl transition-colors duration-200 z-10 relative ${
                      isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Search History */}
          {history.length > 0 && (
            <div className="mt-8 border-t border-white/10 pt-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs uppercase text-text-muted tracking-widest font-semibold">
                  Recent Queries
                </h3>
                <button onClick={() => {
                  localStorage.removeItem("chatHistory");
                  setHistory([]);
                  window.dispatchEvent(new Event("chatHistoryUpdated"));
                }} className="text-[10px] text-red-400 hover:text-red-300 uppercase tracking-widest">Clear</button>
              </div>
              <div className="flex flex-col gap-2">
                {history.map((q, i) => (
                  <div key={i} className="text-sm text-gray-300 hover:text-white cursor-pointer bg-white/5 p-2 rounded-lg flex flex-col">
                    <span className="truncate">{q.user}</span>
                    {q.timestamp && <span className="text-[10px] text-gray-500 mt-1">{q.timestamp}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6 border-t border-white/10 shrink-0">
          {token ? (
            <button onClick={handleLogout} className="btn-3d w-full" style={{ backgroundImage: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)" }}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn-3d w-full">Sign In</button>
            </Link>
          )}
        </div>
      </motion.nav>

      {/* Main Content Area */}
      <main className="main-content">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </main>
      
      {/* AI Chatbot only shown inside the protected layout */}
      <Chatbot />
    </div>
  );
}
