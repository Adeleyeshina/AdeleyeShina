import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const AboutCTA = () => {
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
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-brand py-20 px-6 text-center text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="cta-item text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Something Great Together 💡
        </h2>
        <p className="cta-item text-lg text-white/90 mb-8">
          Interested in working with me? Whether it’s a website, mobile app, or
          a full digital solution — I’d love to hear from you.
        </p>
        <Link
          to="/contact"
          className="cta-item inline-block px-8 py-4 rounded-lg bg-white text-brand font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
