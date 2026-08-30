import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", roleType: "Full-Time AI/ML Engineer", message: "" });

  const contactMethods = [
    {
      key: "email",
      label: "Direct Email",
      value: "chidanandmc87@gmail.com",
      link: "mailto:chidanandmc87@gmail.com",
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      key: "phone",
      label: "Phone / WhatsApp",
      value: "+91 8792588362",
      link: "tel:+918792588362",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      key: "linkedin",
      label: "LinkedIn Professional",
      value: "linkedin.com/in/chidanand-m-aarya",
      link: "https://linkedin.com/in/chidanand-m-aarya",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      key: "github",
      label: "GitHub Code Repository",
      value: "github.com/CHIDANANDM8",
      link: "https://github.com/CHIDANANDM8",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    }
  ];

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formState.name || "Recruiter"}: ${formState.roleType}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nTopic / Role: ${formState.roleType}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:chidanandmc87@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-10 py-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-white/[0.08] pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active for Hiring • Q1/Q2 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Intelligent Systems
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Open to full-time AI/ML Engineer and Machine Learning Engineer positions. Typically responding to inquiries within 24 hours.
        </p>
      </div>

      {/* Grid of Contact Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method) => (
          <div
            key={method.key}
            className="glass-panel p-6 border border-white/[0.08] flex items-center justify-between hover:border-indigo-500/30 transition-all group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                {method.icon}
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                  {method.label}
                </span>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors truncate block"
                >
                  {method.value}
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy(method.key, method.value)}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors text-xs font-mono shrink-0 ml-2"
              title="Copy to clipboard"
            >
              {copiedKey === method.key ? "✓ Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>

      {/* Direct Outreach Form */}
      <div className="glass-panel p-8 sm:p-10 border border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Direct Recruiter / Project Outreach
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Send a structured message directly to Chidanand's personal inbox.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-slate-300">Your Name / Organization</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins (Tech Talent)"
                  className="input-3d text-sm"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-slate-300">Your Work Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. sjenkins@company.com"
                  className="input-3d text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-mono text-slate-300">Inquiry Type</label>
              <select
                value={formState.roleType}
                onChange={(e) => setFormState({ ...formState, roleType: e.target.value })}
                className="input-3d text-sm text-white bg-[#0f172a]"
              >
                <option value="Full-Time AI/ML Engineer Role">Full-Time AI/ML Engineer Role</option>
                <option value="Machine Learning Engineer Position">Machine Learning Engineer Position</option>
                <option value="Generative AI / LLM Consulting">Generative AI / LLM Consulting</option>
                <option value="Technical Interview / Screening">Technical Interview / Screening</option>
                <option value="General Engineering Question">General Engineering Question</option>
              </select>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-mono text-slate-300">Message / Opportunity Summary</label>
              <textarea
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Share details about the role, technical challenges, team stack, or project vision..."
                className="input-3d text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-3d w-full py-3.5 text-sm font-semibold mt-2"
            >
              <span>Dispatch Message via Email Client</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}