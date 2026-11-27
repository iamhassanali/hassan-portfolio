import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="resume-shell min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl flex-col lg:flex-row lg:gap-6 lg:px-8 xl:px-10">
        <Sidebar />
        <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:py-16 lg:pl-6 lg:pr-0">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
