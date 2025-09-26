import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutIntro = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".about-item"),
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background py-20 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="about-item text-3xl md:text-5xl font-bold text-brand mb-6">
          About Me
        </h1>
        <p className="about-item text-lg text-secondarytext leading-relaxed mb-6">
          Hi 👋 I’m <span className="text-primarytext font-semibold">Shina Adeleye</span>, 
          a passionate <span className="text-brand">Web & Mobile Developer</span>.  
          I specialize in <span className="font-semibold">React, React Native, Expo, 
          Shopify, and WordPress</span>, creating modern, responsive, and user-focused 
          digital solutions.
        </p>
        <p className="about-item text-lg text-secondarytext leading-relaxed">
          With experience in both academic projects and real-world freelancing, 
          I’ve built e-commerce stores, telemedicine platforms, and mobile apps 
          that help businesses grow and connect with people worldwide.
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
