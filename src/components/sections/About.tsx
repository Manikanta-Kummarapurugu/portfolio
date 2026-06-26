import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Code2, Smartphone, Workflow } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "5 Live Mobile Apps",
    desc: "Shipped to App Store & Play Store as sole developer — from architecture to deployment"
  },
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    desc: "React Native, React, Angular, PHP, MySQL — the entire stack, front to back"
  },
  {
    icon: Workflow,
    title: "AI-Powered Automation",
    desc: "Production N8N pipelines integrating GPT, Gemini Flash, and Claude API"
  }
];

export function About() {
  const { ref, isVisible } = useReveal();
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase font-mono">About</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Self-taught developer.<br />
                <span className="gradient-text">Production-first mindset.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                {about.summary}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                With a background in Mechanical Engineering and a drive to build things that actually work in the real world, I've taught myself everything from cross-platform mobile development to AI pipeline architecture — all while shipping real products used by real communities.
              </p>
            </div>

            {/* Right: stats + highlights */}
            <div className="space-y-6">
              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-card p-5 text-center glow-hover transition-all duration-300"
                  >
                    <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlight cards */}
              <div className="space-y-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors duration-200"
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <h.icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-0.5">{h.title}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{h.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
