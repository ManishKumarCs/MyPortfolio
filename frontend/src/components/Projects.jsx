import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Zap, Target, Wrench } from "lucide-react";
import { projects } from "../data/portfolio";
import { Reveal } from "../lib/motion";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Featured Projects</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tighter">Production case studies</h2>
          <p className="mt-5 text-white/60 leading-relaxed">
            Three end-to-end builds across healthcare, HR, and e-commerce — each framed as problem → solution → impact.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.id} className="group" data-testid={`project-${p.id}`}>
                <div className={`grid lg:grid-cols-12 gap-8 items-center ${flip ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className="lg:col-span-6 [direction:ltr]">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-3xl overflow-hidden glass border-glow"
                    >
                      <div className="absolute inset-0 glow-cyan opacity-30 z-10 pointer-events-none" />
                      <img
                        src={p.image}
                        alt={`${p.name} interface`}
                        loading="lazy"
                        className="w-full h-[300px] sm:h-[380px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <span className="rounded-full glass-dark px-3 py-1.5 text-xs font-mono text-white/80">{p.role}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6 [direction:ltr]">
                    <span className="font-mono text-xs text-white/30">0{i + 1} / 0{projects.length}</span>
                    <h3 className="mt-2 font-heading text-3xl font-bold tracking-tight">{p.name}</h3>
                    <p className="mt-2 text-[#00F0FF] text-sm">{p.tagline}</p>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Target size={18} className="mt-0.5 shrink-0 text-white/40" />
                        <div><span className="font-mono text-xs uppercase tracking-wider text-white/40">Problem</span>
                          <p className="text-sm text-white/60 mt-1 leading-relaxed">{p.problem}</p></div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Wrench size={18} className="mt-0.5 shrink-0 text-white/40" />
                        <div><span className="font-mono text-xs uppercase tracking-wider text-white/40">Solution</span>
                          <p className="text-sm text-white/60 mt-1 leading-relaxed">{p.solution}</p></div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.features.slice(0, 6).map((f) => (
                        <span key={f} className="rounded-md bg-white/[0.04] border border-white/10 px-2.5 py-1 text-xs text-white/60">{f}</span>
                      ))}
                    </div>

                    <div className="mt-5 glass rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2"><Zap size={14} className="text-[#00F0FF]" /><span className="font-mono text-xs uppercase tracking-wider text-[#00F0FF]">Impact</span></div>
                      <ul className="space-y-1.5">
                        {p.impact.map((im, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00F0FF]" />{im}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <div className="flex flex-wrap gap-1.5 mr-auto">
                        {p.stack.map((s) => (
                          <span key={s} className="rounded-md border border-[#00F0FF]/20 bg-[#00F0FF]/5 px-2 py-1 text-xs font-mono text-[#00F0FF]/90">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <a href={p.github} target="_blank" rel="noreferrer" data-testid={`project-${p.id}-github`} className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"><Github size={16} /> Code</a>
                      <a href={p.live} target="_blank" rel="noreferrer" data-testid={`project-${p.id}-live`} className="group/btn flex items-center gap-2 rounded-full bg-[#00F0FF] px-4 py-2 text-sm font-semibold text-black hover:bg-white transition-colors">
                        Live Demo <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
