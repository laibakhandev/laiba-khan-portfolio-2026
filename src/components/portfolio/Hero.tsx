import { ArrowRight, Mail } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

/** Full-width gradient hero with intro copy and a developer illustration. */
export function Hero() {
  return (
    <section id="top" className="hero-band relative overflow-hidden">
      {/* Floating decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute -left-16 top-24 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="float-slower absolute right-[8%] top-16 h-40 w-40 rounded-full bg-gold/30 blur-2xl" />
        <div className="float-slow absolute bottom-10 left-[45%] h-32 w-32 rounded-full bg-violet/40 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:pt-44">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-primary-foreground/90">
            <span aria-hidden>✨</span> Welcome to my portfolio
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl xl:text-6xl">
            Hi, I'm Laiba Khan <span aria-hidden>👋</span>
          </h1>

          <p className="mt-4 font-display text-xl font-semibold text-primary-foreground/85 sm:text-2xl">
            Computer Science Student &amp; Front-End Web Developer
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg lg:mx-0">
            I build clean, responsive and user-friendly websites with modern web
            technologies. I'm passionate about learning, creating and turning ideas
            into interactive digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href="#projects" className="btn btn-light">
              View My Work <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#contact" className="btn btn-ghost-light">
              <Mail className="h-4 w-4" aria-hidden /> Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[3rem] bg-white/10 blur-xl"
          />
          <img
            src={heroIllustration}
            alt="Illustration of a laptop surrounded by floating code and abstract shapes"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="relative w-full rounded-[2.5rem] shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}
