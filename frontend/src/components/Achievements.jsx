import * as Icons from "lucide-react";
import { BadgeCheck, GraduationCap, Sparkles } from "lucide-react";
import { certifications, achievements, education, currentlyLearning } from "../data/portfolio";
import { Reveal } from "../lib/motion";

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Credentials</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tighter">Proof of work</h2>
        </Reveal>

        {/* Achievements grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => {
            const Icon = Icons[a.icon] || Icons.Star;
            return (
              <Reveal key={a.title} delay={i * 0.06} className="group glass rounded-2xl p-6 hover:border-[#00F0FF]/40 hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] group-hover:bg-[#00F0FF]/20 transition-colors"><Icon size={20} /></span>
                <h3 className="mt-4 font-heading font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-white/50">{a.desc}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Certifications */}
<Reveal className="mt-16">
  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">
    Certifications
  </span>
</Reveal>

<div className="mt-6 grid md:grid-cols-2 gap-6">
  {certifications.map((c, i) => (
    <Reveal
      key={c.id}
      delay={i * 0.08}
      className="glass overflow-hidden rounded-2xl border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Certificate Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={c.image}
          alt={c.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                c.color === "cyan"
                  ? "bg-[#00F0FF]/10 text-[#00F0FF]"
                  : c.color === "violet"
                  ? "bg-[#7000FF]/15 text-[#a970ff]"
                  : "bg-blue-500/10 text-blue-400"
              }`}
            >
              <BadgeCheck size={20} />
            </span>

            <div>
              <h3 className="font-heading font-semibold leading-tight">
                {c.name}
              </h3>
              <p className="text-sm text-white/50">{c.issuer}</p>
            </div>
          </div>

          <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-mono text-green-400">
            Verified
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {c.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-white/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  ))}
</div>

        {/* Education + Currently Learning */}
        <div className="mt-16 grid lg:grid-cols-2 gap-4">
          <div>
            <Reveal><span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Education</span></Reveal>
            <div className="mt-6 space-y-4">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.08} className="glass rounded-2xl p-6 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00F0FF]/10 text-[#00F0FF]"><GraduationCap size={20} /></span>
                  <div>
                    <h3 className="font-heading font-semibold leading-tight">{e.degree}</h3>
                    <p className="text-sm text-white/60 mt-0.5">{e.school}</p>
                    <p className="text-xs font-mono text-white/40 mt-1">{e.period} · {e.score}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal><span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Now / Currently Learning</span></Reveal>
            <Reveal delay={0.1} className="mt-6 glass rounded-2xl p-8 h-[calc(100%-2.75rem)]">
              <div className="flex items-center gap-2 text-white/70 mb-4"><Sparkles size={16} className="text-[#00F0FF]" /><span className="text-sm">Compounding my skills for production scale</span></div>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((l) => (
                  <span key={l} className="rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5 px-3 py-1.5 text-sm text-white/75 hover:border-[#00F0FF]/50 transition-colors">{l}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
