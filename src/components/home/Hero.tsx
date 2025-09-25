import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CV from '../../Shina Resume.pdf'

const Hero = () => {
  const words = ["Software Developer", "Fullstack Developer", "Mobile Developer", "Wordpress Developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

    //   const handleCVDownload = () => {
    //     const pdfUrl = CV;
    //     const link = document.createElement("a");
    //     link.href = pdfUrl;
    //     link.download = "your file name.pdf";
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

  return (
    <section className="w-full py-25 md:py-30 flex flex-col items-center justify-center text-center bg-background px-6 ">
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-brand mb-4">
        Hi, I’m <span className="text-primarytext">ADELEYE SHINA</span>
      </h1>

      {/* Typing Skills */}
      <h2 className="text-2xl md:text-3xl font-semibold text-secondarytext h-10">
        {text}
        <span className="border-r-2 border-brand animate-pulse ml-1"></span>
      </h2>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-6 flex-wrap justify-center">
        <Link
          to="/projects"
          className="px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow-md hover:scale-105 transition-transform"
        >
          View Projects
        </Link>
        <a
        href={CV}
        download
          className="px-6 py-3 rounded-lg bg-surface text-brand font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
