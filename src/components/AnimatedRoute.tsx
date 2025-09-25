import { Routes, Route, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import NotFound from "../pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;

    if (el) {
      // Make sure the container doesn't push layout
      gsap.set(el, { position: "relative" });

      // Entry animation
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 30 }, // use autoAlpha (opacity + visibility)
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }

    return () => {
      if (el) {
        // Exit animation (doesn't cause overflow now)
        gsap.to(el, {
          autoAlpha: 0,
          y: -30,
          duration: 0.5,
          ease: "power3.in",
        });
      }
    };
  }, [location]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div ref={containerRef} className="min-h-screen px-6">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default AnimatedRoutes;
