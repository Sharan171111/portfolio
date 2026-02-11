
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Menu, 
  X,
  ChevronRight,
  Monitor,
  Database,
  Cloud,
  ArrowUpRight,
  Terminal,
  Code2,
  GitBranch,
  Star,
  ShieldCheck
} from 'lucide-react';
import { PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from './constants';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-2xl' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          SHARAN<span className="text-blue-500">.KS</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <a 
            href="mailto:sharanks171@gmail.com"
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg shadow-blue-900/40 transform hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white transition-colors">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-t border-white/10 absolute w-full"
          >
            <div className="flex flex-col p-8 gap-6">
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-slate-300 hover:text-blue-400 transition-colors tracking-tight"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="about" className="min-h-screen pt-32 pb-16 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Parallax Background Blobs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" 
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-2 rounded-full glass border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-12 inline-block"
        >
          Software Engineer & Data Strategist
        </motion.span>
        
        <h1 className="text-7xl md:text-9xl font-black mb-12 leading-[0.9] tracking-tighter">
          <span className="text-gradient">SHARAN</span> K S
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
          Information Science graduate specialized in robust software, 
          AI-driven applications, and high-performance data dashboards.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center gap-2 hover:bg-slate-200 transition-all shadow-xl shadow-white/5"
          >
            Explore Projects <ArrowUpRight size={20} />
          </motion.a>
          
          <div className="flex gap-4">
            <motion.a 
              href="https://github.com/Sharan171111" 
              target="_blank" 
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="p-5 glass rounded-2xl transition-all"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/sharan-ks" 
              target="_blank" 
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="p-5 glass rounded-2xl transition-all"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Stats Preview */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/5 pt-10"
      >
        <div className="text-center">
          <p className="text-3xl font-black text-white">10+</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Repositories</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-black text-blue-500">3+</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Internships</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-black text-white">AI</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Integration Expert</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-black text-white">100%</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Commitment</p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 flex flex-col items-center gap-4 text-slate-500"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Selected <span className="text-blue-500">Showcase</span></h2>
          <p className="text-slate-400 text-lg">Deep dives into my technical contributions from GitHub and beyond.</p>
        </div>
        <motion.a 
          href="https://github.com/Sharan171111" 
          whileHover={{ x: 5 }}
          target="_blank"
          className="text-blue-500 font-black flex items-center gap-2 hover:underline text-lg"
        >
          Explore More on GitHub <ArrowUpRight size={20} />
        </motion.a>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -15 }}
            className="group glass rounded-[32px] overflow-hidden flex flex-col border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl shadow-black/20"
          >
            <div className="h-60 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              <div className="absolute top-6 right-6 p-3 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                <Github size={18} className="text-white" />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIdx) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (idx * 0.1) + (tagIdx * 0.08),
                      ease: "easeOut" 
                    }}
                    className="text-[9px] font-black uppercase px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 tracking-wider border border-blue-500/10"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <a 
                href={project.link} 
                target="_blank" 
                className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                Source Code <Github size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-[#020617] border-y border-white/5 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">The Journey</h2>
          <p className="text-slate-400 text-lg">Industry experiences and professional growth.</p>
        </motion.div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-12 md:pl-16 border-l-2 border-white/5 hover:border-blue-500/50 transition-colors duration-500"
            >
              {/* Timeline Marker */}
              <motion.div 
                whileInView={{ scale: [0, 1.2, 1] }}
                className="absolute left-[-11px] top-0 w-[20px] h-[20px] rounded-full bg-slate-900 border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] z-20" 
              />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{exp.role}</h3>
                  <p className="text-blue-500 font-bold text-lg">{exp.company}</p>
                </div>
                <span className="px-4 py-1 rounded-full glass border-white/5 text-xs font-black text-slate-400 h-fit">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-4">
                {exp.highlights.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="text-slate-400 text-sm md:text-base flex gap-4 leading-relaxed"
                  >
                    <span className="text-blue-500 font-bold mt-1.5 shrink-0">0{i+1}</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Tech <span className="text-blue-500">Arsenal</span></h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Specialized in the full data pipeline, from raw code to high-level business intelligence.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={cat.name} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 glass rounded-[40px] group hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full bg-slate-900/40"
          >
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
            >
              {cat.icon === 'code' && <Monitor size={32} />}
              {cat.icon === 'chart' && <Database size={32} />}
              {cat.icon === 'layers' && <Cloud size={32} />}
              {cat.icon === 'terminal' && <Terminal size={32} />}
            </motion.div>
            
            <h3 className="text-2xl font-black mb-8 tracking-tight">{cat.name}</h3>
            
            <div className="flex flex-wrap gap-2.5 mt-auto">
              {cat.skills.map(skill => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 text-[11px] font-bold text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto glass rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border-white/10"
      >
        <div className="absolute top-0 right-0 p-12 text-blue-500/5 select-none pointer-events-none">
          <Github size={400} />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
            Build something <br/>
            <span className="text-gradient">exceptional</span> together.
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-medium">
            Open for software engineering or data-centric roles. 
            Let's discuss how I can elevate your next project.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Mail size={24}/>, label: 'Email Me', value: 'sharanks171@gmail.com', href: 'mailto:sharanks171@gmail.com', color: 'blue' },
              { icon: <Phone size={24}/>, label: 'Call Me', value: '+91-9483563047', href: 'tel:+919483563047', color: 'emerald' },
              { icon: <Linkedin size={24}/>, label: 'LinkedIn', value: 'sharan-ks', href: 'https://linkedin.com/in/sharan-ks', color: 'indigo' }
            ].map((item, idx) => (
              <motion.a 
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex items-center gap-5 p-8 glass rounded-[32px] hover:bg-white/10 transition-all group text-left border-white/5"
              >
                <div className={`p-4 rounded-2xl bg-${item.color}-500/10 text-${item.color}-500 group-hover:bg-${item.color}-500 group-hover:text-white transition-all`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-sm font-bold truncate max-w-[150px]">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5 text-slate-500">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase">© 2024 SHARAN K S — ENGINEERED FOR EXCELLENCE</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors text-[10px] font-black tracking-widest uppercase">Privacy</a>
              <a href="#" className="hover:text-white transition-colors text-[10px] font-black tracking-widest uppercase">Terms</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500 selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        style={{ scaleX }}
      />
      
      <Nav />
      <Hero />
      <ExperienceSection />
      <Projects />
      <SkillsSection />
      <Contact />
      
      {/* Footer Branding */}
      <footer className="py-12 text-center text-slate-600 border-t border-white/5">
        <p className="text-[10px] font-black tracking-[0.5em] uppercase opacity-50">Stay Hungry — Stay Foolish</p>
      </footer>
    </div>
  );
};

export default App;
