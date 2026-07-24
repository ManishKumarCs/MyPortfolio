import { ArrowUp, Github, Linkedin, Mail, Terminal, FileText } from "lucide-react";
import { profile, navLinks } from "../data/portfolio";

const Footer = () => {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <button onClick={top} className="flex items-center gap-2 group">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]"><Terminal size={18} /></span>
              <span className="font-heading font-bold text-lg">Manish<span className="text-[#00F0FF]">.</span></span>
            </button>
            <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
              Software Engineer building scalable full-stack systems and reliable test automation. Open to opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">Quick Links</h4>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <button key={l.id} onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })} className="text-left text-sm text-white/60 hover:text-[#00F0FF] transition-colors">{l.label}</button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">Connect</h4>
            <div className="mt-4 flex gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-lg glass text-white hover:text-[#00F0FF] transition-colors"><Github size={18} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-lg glass text-white hover:text-[#00F0FF] transition-colors"><Linkedin size={18} /></a>
              <a href={`mailto:${profile.email}`} className="h-10 w-10 grid place-items-center rounded-lg glass text-white hover:text-[#00F0FF] transition-colors"><Mail size={18} /></a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-lg glass text-white hover:text-[#00F0FF] transition-colors"><FileText size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} {profile.name}. Built with React, FastAPI & Framer Motion.</p>
          <button onClick={top} data-testid="back-to-top" className="flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-white/70 hover:text-[#00F0FF] transition-colors">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
