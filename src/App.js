import React from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
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

const MeshBackground = ({ mouseX, mouseY }) => {
  const x1 = useTransform(mouseX, [0, 2000], [20, -20]);
  const y1 = useTransform(mouseY, [0, 2000], [20, -20]);
  const x2 = useTransform(mouseX, [0, 2000], [-30, 30]);
  const y2 = useTransform(mouseY, [0, 2000], [-30, 30]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-50">
      <motion.div
        style={{ x: x1, y: y1 }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] rounded-full bg-blue-100/40 blur-[120px]"
      />
      <motion.div
        style={{ x: x2, y: y2 }}
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [0, -45, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] rounded-full bg-rose-100/30 blur-[100px]"
      />
    </div>
  );
};

const GridBackground = ({ mouseX, mouseY }) => {
  const x = useTransform(mouseX, [0, 2000], [10, -10]);
  const y = useTransform(mouseY, [0, 2000], [10, -10]);

  return (
    <div className="absolute inset-0 z-0 bg-white">
      <motion.div 
        style={{ x, y, backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
        className="absolute inset-0 opacity-[0.15]" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
    </div>
  );
};

const BokehBackground = ({ mouseX, mouseY }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-50">
      {[...Array(8)].map((_, i) => (
        <BokehCircle key={i} i={i} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
};

const BokehCircle = ({ i, mouseX, mouseY }) => {
  const x = useTransform(mouseX, [0, 2000], [i * 10, -i * 10]);
  const y = useTransform(mouseY, [0, 2000], [i * 10, -i * 10]);

  return (
    <motion.div
      style={{ x, y, width: `${80 + i * 40}px`, height: `${80 + i * 40}px`, left: `${5 + i * 15}%`, top: `${10 + i * 12}%` }}
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.15, 0.4, 0.15],
      }}
      transition={{
        duration: 8 + i,
        repeat: Infinity,
        delay: i * 0.8,
      }}
      className="absolute rounded-full bg-stone-300/40 blur-[80px]"
    />
  );
};

const AnimatedBackground = ({ type, mouseX, mouseY }) => {
  if (type === 'mesh') return <MeshBackground mouseX={mouseX} mouseY={mouseY} />;
  if (type === 'grid') return <GridBackground mouseX={mouseX} mouseY={mouseY} />;
  if (type === 'bokeh') return <BokehBackground mouseX={mouseX} mouseY={mouseY} />;
  return null;
};

const Portfolio = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  const itemFade = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-stone-50 text-[#1a1a1a] font-serif selection:bg-stone-200"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-stone-400 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl tracking-widest font-bold cursor-default"
          >
            DS.
          </motion.span>
          <div className="space-x-8 text-sm uppercase tracking-widest">
            {['about', 'experience', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="relative hover:text-stone-500 transition-colors inline-block group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-stone-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <section id="about" className="relative pt-40 pb-20 px-6 overflow-hidden border-b border-stone-100">
        <AnimatedBackground type="mesh" mouseX={mouseX} mouseY={mouseY} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemFade}
              className="text-stone-500 uppercase tracking-[0.3em] text-sm mb-4"
            >
              Legal Intern
            </motion.h2>
            <motion.h1 
              variants={itemFade}
              className="text-6xl md:text-8xl font-light mb-8 leading-tight"
            >
              Devesh <br /> <span className="italic text-stone-400">Srivastava</span>
            </motion.h1>
            <motion.p 
              variants={itemFade}
              className="max-w-xl text-lg text-stone-600 leading-relaxed mb-8"
            >
              Detail-oriented and organized individual with strong analytical skills and a passion for the law,
              committed to contributing to dynamic legal environments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 overflow-hidden border-b border-stone-100">
        <AnimatedBackground type="grid" mouseX={mouseX} mouseY={mouseY} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h3 {...fadeIn} className="text-3xl font-light mb-16 flex items-center gap-4">
            <Briefcase className="w-6 h-6 stroke-1" /> Professional Experience
          </motion.h3>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Experience 1 */}
            <motion.div variants={itemFade} className="group grid md:grid-cols-3 gap-8">
              <div className="text-stone-400 font-mono text-sm transition-colors group-hover:text-stone-600">09/2024 — 10/2024</div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-medium mb-1 group-hover:translate-x-2 transition-transform duration-300">Office of Sr. Advocate Dr. Pradeep Rai</h4>
                <p className="text-stone-500 mb-4 italic">Supreme Court of India</p>
                <ul className="space-y-3 text-stone-600 border-l border-stone-100 pl-6 group-hover:border-stone-300 transition-colors">
                  <li>Prepared case briefs and analyzed significant court proceedings.</li>
                  <li>Transcribed daily Supreme Court proceedings and drafted case summaries.</li>
                  <li>Navigated various State High Court portals for research.</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div variants={itemFade} className="group grid md:grid-cols-3 gap-8">
              <div className="text-stone-400 font-mono text-sm transition-colors group-hover:text-stone-600">02/2024 — 04/2024</div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-medium mb-1 group-hover:translate-x-2 transition-transform duration-300">Neeraj Bansal and Associates</h4>
                <p className="text-stone-500 mb-4 italic">New Delhi</p>
                <ul className="space-y-3 text-stone-600 border-l border-stone-100 pl-6 group-hover:border-stone-300 transition-colors">
                  <li>Conducted legal research and drafted documents for senior counsel.</li>
                  <li>Performed meticulous document review to support ongoing litigation.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-32 overflow-hidden border-b border-stone-100">
        <AnimatedBackground type="bokeh" mouseX={mouseX} mouseY={mouseY} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <motion.h3 variants={itemFade} className="text-3xl font-light mb-16 flex items-center gap-4">
              <GraduationCap className="w-6 h-6 stroke-1" /> Academic Foundation
            </motion.h3>
            
            <motion.div
              variants={itemFade}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-stone-200 p-1 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200/50"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-stone-800 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="p-10 flex flex-col md:flex-row justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-widest font-medium">Undergraduate</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span className="text-stone-400 font-mono text-xs italic">Expected June 2026</span>
                  </div>
                  <h4 className="text-3xl font-light mb-4 group-hover:text-stone-600 transition-colors">BA + LLB Integrated</h4>
                  <p className="text-xl text-stone-500 font-serif leading-relaxed mb-8">
                    Guru Govind Singh Indraprastha University
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-stone-50">
                    <div>
                      <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-1">Duration</p>
                      <p className="text-stone-700 font-medium italic">5-Year Program</p>
                    </div>
                    <div>
                      <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-1">Status</p>
                      <p className="text-stone-700 font-medium italic">Final Year</p>
                    </div>
                    <div>
                      <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-1">Focus</p>
                      <p className="text-stone-700 font-medium italic">Corporate & Criminal Law</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/4 flex flex-col justify-center items-end border-l border-stone-50 pl-8">
                  <div className="text-right">
                    <p className="text-5xl font-light text-stone-200 mb-2 group-hover:text-stone-800 transition-colors duration-700 italic">2026</p>
                    <p className="text-stone-400 uppercase tracking-tighter text-[10px]">Graduating Class</p>
                  </div>
                  <div className="mt-8 w-full bg-stone-50 h-[2px] overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-stone-300"
                      style={{ width: '80%' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer id="contact" className="relative py-20 bg-stone-900 text-stone-100 overflow-hidden">
        <FooterGlow mouseX={mouseX} mouseY={mouseY} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
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

const FooterGlow = ({ mouseX, mouseY }) => {
  const x = useTransform(mouseX, [0, 2000], [50, -50]);
  const y = useTransform(mouseY, [0, 2000], [50, -50]);

  return (
    <motion.div 
      style={{ x, y }}
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[140px] rounded-full z-0"
    />
  );
};

export default Portfolio;