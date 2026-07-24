import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send, Mail, MapPin, Github, Linkedin, Phone, FileText, Download, Loader2, CheckCircle2 } from "lucide-react";
import { profile } from "../data/portfolio";
import { Reveal } from "../lib/motion";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const roleOptions = ["Full Stack Developer", "Backend Developer", "Software Engineer (SDE)", "SDET / Automation", "Internship", "Freelance", "Other"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: roleOptions[0], message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setDone(true);
      toast.success("Message sent! Manish will get back to you shortly.");
      setForm({ name: "", email: "", company: "", role: roleOptions[0], message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[500px] glow-cyan opacity-40" />

      {/* Resume CTA */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="glass rounded-3xl p-8 sm:p-12 border-glow flex flex-col lg:flex-row items-center justify-between gap-6 mb-20">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Resume</span>
            <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight">Grab my ATS-friendly resume</h3>
            <p className="mt-2 text-white/60 max-w-lg">One page, keyword-optimized, and recruiter-ready. Preview it or download the PDF.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={profile.resume} target="_blank" rel="noreferrer" data-testid="resume-preview" className="flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"><FileText size={18} /> Preview</a>
            <a href={profile.resume} download data-testid="resume-download" className="flex items-center gap-2 rounded-full bg-[#00F0FF] px-5 py-3 text-sm font-semibold text-black hover:bg-white transition-colors"><Download size={18} /> Download PDF</a>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left info */}
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00F0FF]">Contact</span>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tighter">Let&apos;s build something great together</h2>
            <p className="mt-5 text-white/60 leading-relaxed max-w-lg">
              Hiring for a Software Engineer, Full Stack, Backend, or SDET role? I&apos;d love to connect and discuss how I can add value to your team.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${profile.email}`} data-testid="contact-email" className="flex items-center gap-4 glass rounded-xl p-4 hover:border-[#00F0FF]/40 transition-colors">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]"><Mail size={18} /></span>
                <div><div className="text-xs text-white/40">Email</div><div className="text-sm text-white/80">{profile.email}</div></div>
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-4 glass rounded-xl p-4 hover:border-[#00F0FF]/40 transition-colors">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]"><Phone size={18} /></span>
                <div><div className="text-xs text-white/40">Phone</div><div className="text-sm text-white/80">{profile.phone}</div></div>
              </a>
              <div className="flex items-center gap-4 glass rounded-xl p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]"><MapPin size={18} /></span>
                <div><div className="text-xs text-white/40">Location</div><div className="text-sm text-white/80">{profile.location}</div></div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Full-Time", "Freelance", "Open to Relocation"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-mono text-green-400"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> {t}</span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-full glass text-white hover:text-[#00F0FF] transition-colors"><Github size={20} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-full glass text-white hover:text-[#00F0FF] transition-colors"><Linkedin size={20} /></a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/50">Name *</label>
                  <input value={form.name} onChange={update("name")} data-testid="contact-input-name" className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#00F0FF]/60 focus:outline-none transition-colors" placeholder="Name" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/50">Email *</label>
                  <input type="email" value={form.email} onChange={update("email")} data-testid="contact-input-email" className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#00F0FF]/60 focus:outline-none transition-colors" placeholder="you@manishdev.com" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/50">Company</label>
                  <input value={form.company} onChange={update("company")} data-testid="contact-input-company" className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#00F0FF]/60 focus:outline-none transition-colors" placeholder="Company" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/50">Role</label>
                  <select value={form.role} onChange={update("role")} data-testid="contact-input-role" className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#00F0FF]/60 focus:outline-none transition-colors">
                    {roleOptions.map((r) => <option key={r} value={r} className="bg-[#0a0a0a]">{r}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-mono uppercase tracking-wider text-white/50">Message *</label>
                <textarea value={form.message} onChange={update("message")} rows={4} data-testid="contact-input-message" className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#00F0FF]/60 focus:outline-none transition-colors resize-none" placeholder="Tell me about the opportunity..." />
              </div>
              <button type="submit" disabled={loading || done} data-testid="contact-submit" className="mt-5 w-full flex items-center justify-center gap-2 rounded-full bg-[#00F0FF] px-6 py-3.5 text-sm font-semibold text-black hover:bg-white disabled:opacity-70 transition-colors">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : done ? <><CheckCircle2 size={18} /> Sent!</> : <><Send size={18} /> Send Message</>}
              </button>
              <p className="mt-3 text-center text-xs text-white/30">Goes straight to my inbox — I reply within 24 hours.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
