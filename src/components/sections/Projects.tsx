import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ExternalLink, Smartphone, Globe, Server, Zap, Search, X } from "lucide-react";

const PLATFORM_ICONS: Record<string, typeof Smartphone> = {
  iOS: Smartphone,
  Android: Smartphone,
  Web: Globe,
  Admin: Globe,
  Mobile: Smartphone,
  Backend: Server,
  Automation: Zap
};

const PLATFORM_COLORS: Record<string, string> = {
  iOS: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  Android: "bg-green-500/10 text-green-500 border-green-500/30",
  Web: "bg-primary/10 text-primary border-primary/30",
  Admin: "bg-purple-500/10 text-purple-500 border-purple-500/30",
  Mobile: "bg-orange-500/10 text-orange-500 border-orange-500/30",
  Backend: "bg-gray-500/10 text-gray-400 border-gray-500/30",
  Automation: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
};

const ALL_FILTER = "All";

const FILTER_TABS = [
  { label: "All", value: ALL_FILTER },
  { label: "iOS", value: "iOS" },
  { label: "Android", value: "Android" },
  { label: "Web", value: "Web" },
  { label: "Automation", value: "Automation" },
  { label: "Backend", value: "Backend" }
];

export function Projects() {
  const { ref, isVisible } = useReveal();
  const { projects } = PORTFOLIO_DATA;
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter =
        activeFilter === ALL_FILTER || p.platforms.includes(activeFilter);
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)) ||
        p.platforms.some((pl) => pl.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [projects, activeFilter, search]);

  const clearSearch = () => setSearch("");

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase font-mono">Projects</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What I've Built
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Eight production projects — five of them live on the App Store and Play Store today.
          </p>

          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search box */}
            <div className="relative flex-1 max-w-xs">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects or tech..."
                className="w-full pl-9 pr-8 py-2 rounded-lg border border-input bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
              {search && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all duration-200
                    ${activeFilter === tab.value
                      ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Result count */}
          <div className="mb-6 h-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={`${activeFilter}-${search}`}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-muted-foreground font-mono"
              >
                {filteredProjects.length === projects.length
                  ? `Showing all ${projects.length} projects`
                  : `${filteredProjects.length} of ${projects.length} project${filteredProjects.length !== 1 ? "s" : ""} match`}
                {search && <span> for &ldquo;<span className="text-primary">{search}</span>&rdquo;</span>}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-h-[200px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full flex flex-col items-center justify-center py-16 text-center"
                >
                  <Search size={36} className="text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground font-medium">No projects match your filter.</p>
                  <button
                    onClick={() => { setActiveFilter(ALL_FILTER); clearSearch(); }}
                    className="mt-3 text-sm text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </motion.div>
              ) : (
                filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 28, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`relative flex flex-col rounded-2xl border bg-card p-6 overflow-hidden transition-all duration-300 cursor-default
                      ${hoveredId === project.id
                        ? "border-primary/50 shadow-lg shadow-primary/10"
                        : "border-border"}`}
                  >
                    {/* Top accent line on hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 ${hoveredId === project.id ? "opacity-100" : "opacity-0"}`}
                      style={{
                        background: "linear-gradient(90deg, hsl(199 89% 52%), hsl(262 83% 68%))"
                      }}
                    />

                    {/* Platform badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.platforms.map((p) => {
                        const Icon = PLATFORM_ICONS[p] || Smartphone;
                        const colorClass = PLATFORM_COLORS[p] || "bg-primary/10 text-primary border-primary/30";
                        return (
                          <span
                            key={p}
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border ${colorClass}`}
                          >
                            <Icon size={10} />
                            {p}
                          </span>
                        );
                      })}
                    </div>

                    {/* Project name */}
                    <h3 className="text-lg font-bold text-foreground mb-2">{project.name}</h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-xs bg-muted text-muted-foreground border border-border font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {project.links.length > 0 ? (
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url !== "#" ? link.url : undefined}
                            target={link.url !== "#" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200
                              ${link.url !== "#"
                                ? "bg-primary text-primary-foreground hover:opacity-90"
                                : "border border-border text-muted-foreground cursor-not-allowed opacity-60"}`}
                          >
                            <ExternalLink size={11} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-auto pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground/60 italic">Internal / automation project</span>
                      </div>
                    )}
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
