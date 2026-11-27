import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";
import { Services } from "@/components/Services";
import { SideRails } from "@/components/SideRails";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <Header />
      <SideRails />
      <main>
        <Hero />
        <SectionDivider from="00" to="01" />
        <Services />
        <SectionDivider from="01" to="02" />
        <Experience />
        <SectionDivider from="02" to="03" />
        <Projects />
        <SectionDivider from="03" to="04" />
        <Process />
        <SectionDivider from="04" to="05" />
        <TechStack />
        <SectionDivider from="05" to="06" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
