import { motion } from "framer-motion";
import { Github, GitFork, Star, Quote, Linkedin } from "lucide-react";
import { techCloud, profile } from "../data/portfolio";
import { Reveal } from "../lib/motion";

// Deterministic pseudo contribution grid
const weeks = 52;
const days = 7;
const cells = Array.from({ length: weeks * days }, (_, i) => {
  const v = (Math.sin(i * 1.7) + Math.cos(i * 0.9) + 2) / 4; // 0..1
  return Math.floor(v * 4);
});
const levelColor = ["bg-white/5", "bg-[#00F0FF]/25", "bg-[#00F0FF]/45", "bg-[#00F0FF]/70", "bg-[#00F0FF]"];

const languages = [
  { name: "Java", pct: 38, color: "#f89820" },
  { name: "JavaScript", pct: 30, color: "#f7df1e" },
  { name: "TypeScript", pct: 16, color: "#3178c6" },
  { name: "HTML/CSS", pct: 10, color: "#e34c26" },
  { name: "Other", pct: 6, color: "#8b5cf6" },
];

const TechStack = () => {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Tech cloud */}
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Tech Stack</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tighter">Tools I reach for</h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {techCloud.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="rounded-xl glass px-4 py-2.5 text-sm font-mono text-white/70 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 cursor-default transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* GitHub */}
        <div className="mt-20">
          <Reveal className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">GitHub</span>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tighter">Building in the open</h2>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer" data-testid="github-profile-link" className="flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"><Github size={18} /> @ManishKumarCs</a>
          </Reveal>

          {/* <div className="mt-8 grid lg:grid-cols-3 gap-4">
            <Reveal className="lg:col-span-2 glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm text-white/60">Contribution activity</span>
                <span className="font-mono text-xs text-white/40">last year</span>
              </div>
              <div className="grid grid-flow-col auto-cols-max gap-[3px] overflow-hidden">
                {Array.from({ length: weeks }).map((_, w) => (
                  <div key={w} className="grid grid-rows-7 gap-[3px]">
                    {Array.from({ length: days }).map((_, d) => (
                      <span key={d} className={`h-2.5 w-2.5 rounded-[2px] ${levelColor[cells[w * days + d]]}`} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/40">
                <span>Less</span>
                {levelColor.map((c, i) => <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />)}
                <span>More</span>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="glass rounded-3xl p-6 sm:p-8">
              <span className="text-sm text-white/60">Top languages</span>
              <div className="mt-5 space-y-4">
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="flex justify-between text-sm mb-1"><span className="text-white/70">{l.name}</span><span className="font-mono text-white/40">{l.pct}%</span></div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${l.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="h-full rounded-full" style={{ backgroundColor: l.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div> */}

          {/* Pinned repos */}
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {[
              { name: "onboarding-management-system", desc: "MERN HR onboarding platform with RBAC & document management.", lang: "JavaScript", stars: 18, forks: 5 },
              { name: "mediconnect", desc: "Spring Boot + Angular healthcare system, secured with JWT.", lang: "Java", stars: 14, forks: 3 },
              { name: "swiftkart", desc: "Full-stack e-commerce with cart, orders & admin dashboard.", lang: "JavaScript", stars: 11, forks: 4 },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06} className="group glass rounded-2xl p-5 hover:border-[#00F0FF]/30 transition-colors">
                <div className="flex items-center gap-2 text-[#00F0FF]"><Github size={16} /><span className="font-mono text-sm text-white group-hover:text-[#00F0FF] transition-colors truncate">{r.name}</span></div>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{r.desc}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-[#00F0FF]" /> {r.lang}</span>
                  <span className="flex items-center gap-1"><Star size={12} /> {r.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} /> {r.forks}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Testimonials placeholder */}
        {/* <div className="mt-20">
          <Reveal><span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Testimonials</span>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tighter">What colleagues say</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              "A recommendation from your Cognizant mentor will appear here.",
              "A recommendation from your Devslane lead will appear here.",
              "A LinkedIn recommendation from a teammate will appear here.",
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.08} className="glass rounded-2xl p-6 border-dashed border-white/15">
                <Quote size={24} className="text-[#00F0FF]/50" />
                <p className="mt-4 text-sm text-white/50 leading-relaxed">{t}</p>
                <div className="mt-6 flex items-center gap-3 opacity-50">
                  <span className="h-9 w-9 rounded-full bg-white/10" />
                  <div><div className="h-2.5 w-24 rounded bg-white/10" /><div className="mt-1.5 h-2 w-16 rounded bg-white/10" /></div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-4 text-center">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="testimonials-linkedin" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#00F0FF] transition-colors"><Linkedin size={16} /> View recommendations on LinkedIn</a>
          </Reveal>
        </div> */}
      </div>
    </section>
  );
};

export default TechStack;
