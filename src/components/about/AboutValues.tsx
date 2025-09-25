import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle, FaBolt, FaUsersCog } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: <FaCheckCircle className="text-brand text-3xl" />,
    title: "Quality First",
    desc: "I focus on writing clean, scalable, and maintainable code to deliver reliable products.",
  },
  {
    icon: <FaBolt className="text-brand text-3xl" />,
    title: "Efficiency",
    desc: "I believe in building fast and responsive applications with smooth user experiences.",
  },
  {
    icon: <FaUsersCog className="text-brand text-3xl" />,
    title: "Collaboration",
    desc: "Great results come from teamwork. I value clear communication and client involvement.",
  },
];

const AboutValues = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".value-card"),
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
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
    <section ref={sectionRef} className="w-full bg-surface py-20 px-7 md:px-30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-12">
          My Work Philosophy
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, i) => (
            <div
              key={i}
              className="value-card bg-background rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primarytext mb-2">
                {item.title}
              </h3>
              <p className="text-secondarytext text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
