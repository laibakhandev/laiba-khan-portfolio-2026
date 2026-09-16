import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

import galleryImg from "@/assets/project-gallery.png";
import wireframeImg from "@/assets/project-wireframe.png";
import modelsImg from "@/assets/project-3d.png";

const PROJECTS = [
  {
    title: "Moments Gallery",
    description:
      "An interactive and responsive image gallery built with HTML, CSS and JavaScript. It includes category filtering, hover effects, smooth transitions and a lightbox with next/previous image navigation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: galleryImg,
    alt: "Screenshot of the Moments Gallery photo grid with an open lightbox",
    link: "#",
  },
  {
    title: "Balsamiq UI Prototype",
    description:
      "A user interface prototype designed in Balsamiq to demonstrate wireframing, layout planning and user interaction concepts.",
    technologies: ["Balsamiq", "UI/UX"],
    image: wireframeImg,
    alt: "Hand-drawn wireframe screens of a mobile app and website layout",
  },
  {
    title: "3D Blender Models",
    description:
      "A collection of beginner-friendly 3D models created in Blender while practicing 3D modeling, materials, shapes and scene design.",
    technologies: ["Blender", "3D Modeling"],
    image: modelsImg,
    alt: "Low-poly 3D house, tree and primitive shapes rendered in Blender",
  },
];

/** Projects section with hover-lift cards and image zoom. */
export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Portfolio" title="My Projects" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={1152}
                    height={768}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.link && (
                    <a
                      href={project.link}
                      aria-label={`View project: ${project.title}`}
                      className="btn btn-outline mt-6 w-fit !px-5 !py-2.5 text-sm"
                    >
                      View Project <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
