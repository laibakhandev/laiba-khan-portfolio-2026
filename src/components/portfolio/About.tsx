import {
  Briefcase,
  Code2,
  GraduationCap,
  Palette,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const TRAITS = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    text: "Building strong fundamentals through coursework and hands-on projects.",
  },
  {
    icon: Code2,
    title: "Front-End Development",
    text: "Focused on creating modern, responsive interfaces with web technologies.",
  },
  {
    icon: Palette,
    title: "Web Design & Technology",
    text: "Passionate about clean layouts, thoughtful UX and emerging tools.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learner",
    text: "Always learning new technologies and sharpening my skills.",
  },
  {
    icon: Briefcase,
    title: "Seeking Opportunities",
    text: "Looking for internships and projects to gain professional experience.",
  },
];

/** About section: short intro plus the five personal highlights. */
export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="About Me" title="A little about me" />
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            I'm a Computer Science student with a strong interest in web development
            and modern digital experiences. I enjoy creating responsive interfaces,
            learning new technologies and improving my development skills through
            practical projects.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRAITS.map((trait, i) => (
            <Reveal key={trait.title} delay={i * 80} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <article className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                  <trait.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {trait.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {trait.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
