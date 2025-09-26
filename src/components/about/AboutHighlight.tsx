import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaProjectDiagram, FaUsers, FaGlobe, FaClock } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: <FaProjectDiagram className="text-brand text-4xl" />,
    number: "20+",
    label: "Projects Completed",
  },
  {
    icon: <FaUsers className="text-brand text-4xl" />,
    number: "20+",
    label: "Happy Clients",
  },
  {
    icon: <FaGlobe className="text-brand text-4xl" />,
    number: "5",
    label: "Countries Served",
  },
  {
    icon: <FaClock className="text-brand text-4xl" />,
    number: "3+",
    label: "Years Experience",
  },
];

const AboutHighlights = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".highlight-card"),
        { autoAlpha: 0, scale: 0.8 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-background py-20 px-7 md:px-30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-12">
          Highlights
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="highlight-card bg-background rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              {item.icon}
              <h3 className="text-3xl font-bold text-primarytext mt-4">
                {item.number}
              </h3>
              <p className="text-secondarytext mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHighlights;
