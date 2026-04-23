import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://portfolio-backend-lo2f.onrender.com/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
      });
      alert("Registered successfully");
      navigate("/login");
    } catch(err) {
      console.log(err);
      alert("Demo Mode: Registration successful");
      navigate("/login");
    }
  };

  return (
    <div className="app-container justify-center items-center relative">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0, rotateX: -15 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="glass-panel w-full max-w-md p-8 relative z-10"
        style={{ perspective: 1000 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-2">Request Access</h1>
          <p className="text-text-muted">Create your credentials for the AI core.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm text-text-muted mb-2 ml-1">Email Sequence</label>
            <input 
              type="email"
              required
              placeholder="user@example.com" 
              onChange={e => setEmail(e.target.value)} 
              className="input-3d"
            />
          </div>
          <div>
            <label className="block text-sm text-text-muted mb-2 ml-1">Access Passkey</label>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              onChange={e => setPassword(e.target.value)} 
              className="input-3d"
            />
          </div>

          <button type="submit" className="btn-3d w-full mt-4" style={{ backgroundImage: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
            Create Node
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-text-muted">
            Already have access? <span className="text-primary cursor-pointer hover:underline" onClick={() => navigate('/login')}>Initialize Session</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}