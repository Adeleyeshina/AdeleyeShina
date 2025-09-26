import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../utils/skillsContant";
import PageWrapper from "../components/PageWrapper";

gsap.registerPlugin(ScrollTrigger);

const SkillsPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".skill-item"),
        { autoAlpha: 0, y: 40, scale: 0.8 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const categories: ("Frontend" | "Backend" | "Tools")[] = ["Frontend", "Backend", "Tools"];

  return (
    <PageWrapper>
    <section ref={sectionRef} className="w-full bg-background  py-20 px-7 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-12">My Skills & Tech Stack</h2>

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h3 className="text-2xl font-semibold text-primarytext mb-6">{cat}</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {skills
                .filter((skill) => skill.category === cat)
                .map((skill, idx) => (
                  <div
                    key={idx}
                    className="skill-item flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                  >
                    {skill.icon && (
                      <span className={` text-5xl`}>
                        {skill.icon}
                      </span>
                    )}
                    <p className="text-primarytext">{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </PageWrapper>
  );
};

export default SkillsPage;
