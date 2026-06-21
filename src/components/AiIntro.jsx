import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import introImage from "../assets/intro.png";

export default function AiIntro({ onComplete }) {
  const [phase, setPhase] = useState("init"); // init, booting, cinematic, glitch, reveal

  useEffect(() => {
    // Phase 1: Init dark screen
    const t1 = setTimeout(() => setPhase("booting"), 1000);
    // Phase 2: Booting UI
    const t2 = setTimeout(() => setPhase("cinematic"), 3000);
    // Phase 3: Cinematic Eye Reveal
    const t3 = setTimeout(() => setPhase("glitch"), 6000);
    // Phase 4: Name Reveal
    const t4 = setTimeout(() => setPhase("reveal"), 8000);
    // End sequence
    const t5 = setTimeout(() => onComplete(), 12000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-black overflow-hidden font-mono text-emerald-400 select-none"
    >
      {/* Background Image (Robotic Eye) with volumetric light/blur effects */}
      <motion.div
        initial={{ scale: 1.5, filter: "brightness(0) blur(20px)" }}
        animate={{ 
          scale: phase === "cinematic" || phase === "glitch" || phase === "reveal" ? 1 : 1.5,
          filter: phase === "cinematic" || phase === "glitch" || phase === "reveal" ? "brightness(0.6) blur(0px)" : "brightness(0) blur(20px)"
        }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${introImage})` }}
      />

      {/* Cyberpunk Fog / Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-overlay"></div>

      {/* Grid and Particles overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 mix-blend-screen pointer-events-none"></div>

      {/* Red Laser Scanning Effect */}
      {(phase === "cinematic" || phase === "glitch") && (
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-1 bg-red-500/80 shadow-[0_0_30px_rgba(255,0,0,1)] z-10"
        />
      )}

      {/* HUD Interfaces */}
      <AnimatePresence>
        {phase === "booting" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20"
          >
            <div className="text-center space-y-4">
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-red-500 text-sm tracking-widest uppercase">
                [ WARNING: UNREGISTERED SIGNATURE DETECTED ]
              </motion.div>
              <div className="text-2xl tracking-[0.3em] text-white drop-shadow-[0_0_10px_white]">
                INITIALIZING AI NEURAL NETWORK
              </div>
              <div className="w-64 h-1 bg-white/20 mx-auto overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
                />
              </div>
              <div className="text-xs text-emerald-500/50 mt-4 flex justify-between w-64 mx-auto">
                <span>SYNAPSE: OK</span>
                <span>VOLUMETRIC: OK</span>
                <span>HUD: OK</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name Reveal */}
      <AnimatePresence>
        {phase === "reveal" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-30 mix-blend-screen"
          >
            {/* Cinematic Glitch Title */}
            <motion.h1 
              animate={{ 
                x: [0, -5, 5, -5, 0],
                opacity: [1, 0.8, 1, 0.9, 1],
                textShadow: [
                  "0 0 20px rgba(0,255,255,0.8)",
                  "-5px 0 20px rgba(255,0,0,0.8), 5px 0 20px rgba(0,255,255,0.8)",
                  "0 0 20px rgba(0,255,255,0.8)"
                ]
              }}
              transition={{ duration: 0.2, repeat: 3, repeatDelay: 1 }}
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-500 tracking-[0.2em] mb-4 text-center uppercase drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
            >
              Chidanand M
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl md:text-3xl text-red-500 tracking-[0.4em] font-semibold uppercase drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
            >
              Full Stack AI Engineer
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Glitch Overlay Effect during glitch phase */}
      {phase === "glitch" && (
        <motion.div 
          animate={{ opacity: [0, 0.8, 0.2, 0.9, 0], x: [-10, 10, -5, 5, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0 bg-white/5 mix-blend-difference pointer-events-none z-50"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)' }}
        />
      )}
    </motion.div>
  );
}
