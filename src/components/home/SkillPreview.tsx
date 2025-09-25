import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpo, SiTailwindcss, SiShopify, SiWordpress, SiTypescript } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400 text-5xl" /> },
  { name: "React Native", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Expo", icon: <SiExpo className="text-black dark:text-white text-5xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Shopify", icon: <SiShopify className="text-green-600 text-5xl" /> },
  { name: "WordPress", icon: <SiWordpress className="text-blue-700 text-5xl" /> },
  { key: "typescript", name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },

];

const SkillsPreview = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".skill-item"),
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    }
  }, []);


  return (
    <section ref={sectionRef} className="w-full bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-10">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item flex flex-col items-center"
            >
              {skill.icon}
              <p className="mt-3 text-primarytext font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/skills"
            className="inline-block px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            See All Skills
          </a>
        </div>
      </div>
    </section>
       );
};

export default SkillsPreview;
