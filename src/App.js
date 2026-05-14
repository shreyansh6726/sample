import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-serif selection:bg-stone-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl tracking-widest font-bold">DS.</span>
          <div className="space-x-8 text-sm uppercase tracking-widest">
            <a href="#about" className="hover:text-stone-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-stone-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-stone-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-stone-500 uppercase tracking-[0.3em] text-sm mb-4">Legal Intern</h2>
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
              Devesh <br /> <span className="italic text-stone-400">Srivastava</span>
            </h1>
            <p className="max-w-xl text-lg text-stone-600 leading-relaxed mb-8">
              Detail-oriented and organized individual with strong analytical skills and a passion for the law,
              committed to contributing to dynamic legal environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h3 {...fadeIn} className="text-3xl font-light mb-16 flex items-center gap-4">
            <Briefcase className="w-6 h-6 stroke-1" /> Professional Experience
          </motion.h3>

          <div className="space-y-20">
            {/* Experience 1 */}
            <motion.div {...fadeIn} className="group grid md:grid-cols-3 gap-8">
              <div className="text-stone-400 font-mono text-sm">09/2024 — 10/2024</div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-medium mb-1">Office of Sr. Advocate Dr. Pradeep Rai</h4>
                <p className="text-stone-500 mb-4 italic">Supreme Court of India</p>
                <ul className="space-y-3 text-stone-600 border-l border-stone-100 pl-6">
                  <li>Prepared case briefs and analyzed significant court proceedings.</li>
                  <li>Transcribed daily Supreme Court proceedings and drafted case summaries.</li>
                  <li>Navigated various State High Court portals for research.</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div {...fadeIn} className="group grid md:grid-cols-3 gap-8">
              <div className="text-stone-400 font-mono text-sm">02/2024 — 04/2024</div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-medium mb-1">Neeraj Bansal and Associates</h4>
                <p className="text-stone-500 mb-4 italic">New Delhi</p>
                <ul className="space-y-3 text-stone-600 border-l border-stone-100 pl-6">
                  <li>Conducted legal research and drafted documents for senior counsel.</li>
                  <li>Performed meticulous document review to support ongoing litigation.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h3 {...fadeIn} className="text-3xl font-light mb-12 flex items-center gap-4">
            <GraduationCap className="w-6 h-6 stroke-1" /> Education
          </motion.h3>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-8 bg-white border border-stone-200 rounded-sm shadow-sm transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-medium">BA+LLB Integrated</h4>
                <p className="text-stone-600">Guru Govind Singh Indraprastha University</p>
              </div>
              <span className="text-stone-400 font-mono text-sm">2021 — 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 bg-stone-900 text-stone-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-12">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <a href="mailto:deveshsrivastava9000@gmail.com" className="flex items-center gap-2 hover:text-stone-400 transition-colors">
              <Mail className="w-5 h-5" /> Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-stone-400 transition-colors">
              <LinkedinIcon className="w-5 h-5" /> LinkedIn
            </a>
            <div className="flex items-center gap-2 text-stone-500">
              <MapPin className="w-5 h-5" /> Rohini, New Delhi
            </div>
          </div>
          <p className="text-stone-600 text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Devesh Srivastava
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;