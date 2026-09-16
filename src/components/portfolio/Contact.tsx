import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

// Placeholder profiles — replace with the real GitHub / LinkedIn URLs.
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
];

const EMAIL = "laibakhaan.cs@gmail.com";

/** Contact section: intro, email + socials, and a simple contact form. */
export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Placeholder handler — wire up to a form backend or email service later.
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let's Connect" />
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            I'm always interested in learning, collaborating and exploring new
            opportunities.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact details */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4"
                aria-label={`Email ${EMAIL}`}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="block truncate font-semibold text-foreground transition-colors group-hover:text-primary">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Github className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline !px-5 !py-2.5 text-sm"
                    >
                      <social.icon className="h-4 w-4" aria-hidden /> {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-foreground">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity…"
                  className="w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </label>

              <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
                Send Message <Send className="h-4 w-4" aria-hidden />
              </button>

              {sent && (
                <p role="status" className="mt-4 rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground">
                  Thanks for reaching out! Your message has been noted — I'll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
