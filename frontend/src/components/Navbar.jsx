import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, FileText, Terminal } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      const pos = window.scrollY + 200;
      let current = "";
      for (const s of sections) {
        if (s.offsetTop <= pos) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      data-testid="navbar"
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "mt-3" : "mt-0"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-dark border-glow" : "bg-transparent border border-transparent"
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            data-testid="logo-button"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] group-hover:bg-[#00F0FF]/20 transition-colors">
              <Terminal size={18} />
            </span>
            <span className="font-heading font-bold text-lg tracking-tight">
              Manish<span className="text-[#00F0FF]">.</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                data-testid={`nav-${l.id}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === l.id ? "text-[#00F0FF]" : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-[#00F0FF]/10"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noreferrer" data-testid="nav-github" className="h-9 w-9 grid place-items-center rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="nav-linkedin" className="h-9 w-9 grid place-items-center rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" data-testid="nav-resume" className="flex items-center gap-2 rounded-lg bg-[#00F0FF] px-4 py-2 text-sm font-semibold text-black hover:bg-[#00F0FF]/90 transition-colors">
              <FileText size={16} /> Resume
            </a>
          </div>

          <button
            className="lg:hidden h-9 w-9 grid place-items-center rounded-lg text-white"
            onClick={() => setOpen((o) => !o)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-dark rounded-2xl p-4"
              data-testid="mobile-menu"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => go(l.id)}
                    data-testid={`mobile-nav-${l.id}`}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium ${
                      active === l.id ? "text-[#00F0FF] bg-[#00F0FF]/10" : "text-white/70"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex-1 grid place-items-center py-2.5 rounded-lg bg-white/5 text-white"><Github size={18} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex-1 grid place-items-center py-2.5 rounded-lg bg-white/5 text-white"><Linkedin size={18} /></a>
                <a href={profile.resume} target="_blank" rel="noreferrer" className="flex-[2] flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#00F0FF] text-black font-semibold text-sm"><FileText size={16} /> Resume</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
