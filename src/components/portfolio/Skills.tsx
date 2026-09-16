import {
  Boxes,
  Braces,
  FileCode2,
  GitBranch,
  Paintbrush,
  PenTool,
  Smartphone,
  Sparkles,
  Table2,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const CORE_SKILLS = [
  { icon: FileCode2, name: "HTML" },
  { icon: Paintbrush, name: "CSS" },
  { icon: Braces, name: "JavaScript" },
];

const OTHER_SKILLS = [
  { icon: Smartphone, name: "Responsive Web Design" },
  { icon: GitBranch, name: "Git & GitHub" },
  { icon: Table2, name: "Microsoft Excel" },
  { icon: PenTool, name: "Balsamiq" },
  { icon: Boxes, name: "Blender" },
  { icon: Sparkles, name: "AI Tools" },
];

/** Skills section: highlighted core web skills plus supporting tool cards. */
export function Skills() {
  return (
    <section id="skills" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="What I work with" />
        </Reveal>

        {/* Core web-development skills */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CORE_SKILLS.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 90}>
              <article className="hero-band relative h-full overflow-hidden rounded-3xl p-7 text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-1.5">
                <div
                  aria-hidden
                  className="float-slow absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl"
                />
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                  <skill.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{skill.name}</h3>
                <p className="mt-1 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Core skill
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Supporting skills */}
        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {OTHER_SKILLS.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 60}>
              <article className="flex h-full items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <skill.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-sm font-bold leading-snug text-foreground sm:text-base">
                  {skill.name}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
