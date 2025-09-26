import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "../../assets/images/profile.png"

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (el) {
            const [image, text] = el.querySelectorAll(".fade-item");

            gsap.fromTo(
                image,
                { autoAlpha: 0, x: -50 },
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                }
            );

            gsap.fromTo(
                text,
                { autoAlpha: 0, x: 50 },
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-surface py-20 px-7 md:px-30 ">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
                {/* Left: Image / Avatar */}


                {/* Right: Text */}
                <div className="fade-item text-center md:text-left or order-1 md:order-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
                        About Me
                    </h2>
                    <p className="text-secondarytext mb-8 leading-relaxed max-w-xl">
                        I’m <span className="text-primarytext font-semibold">Shina Adeleye</span>,
                        a passionate developer skilled in building modern web and mobile
                        applications using React, React Native, Expo, Node JS and TailwindCSS.
                        I love crafting clean, functional, and engaging digital experiences.
                    </p>
                    <a
                        href="/about"
                        className="inline-block px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow-md hover:scale-105 transition-transform"
                    >
                        Learn More
                    </a>
                </div>

                <div className="fade-item flex justify-center">
                    <div className="w-80  rounded-2xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700">
                        <img
                            src={profile}
                            alt="Adeleye Shina"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
