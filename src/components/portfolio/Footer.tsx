import { Github, Linkedin } from "lucide-react";

// Placeholder profiles — keep in sync with Contact.tsx.
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
];

/** Site footer with name, tagline, socials and copyright. */
export function Footer() {
  return (
    <footer className="bg-foreground py-14 text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <p className="font-display text-2xl font-extrabold tracking-tight">Laiba Khan</p>
        <p className="text-sm text-background/70">
          Computer Science Student • Front-End Web Developer
        </p>

        <div className="flex gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-background/25 text-background transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:text-foreground"
            >
              <social.icon className="h-5 w-5" aria-hidden />
            </a>
          ))}
        </div>

        <p className="text-xs text-background/60">© 2026 Laiba Khan. All rights reserved.</p>
      </div>
    </footer>
  );
}
