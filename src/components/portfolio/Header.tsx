import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

/** Sticky top navigation with a hamburger menu on small screens. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the gradient hero (not yet scrolled) the bar switches to light text.
  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 shadow-soft backdrop-blur-md"
          : open
            ? "bg-background shadow-soft"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className={`font-display text-xl font-extrabold tracking-tight transition-colors ${
            onDark ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          Laiba
          <span className={onDark ? "text-gold" : "text-primary"}> Khan</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm ${onDark ? "on-dark" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary !px-6 !py-2.5 text-sm">
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors md:hidden ${
            onDark
              ? "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground"
              : "border-border bg-card text-foreground"
          }`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background/95 px-6 pb-6 pt-2 backdrop-blur-md md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-3 w-full"
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}
