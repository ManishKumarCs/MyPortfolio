import * as Icons from "lucide-react";
import { skillGroups } from "../data/portfolio";
import { Reveal } from "../lib/motion";

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Technical Skills</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tighter">
            A full-stack + SDET toolkit
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed text-sm sm:text-base">
            Categorized across the stack — from backend services and frontend interfaces to the automation that keeps them reliable.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {skillGroups.map((g, i) => {
            const Icon = Icons[g.icon] || Icons.Code2;
            return (
              <Reveal
                key={g.category}
                delay={i * 0.07}
                className={`${g.span} group glass rounded-2xl p-5 sm:p-6 hover:border-[#00F0FF]/40 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] group-hover:bg-[#00F0FF]/20 transition-colors">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-semibold">{g.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-white/70 hover:border-[#00F0FF]/40 hover:text-white transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;