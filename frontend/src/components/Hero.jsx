import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { profile, heroBadges, heroStats } from "../data/portfolio";
import { Counter, useTyping } from "../lib/motion";

const line = {
  hidden: { y: "110%" },
  visible: (i) => ({ y: 0, transition: { duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
};

const Hero = () => {
  const typed = useTyping(profile.roles);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] glow-cyan animate-float" />
      <div className="absolute top-20 right-0 h-[420px] w-[420px] glow-violet" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6 sm:mb-8"
              data-testid="availability-badge"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 pulse-dot" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-xs font-mono tracking-wide text-white/80">{profile.availability}</span>
            </motion.div>

            <h1 className="font-heading font-extrabold tracking-tighter text-4xl sm:text-6xl lg:text-7xl leading-[0.95]">
              {["Manish Kumar", "builds software"].map((t, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span custom={i} variants={line} initial="hidden" animate="visible" className="block">
                    {i === 1 ? (
                      <>builds <span className="text-[#00F0FF] text-glow">software</span></>
                    ) : (
                      t
                    )}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span custom={2} variants={line} initial="hidden" animate="visible" className="block text-white/40">
                  that ships.
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 font-mono text-base sm:text-xl text-white/70 h-8"
              data-testid="typing-role"
            >
              <span className="text-[#00F0FF]">&gt;</span> {typed}
              <span className="cursor-blink text-[#00F0FF]">_</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-white/60 leading-relaxed"
            >
              {profile.valueProp}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-view-projects"
                className="group flex items-center gap-2 rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:bg-white transition-colors"
              >
                View Projects
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-download-resume"
                className="flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                <Download size={18} /> Download Resume
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" data-testid="hero-github" className="h-11 w-11 grid place-items-center rounded-full glass text-white hover:text-[#00F0FF] transition-colors"><Github size={20} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="hero-linkedin" className="h-11 w-11 grid place-items-center rounded-full glass text-white hover:text-[#00F0FF] transition-colors"><Linkedin size={20} /></a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {heroBadges.map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-white/60">
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile + Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* Circular Profile */}
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-6 rounded-full glow-cyan opacity-50 blur-3xl" />

                {/* Profile Image */}
                <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-[#00F0FF]/30">
                  <img
                    src="/profile.jpeg"
                    alt="Manish Kumar"
                    loading="eager"
                    className="h-full w-full object-cover"
                    data-testid="hero-profile-image"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="mt-6 glass rounded-2xl px-6 py-4 w-full max-w-sm">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin size={15} className="text-[#00F0FF]" />
                  {profile.location}
                </div>

                <div className="mt-2 flex items-center gap-2 text-xs font-mono text-white/60">
                  <Sparkles size={13} className="text-[#00F0FF]" />
                  {profile.title} @ Cognizant
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid w-full grid-cols-2 gap-3">
                {heroStats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="glass rounded-2xl p-3 sm:p-4 hover:border-[#00F0FF]/40 transition-colors"
                  >
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-[#00F0FF]">
                      {s.raw ? (
                        s.value + s.suffix
                      ) : (
                        <>
                          <Counter to={s.value} />
                          {s.suffix}
                        </>
                      )}
                    </div>

                    <div className="mt-1 text-xs text-white/50">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;