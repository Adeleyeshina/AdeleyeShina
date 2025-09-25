import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../../utils/serviceContant";

gsap.registerPlugin(ScrollTrigger);


const ServicesPreview = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".service-card"),
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
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
    <section ref={sectionRef} className="w-full bg-background py-20 px-7 md:px-30">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-10">
          My Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.key}
              className="service-card bg-surface rounded-xl shadow-md p-8 text-left hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primarytext mb-3">
                {service.title}
              </h3>
              <p className="text-secondarytext text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="mt-10">
          <a
            href="/services"
            className="inline-block px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Explore All Services
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesPreview;
