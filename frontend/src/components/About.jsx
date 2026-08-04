import Marquee from "react-fast-marquee";
import * as Icons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { manifesto, whyHireMe, howIBuild, profile } from "../data/portfolio";
import { Reveal } from "../lib/motion";

const SectionLabel = ({ children }) => (
  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">{children}</span>
);

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <SectionLabel>About / Manifesto</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tighter">
            I don&apos;t just write code.<br /><span className="text-white/40">I engineer outcomes.</span>
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">{profile.intro}</p>
        </Reveal>

        {/* Numbered manifesto chapters */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-4">
          {manifesto.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08} className="group glass rounded-2xl p-6 sm:p-8 hover:border-[#00F0FF]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-baseline gap-3 sm:gap-4">
                <span className="font-heading text-4xl sm:text-5xl font-black text-white/10 group-hover:text-[#00F0FF]/30 transition-colors">{m.n}</span>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold">{m.title}</h3>
                  <p className="mt-2 text-white/55 leading-relaxed text-sm">{m.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Editorial marquee */}
      <div
        className="border-y border-white/10"
        style={{
          marginTop: "clamp(2rem, 6vw, 5rem)",
          paddingTop: "clamp(0.75rem, 2vw, 1.5rem)",
          paddingBottom: "clamp(0.75rem, 2vw, 1.5rem)",
        }}
      >
        <Marquee speed={40} gradient={false} autoFill>
          {["Full Stack", "Spring Boot", "Test Automation", "Clean Code", "REST APIs", "Problem Solving", "Agile", "Production Ready"].map((t, i) => (
            <span key={i} className="mx-4 sm:mx-8 font-heading text-2xl sm:text-4xl md:text-6xl font-black text-outline whitespace-nowrap">{t} <span className="text-[#00F0FF] not-italic">/</span></span>
          ))}
        </Marquee>
      </div>

      {/* How I Build + Why Hire */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6"
        style={{ marginTop: "clamp(2.5rem, 7vw, 6rem)" }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <Reveal><SectionLabel>How I Build Software</SectionLabel>
              <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-bold tracking-tight">A workflow built for reliability</h3>
            </Reveal>
            <div className="mt-8 space-y-3">
              {howIBuild.map((s, i) => {
                const Icon = Icons[s.icon] || Icons.Circle;
                return (
                  <Reveal key={s.step} delay={i * 0.06} className="flex items-start gap-4 glass rounded-xl p-4 hover:border-[#00F0FF]/30 transition-colors">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]"><Icon size={18} /></span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                        <h4 className="font-semibold">{s.step}</h4>
                      </div>
                      <p className="text-sm text-white/50 mt-0.5">{s.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div>
            <Reveal><SectionLabel>Why Hire Me</SectionLabel>
              <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-bold tracking-tight">Evidence, not adjectives</h3>
            </Reveal>
            <div className="mt-8 glass rounded-2xl p-6 sm:p-8">
              <ul className="space-y-5">
                {whyHireMe.map((w, i) => (
                  <Reveal key={i} delay={i * 0.05} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#00F0FF]" />
                    <span className="text-white/70 text-sm leading-relaxed">{w}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;