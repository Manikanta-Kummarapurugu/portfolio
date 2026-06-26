import { useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";

export function Contact() {
  const { ref, isVisible } = useReveal();
  const { person } = PORTFOLIO_DATA;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const isNetlify = () => {
    const host = window.location.hostname;
    return !host.includes("localhost") &&
           !host.includes("replit") &&
           !host.includes("repl.co") &&
           !host.includes("127.0.0.1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    // On Netlify: submit to Netlify Forms. Anywhere else: open mailto fallback.
    if (!isNetlify()) {
      const subject = `Portfolio message from ${form.name}`;
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
      window.open(
        `mailto:kmanikanta4321@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        "_blank"
      );
      setSending(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      return;
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please email me directly.");
      }
    } catch {
      setError("Network error. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase font-mono">Contact</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Looking for a developer who ships? I'm open to new opportunities, freelance projects, and collaborations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Let's connect</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {person.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Phone</div>
                      <div className="text-sm font-semibold text-foreground">{person.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-widest">Social</h3>
                <div className="flex gap-3">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card hover:border-primary/40 hover:text-primary text-muted-foreground transition-all duration-200 text-sm font-medium"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card hover:border-primary/40 hover:text-primary text-muted-foreground transition-all duration-200 text-sm font-medium"
                  >
                    <SiGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-400 text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 glow-hover disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={16} className={sending ? "animate-pulse" : ""} />
                    {sending ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
