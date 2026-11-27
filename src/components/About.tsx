import { about } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="pb-16 md:pb-20">
      <Reveal>
        <p className="label-mono text-accent">01 — About</p>
        <h2 className="section-title mt-3">{about.heading}</h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
          {about.body}
        </p>
      </Reveal>
    </section>
  );
}
