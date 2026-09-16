import { Download } from "lucide-react";
import { Reveal } from "./Reveal";

/** Resume call-to-action band. */
export function Resume() {
  return (
    <section id="resume" className="px-6 py-24">
      <Reveal>
        <div className="hero-band relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-8 py-16 text-center shadow-lift sm:px-16">
          <div
            aria-hidden
            className="float-slow absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="float-slower absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-gold/25 blur-2xl"
          />

          <h2 className="relative font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Resume
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Interested in learning more about my education, skills and experience?
          </p>

          {/* Placeholder link — replace href with the real resume PDF. */}
          <a href="#" className="btn btn-light relative mt-8" download>
            <Download className="h-4 w-4" aria-hidden /> Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
