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
    <section className="relative py-16 sm:py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Tech cloud */}
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Tech Stack</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tighter">Tools I reach for</h2>
        </Reveal>
        <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
          {techCloud.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="rounded-xl glass px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-mono text-white/70 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 cursor-default transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* GitHub */}
        <div className="mt-14 sm:mt-20">
          <Reveal className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">GitHub</span>
              <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tighter">Building in the open</h2>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer" data-testid="github-profile-link" className="flex items-center gap-2 rounded-full glass px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"><Github size={18} /> @ManishKumarCs</a>
          </Reveal>

          {/* Pinned repos */}
          <div className="mt-6 sm:mt-4 grid md:grid-cols-3 gap-4">
            {[
              { name: "onboarding-management-system", desc: "MERN HR onboarding platform with RBAC & document management.", lang: "JavaScript", stars: 18, forks: 5 },
              { name: "mediconnect", desc: "Spring Boot + Angular healthcare system, secured with JWT.", lang: "Java", stars: 14, forks: 3 },
              { name: "swiftkart", desc: "Full-stack e-commerce with cart, orders & admin dashboard.", lang: "JavaScript", stars: 11, forks: 4 },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06} className="group glass rounded-2xl p-5 hover:border-[#00F0FF]/30 transition-colors">
                <div className="flex items-center gap-2 text-[#00F0FF] min-w-0"><Github size={16} className="shrink-0" /><span className="font-mono text-sm text-white group-hover:text-[#00F0FF] transition-colors truncate">{r.name}</span></div>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{r.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/40">
                  <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-[#00F0FF]" /> {r.lang}</span>
                  <span className="flex items-center gap-1"><Star size={12} /> {r.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} /> {r.forks}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;