import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, Activity } from "lucide-react";
import { dsaTopics, dsaStats, profile } from "../data/portfolio";
import { Reveal, Counter } from "../lib/motion";

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] glow-violet opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Problem Solving</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tighter">Engineering Dashboard</h2>
          <p className="mt-5 text-white/60 leading-relaxed">
            300+ algorithmic problems solved in Java. Consistent practice sharpens the analytical thinking behind optimized, scalable production code.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-4">
          {/* Big metric */}
          <Reveal className="lg:col-span-4 glass rounded-3xl p-8 flex flex-col justify-between border-glow">
            <div className="flex items-center gap-2 text-[#00F0FF]"><Terminal size={18} /><span className="font-mono text-xs uppercase tracking-wider">DSA Solved</span></div>
            <div>
              <div className="font-heading text-7xl font-black text-[#00F0FF] text-glow leading-none">
                <Counter to={300} suffix="+" />
              </div>
              <p className="mt-3 text-white/50 text-sm">Problems across arrays, trees, graphs, DP, recursion, greedy & advanced structures.</p>
            </div>
          </Reveal>

          {/* Topic bars */}
          <Reveal delay={0.1} className="lg:col-span-8 glass rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-6 text-white/70"><Activity size={16} className="text-[#00F0FF]" /><span className="font-mono text-xs uppercase tracking-wider">Topic Proficiency</span></div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {dsaTopics.map((t, i) => (
                <div key={t.topic}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{t.topic}</span>
                    <span className="font-mono text-white/40">{t.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#7000FF] to-[#00F0FF]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stat strip */}
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {dsaStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="glass rounded-2xl p-6 text-center hover:border-[#00F0FF]/30 transition-colors">
              <div className="font-heading text-3xl font-bold text-white">
                {s.text ? s.text : <><Counter to={s.value} />{s.suffix}</>}
              </div>
              <div className="mt-1 text-xs text-white/50">{s.label}</div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-6 glass rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/60 max-w-2xl">
            <span className="text-[#00F0FF] font-mono">philosophy:</span> Problem solving isn&apos;t about memorising patterns — it&apos;s about breaking ambiguity into tractable pieces and choosing the trade-off that scales.
          </p>
          <div className="flex gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" data-testid="ps-github" className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"><Github size={16} /> GitHub</a>
            <a href="https://leetcode.com/u/ManishKumarCs" target="_blank" rel="noreferrer" data-testid="ps-leetcode" className="flex items-center gap-2 rounded-full bg-[#00F0FF] px-4 py-2 text-sm font-semibold text-black hover:bg-white transition-colors">LeetCode <ExternalLink size={14} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProblemSolving;
