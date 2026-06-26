import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail } from "lucide-react";

export function Footer() {
  const { person } = PORTFOLIO_DATA;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-base font-bold text-foreground mb-1">
              MK<span className="text-primary">.dev</span>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {year} {person.name}. Designed &amp; Built by Manikanta.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={18} />
            </a>
            <a
              href={`mailto:${person.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
