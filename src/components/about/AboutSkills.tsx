import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaShopify,
  FaGithub,
  FaCode
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpo,
  SiMongodb,
  SiFigma,
  SiPostman,
  SiJavascript,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: "Software Development",
    items: [
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      { name: "React Native", icon: <FaReact className="text-sky-500" /> },
      { name: "Expo", icon: <SiExpo className="text-black dark:text-white" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "GSAP", icon: <span className="text-green-500 font-bold">GSAP</span> },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    category: "Platforms",
    items: [
      { name: "WordPress", icon: <FaWordpress className="text-blue-500" /> },
      { name: "Shopify", icon: <FaShopify className="text-green-600" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-white" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
];

const AboutSkills = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".skill-group"),
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
    <section ref={sectionRef} className="w-full bg-background py-20 px-7 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-12">
          Skills & Tools
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="skill-group bg-surface rounded-xl shadow-md p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-primarytext mb-4 flex items-center gap-2">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-secondarytext text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
