import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { projects } from "../../utils/contant";

gsap.registerPlugin(ScrollTrigger);



const techColors: Record<string, string> = {
  React: "bg-blue-500 text-white",
  "React Native": "bg-blue-600 text-white",
  "Node.js": "bg-green-600 text-white",
  Express: "bg-gray-700 text-white",
  MongoDB: "bg-green-400 text-white",
  Stripe: "bg-purple-500 text-white",
  Firebase: "bg-yellow-400 text-black",
  TailwindCSS: "bg-teal-500 text-white",
  GSAP: "bg-indigo-500 text-white",
  WordPress: "bg-blue-800 text-white",
  Elementor: "bg-pink-600 text-white",
  Redis: "bg-red-600 text-white",
  Paystack: "bg-cyan-600 text-white",

  HTML: "bg-orange-600 text-white",     
  CSS: "bg-blue-600 text-white",       
  JavaScript: "bg-yellow-500 text-black" 
};




const ProjectsGrid = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      // Animate project cards
      gsap.fromTo(
        el.querySelectorAll(".project-card"),
        { autoAlpha: 0, y: 50, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          onComplete: () => {
            // Animate tech badges for each card after card animation
            el.querySelectorAll(".project-card").forEach((card) => {
              gsap.fromTo(
                card.querySelectorAll(".tech-badge"),
                { opacity: 0, y: 10 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "power2.out",
                }
              );
            });
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 px-7 md:px-30">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card bg-surface rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primarytext mb-2">{project.title}</h3>
                <p className="text-secondarytext mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`tech-badge px-3 py-1 rounded-full text-sm font-medium ${
                        techColors[tech] || "bg-gray-300 text-black"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="text-brand font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid place-items-center">
          <Link
            to="https://github.com/Adeleyeshina/"
            className="inline-block px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            View More Projects & Code on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
