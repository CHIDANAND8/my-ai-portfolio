import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import AiIntro from "./components/AiIntro";

export const IntroContext = createContext();

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("introSeen");
      if (seen) {
        setIntroFinished(true);
      }
    } catch (e) {
      console.warn("sessionStorage not available");
    }
  }, []);

  const handleIntroComplete = () => {
    try {
      sessionStorage.setItem("introSeen", "true");
    } catch (e) {
      console.warn("sessionStorage not available");
    }
    setIntroFinished(true);
  };

  const playIntro = () => {
    setIntroFinished(false);
  };

  return (
    <IntroContext.Provider value={{ playIntro }}>
      <BrowserRouter>
        <AnimatePresence>
          {!introFinished && <AiIntro key="ai-intro" onComplete={handleIntroComplete} />}
        </AnimatePresence>
        
        {introFinished && (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </IntroContext.Provider>
  );
}