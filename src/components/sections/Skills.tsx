import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Skills() {
  const { ref, isVisible } = useReveal();
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase font-mono">Skills</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Tech Stack
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Technologies I've used to architect, build, and ship production software — no toy projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-4 font-mono">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 cursor-default group"
                    >
                      <span className="text-muted-foreground group-hover:text-primary transition-colors text-base">
                        <item.icon />
                      </span>
                      <span className="text-xs font-medium text-foreground/80">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
