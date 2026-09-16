import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laiba Khan | Front-End Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Laiba Khan — Computer Science student and aspiring front-end web developer building clean, responsive, user-friendly websites.",
      },
      { property: "og:title", content: "Laiba Khan | Front-End Developer & CS Student" },
      {
        property: "og:description",
        content:
          "Clean, responsive and user-friendly websites built with modern web technologies — projects, skills and resume.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Laiba Khan | Front-End Developer & CS Student" },
      {
        name: "twitter:description",
        content:
          "Clean, responsive and user-friendly websites built with modern web technologies — projects, skills and resume.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
