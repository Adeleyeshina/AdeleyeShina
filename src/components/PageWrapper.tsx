import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { autoAlpha: 0, yPercent: 10 },
        { autoAlpha: 1, yPercent: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div ref={containerRef} className="min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
