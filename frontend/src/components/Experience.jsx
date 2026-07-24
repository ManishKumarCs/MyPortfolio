import { MapPin, Briefcase, TrendingUp } from "lucide-react";
import { experience } from "../data/portfolio";
import { Reveal } from "../lib/motion";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Experience</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tighter">Where I&apos;ve delivered</h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#00F0FF]/60 via-white/10 to-transparent" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.1} className="relative pl-12 sm:pl-20">
                <span className="absolute left-4 sm:left-6 top-2 -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-[#00F0FF]/30" />
                  <span className="h-2 w-2 rounded-full bg-[#00F0FF] border-glow" />
                </span>

                <div className="glass rounded-2xl p-6 sm:p-8 hover:border-[#00F0FF]/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-[#00F0FF] mb-1">
                        <Briefcase size={16} />
                        <span className="font-heading text-xl font-bold text-white">{e.company}</span>
                      </div>
                      <p className="font-medium text-white/80">{e.role}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-white/50">
                        <span className="font-mono">{e.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={13} /> {e.location}</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-[#00F0FF]/10 px-3 py-1.5 text-xs font-semibold text-[#00F0FF]">
                      <TrendingUp size={13} /> {e.impact}
                    </span>
                  </div>

                  <p className="mt-4 text-white/60 text-sm leading-relaxed">{e.summary}</p>

                  <ul className="mt-5 space-y-2">
                    {e.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-white/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00F0FF]" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-white/60">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
