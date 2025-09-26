import { useEffect, useRef } from "react";
import gsap from "gsap";

const ProjectHeader = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".project-header-item"),
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 md:py-20 px-7 md:px-20 text-center bg-background"
    >
      <h1 className="project-header-item text-4xl md:text-5xl font-bold text-brand mb-4">
        My Projects
      </h1>
      <p className="project-header-item text-lg md:text-xl text-primarytext max-w-2xl mx-auto">
        A showcase of some projects I’ve built. Each project highlights
        my skills in modern development tools, frameworks, and design practices.
      </p>
    </section>
  );
};

export default ProjectHeader;
