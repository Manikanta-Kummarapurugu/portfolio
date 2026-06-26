import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { ref, isVisible } = useReveal();
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase font-mono">Experience</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Work History
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] md:left-[26px] top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-12">
              {experience.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.55 }}
                  className="sm:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full border-2 border-primary bg-card flex items-center justify-center hidden sm:flex shrink-0">
                    <Briefcase size={15} className="text-primary" />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground">{job.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-primary font-semibold text-sm">{job.company}</span>
                          {job.companyNote && (
                            <span className="text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5">
                              {job.companyNote}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-mono whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {job.achievements.map((ach, ai) => (
                        <li key={ai} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6">Education</h3>
            {PORTFOLIO_DATA.education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-primary text-sm font-semibold mt-0.5">{edu.institution}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-mono self-start">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
