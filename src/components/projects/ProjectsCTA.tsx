import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsCTA = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".cta-item"),
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-brand py-20 px-7 md:px-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="cta-item text-3xl md:text-4xl font-bold mb-6">
          Like what you see? 🚀
        </h2>
        <p className="cta-item text-lg text-white/90 mb-8">
          Let’s collaborate and create something amazing together. I’m ready to bring your ideas to life.
        </p>
        <a
          href="/contact"
          className="cta-item inline-block px-8 py-4 rounded-lg bg-white text-brand font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default ProjectsCTA;
